module.exports = {
  extends: ['./core', '../rules/node'],

  env: {
    node: true,
  },

  parserOptions: {
    ecmaVersion: 2019,
  },

  reportUnusedDisableDirectives: true,
};
