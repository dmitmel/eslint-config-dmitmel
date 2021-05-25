module.exports = {
  // Parser is, unfortunately, resolved relative to this package.
  // parser: '@babel/eslint-parser',
  plugins: ['@babel/eslint-plugin'],
  extends: ['../rules/babel'],
};
