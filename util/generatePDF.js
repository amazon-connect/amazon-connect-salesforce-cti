const fs = require("fs");
const mdpdf = require("mdpdf");
const path = require("path");
const { Remarkable } = require("remarkable");

const version = process.argv[2].toLowerCase().trim();
if (!["lightning", "classic"].includes(version))
  throw new Error(
    `${version} is not a valid argument. Argument must be either "lightning" or "classic".`
  );
const dir = `../${version}`;

const files = [];

const searchFoldersForMarkdownFiles = (folder, files) => {
  const folders = [];
  const filesInFolder = [];
  fs.readdirSync(folder, { withFileTypes: true }).forEach((file) => {
    if (!file.isDirectory()) {
      if (file.name.includes(".md")) {
        filesInFolder.push(`${folder}/${file.name}`);
      }
      // ignore folders that don't start with numbers
    } else if (!isNaN(parseInt(file.name[0]))) {
      folders.push(file.name);
    }
  });

  // readme files in folders should show up first
  const readmeIndex = filesInFolder.findIndex((file) =>
    file.toLowerCase().endsWith("/readme.md")
  );
  if (readmeIndex > -1) {
    filesInFolder.splice(0, 0, filesInFolder.splice(readmeIndex, 1)[0]);
  }

  files.push(...filesInFolder);

  folders.forEach((name) =>
    searchFoldersForMarkdownFiles(`${folder}/${name}`, files)
  );
};

searchFoldersForMarkdownFiles(dir, files);

const remarkable = new Remarkable({ breaks: false, html: true });

files.forEach((file) => {
  const fileContents = fs.readFileSync(file).toString();
  const text = remarkable.render(
    fileContents
      .replace(
        // the following regex statement looks for links that point internally to this repo
        /\[((?!\[).)*\]\((\n)?(https:\/\/(www.)?github.com\/amazon-connect\/amazon-connect-salesforce-cti|(?!http))((?!\().)*(\n)?\)/gs,
        (text) => {
          const section = text
            .substring(text.indexOf("[") + 1, text.indexOf("]"))
            .toLowerCase()
            .replace(/\ /g, "-");
          // link with html anchor that points to the link text lowercase, and with dashes (-) in place for spaces.
          return `${text.substring(0, text.indexOf("]") + 1)}(#${section})\n`;
        }
      )
      // fix image path to be relative to this file
      .replace(/"(.)+media\/image/g, `"${dir}/media/image`)
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
