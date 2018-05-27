function moduleExists(id) {
  try {
    require.resolve(id);
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = {
  extends: [
    'airbnb-base',
    'airbnb-base/rules/strict',
    moduleExists('eslint-plugin-react') && './rules/react.js',
    moduleExists('eslint-plugin-jsx-a11y') && './rules/react-a11y.js',
    './rules/prettier.js'
  ].filter(Boolean),

  parser: moduleExists('babel-eslint') ? 'babel-eslint' : null,

  rules: {
    curly: ['error', 'multi-or-nest', 'consistent'],

    'global-require': 'off',
    'no-console': 'off',
    'no-nested-ternary': 'off',
    'no-param-reassign': 'off',
    'no-use-before-define': 'off'
  }
};
