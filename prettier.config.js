module.exports = {
  trailingComma: 'all',
  semi: true,
  singleQuote: true,
  overrides: [
    {
      files: '.editorconfig',
      options: { parser: 'yaml' },
    },
    {
      files: 'LICENSE',
      options: { parser: 'markdown' },
    },
  ],
}
