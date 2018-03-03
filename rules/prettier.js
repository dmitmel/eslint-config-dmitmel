const prettierConfig = require('../prettier.config');

module.exports = {
  extends: ['prettier'],
  plugins: ['prettier'],

  rules: {
    'prettier/prettier': ['error', prettierConfig]
  }
};
