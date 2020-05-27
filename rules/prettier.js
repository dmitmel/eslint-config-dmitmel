const prettierConfig = require('../prettier.config');

module.exports = {
  extends: ['eslint-config-prettier'],
  plugins: ['eslint-plugin-prettier'],

  rules: {
    'prettier/prettier': ['warn', prettierConfig],
  },
};
