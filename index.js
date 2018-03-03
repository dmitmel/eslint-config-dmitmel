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
    curly: [
      'error',
      // remove curly braces only if a block contains one single-line statement
      'multi-or-nest',
      // enforce all bodies of an `if`, `else if` and `else` chain to be with
      // or without braces
      'consistent'
    ],

    'no-console': 'off',
    'no-nested-ternary': 'off', // useful in JSX
    'no-param-reassign': 'off',
    'no-use-before-define': 'off',

    'global-require': 'off',

    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: { array: false, object: true },
        AssignmentExpression: { array: false, object: false }
      },
      { enforceForRenamedProperties: false }
    ]
  }
};
