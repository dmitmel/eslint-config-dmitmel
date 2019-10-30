function moduleExists(id) {
  try {
    require.resolve(id);
    return true;
  } catch (_e) {
    return false;
  }
}

module.exports = {
  extends: ['eslint:recommended'].concat(
    [
      'syntax-errors',
      'type-errors',
      'recommendations',
      // 'formatting',
      'prettier',
    ].map(m => require.resolve(`../rules/${m}`)),
  ),

  env: {
    es6: true,
  },

  parser: moduleExists('babel-eslint') ? 'babel-eslint' : null,
  parserOptions: {
    ecmaVersion: 2015,
  },

  reportUnusedDisableDirectives: true,
};
