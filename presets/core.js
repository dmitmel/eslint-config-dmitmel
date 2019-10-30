function moduleExists(id) {
  try {
    require.resolve(id);
    return true;
  } catch (_e) {
    return false;
  }
}

module.exports = {
  extends: [
    'eslint:recommended',
    '../rules/syntax-errors',
    '../rules/type-errors',
    '../rules/recommendations',
    // '../rules/formatting',
    '../rules/prettier',
  ],

  env: {
    es6: true,
  },

  parser: moduleExists('babel-eslint') ? 'babel-eslint' : null,
  parserOptions: {
    ecmaVersion: 2015,
  },

  reportUnusedDisableDirectives: true,
};
