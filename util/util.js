const fs = require("fs");

const searchFoldersForMarkdownFiles = (folders, files) => {
  const nextFolders = [];
  const filesInFolder = [];
  fs.readdirSync(folders.join("/"), { withFileTypes: true }).forEach((file) => {
    if (!file.isDirectory()) {
      if (file.name.includes(".md")) {
        filesInFolder.push({ path: folders, filename: file.name });
      }
      // ignore folders that don't start with numbers
    } else if (!isNaN(parseInt(file.name[0]))) {
      nextFolders.push(file.name);
    }
  });

  // readme files in folders should show up first
  const readmeIndex = filesInFolder.findIndex((file) =>
    file.filename.toLowerCase().endsWith("readme.md")
  );
  if (readmeIndex > -1) {
    filesInFolder.splice(0, 0, filesInFolder.splice(readmeIndex, 1)[0]);
  }

  files.push(...filesInFolder);

  nextFolders.forEach((name) =>
    searchFoldersForMarkdownFiles([...folders, name], files)
  );
};

const textToId = (text) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/\ /g, "-")
    .replace(/[^a-z0-9-_:.]/g, "");
};

const getHeaderText = (header) => {
  const textStart = header.indexOf(">");
  const textEnd = header.indexOf("</");
  return header.substring(textStart + 1, textEnd);
};

module.exports = { searchFoldersForMarkdownFiles, textToId, getHeaderText };
