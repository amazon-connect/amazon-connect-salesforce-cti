/**
    To generate a pdf of the lightning installation guide:
    npm run build-pdf lightning

    To generate a pdf of the classic installation guide:
    npm run build-pdf classic

    To generate both:
    npm run build-pdf-all
*/

const fs = require("fs");
const mdpdf = require("mdpdf");
const path = require("path");
const { Remarkable } = require("remarkable");
const { searchFoldersForMarkdownFiles, textToId, getHeaderText } = require("./util");

const version = process.argv[2].toLowerCase().trim();
if (!["lightning", "classic"].includes(version))
  throw new Error(
    `${version} is not a valid argument. Argument must be either "lightning" or "classic".`
  );
const dir = `../${version}`;

const files = [];
searchFoldersForMarkdownFiles([dir], files);

const remarkable = new Remarkable({ breaks: false, html: true });

files.forEach((fileObj) => {
  const file = `${fileObj.path.join("/")}/${fileObj.filename}`;
  const fileContents = fs.readFileSync(file).toString();
  const text = remarkable
    .render(
      fileContents
        .replace(
          // the following regex statement looks for links that point internally to this repo
          /\[((?!\[).)*\]\((\n)?(?!http)((?!\().)*(\n)?\)/gs,
          (text) => {
            const section = textToId(
              text.substring(text.indexOf("[") + 1, text.indexOf("]"))
            );
            // link with html anchor that points to the link text lowercase, and with dashes (-) in place for spaces.
            return `${text.substring(0, text.indexOf("]") + 1)}(#${section})\n`;
          }
        )
        // fix image path to be relative to this file
        .replace(/"(.)+media\/image/g, `"${dir}/media/image`)
        // add ids to headers
        .replace(/( )*<h[1-6].*<\/( )*h[1-6]( )*>/g, (header) => {
          const headerId = textToId(getHeaderText(header));
          if (header.match(/id( )*=( )*"/)) {
            return header.replace(/id( )*=( )*"[a-z-:_. ]*"/, ` id="${headerId}"`);
          } else {
            return header.replace(/>/, ` id="${headerId}">`);
          }
        })
    )
    // remarkable replaces quotation marks with "&quot;". This causes problems in code blocks.
    .replace(/&quot;/g, '"');
  fs.appendFileSync("temp.md", text);
});

mdpdf.convert({
  source: path.join(__dirname, "temp.md"),
  destination: path.join(__dirname, `${version}.pdf`),
  styles: path.join(__dirname, "styles.css"),
  pdf: {
    orientation: "orientation",
    border: {
      top: "2cm",
      left: "2cm",
      bottom: "2cm",
      right: "2cm",
    },
  },
});

setTimeout(() => fs.unlinkSync(path.join(__dirname, "temp.md")), 100);
