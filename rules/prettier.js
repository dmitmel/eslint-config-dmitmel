const moduleExists = require('../moduleExists');
const prettierConfig = require('../prettier.config');

module.exports = {
  extends: [
    'prettier',
    moduleExists('eslint-plugin-react') && 'prettier/react'
  ].filter(Boolean),
  plugins: ['prettier'],

  rules: {
    'prettier/prettier': ['error', prettierConfig]
  }
};
