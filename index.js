const prettierConfig = require('./prettier.config');

function moduleExists(id) {
  try {
    require.resolve(id);
    return true;
  } catch (e) {
    return false;
  }
}

const presets = [
  // "A mostly reasonable approach to JavaScript"
  'airbnb-base',
  // disables `'use strict';` warnings
  'airbnb-base/rules/strict'
];
if (moduleExists('eslint-config-prettier'))
  // turns off all rules that are unnecessary or might conflict with Prettier
  presets.push('prettier');

module.exports = {
  extends: presets,
  plugins: [
    // runs Prettier as an ESLint rule
    'prettier'
  ],

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

    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: { array: false, object: true },
        AssignmentExpression: { array: false, object: false }
      },
      { enforceForRenamedProperties: false }
    ],

    'global-require': 'off',
    'import/no-dynamic-require': 'off',

    'prettier/prettier': ['error', prettierConfig]
  }
};
