/**
    To generate a toc for the lightning installation guide:
    npm run build-toc lightning

    To generate a toc for the classic installation guide:
    npm run build-toc classic

    To generate both:
    npm run build-toc-all
*/

const fs = require("fs");
const { searchFoldersForMarkdownFiles, textToId, getHeaderText } = require("./util");

const version = process.argv[2].toLowerCase().trim();
if (!["lightning", "classic"].includes(version))
  throw new Error(
    `${version} is not a valid argument. Argument must be either "lightning" or "classic".`
  );
const dir = `../${version}`;

const files = [];
searchFoldersForMarkdownFiles([dir], files);
files.shift(); // ignore root readme file, where the TOC lives

let currentFolder = "";
const toc = [];
const outputFile = `${version}-toc.md`;

let removeIndent = false;
files.forEach((fileObj) => {
  const fileName = `${fileObj.path.join("/")}/${fileObj.filename}`;
  const fileContents = fs.readFileSync(fileName).toString();
  const headers = [
    ...fileContents.matchAll(
      // the following regex statement looks for headers with ids
      /( )*<h[1-6].*class( )*=( )*"[a-z-:_. ]*toc[a-z-:_. ]*".*<\/( )*h[1-6]( )*>/g
    ),
  ].map((regexObj) => regexObj[0]);

  if (headers.length && fileObj.path[fileObj.path.length - 1] !== currentFolder) {
    currentFolder = fileObj.path[fileObj.path.length - 1];
    // if the first file isn't the same as the folder name, add the
    // folder name to the toc as plain text. Otherwise, link to the
    // first file.
    if (currentFolder.substring(3) !== getHeaderText(headers[0])) {
      toc.push(`- ${currentFolder.substring(3)}\n`);
      removeIndent = false;
    } else {
      removeIndent = true;
    }
  }

  const path = `${fileObj.path.slice(1).join("/")}/${fileObj.filename}`.replace(
    / /g,
    "%20"
  );
  
  headers.forEach((header) => {
    const headerText = getHeaderText(header);
    const indents = Number(header[header.indexOf("h") + 1]) + (removeIndent ? -1 : 0);

    const entry = [];
    for (let i = 0; i < indents; i++) entry.push("  ");
    entry.push(`- [${headerText}](${path}#${textToId(headerText)})\n`);
    toc.push(entry.join(""))
  });
});

fs.writeFileSync(outputFile, toc.join(""));
