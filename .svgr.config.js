const path = require("path");

function clearAndUpper(text) {
  return text.replace(/-/, "").toUpperCase();
}

function toPascalCase(text) {
  return text.replace(/(^\w|-\w)/g, clearAndUpper);
}

module.exports = {
  typescript: true,
  filenameCase: "kebab",
  indexTemplate: (filePaths) => {
    const exportEntries = filePaths.map((filePath) => {
      const basename = path.basename(filePath, path.extname(filePath));
      const exportName = toPascalCase(basename);
      return `export { default as ${exportName} } from './${basename}'`;
    });
    return exportEntries.join("\n");
  },
};
