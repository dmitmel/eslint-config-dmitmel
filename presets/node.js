module.exports = {
  extends: [require.resolve('./core')],

  env: {
    node: true,
  },

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },

  reportUnusedDisableDirectives: true,
};
