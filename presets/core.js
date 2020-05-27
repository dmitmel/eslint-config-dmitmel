module.exports = {
  extends: [
    'eslint:recommended',
    '../rules/syntax-errors',
    '../rules/type-errors',
    '../rules/recommendations',
  ],

  env: {
    es2017: true,
  },

  parserOptions: {
    ecmaVersion: 8,
  },

  reportUnusedDisableDirectives: true,
};
