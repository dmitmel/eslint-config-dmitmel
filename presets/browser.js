module.exports = {
  extends: [require.resolve('./core')],

  env: {
    browser: true,
  },

  parserOptions: {
    ecmaVersion: 2016,
    sourceType: 'script',
  },

  reportUnusedDisableDirectives: true,
};
