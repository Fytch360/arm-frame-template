module.exports = {
  printWidth: 100,
  useTabs: false,
  tabWidth: 2,
  singleQuote: true,
  semi: false,
  trailingComma: "es5",
  arrowParens: "always",
  overrides: [
    {
      files: "*.{js,jsx,ts,tsx}",
      options: {
        trailingComma: "all",
        parser: "typescript",
      },
    },
    {
      files: "*.{md,mdx}",
      options: {
        proseWrap: "always",
      },
    },
  ],
};
