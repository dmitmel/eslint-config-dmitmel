const prettierConfig = require('./prettier.config');

let parser;
try {
  require.resolve('babel-eslint');
  parser = 'babel-eslint';
} catch (e) {}

module.exports = {
  extends: [
    // "A mostly reasonable approach to JavaScript"
    'airbnb-base',
    // disables `'use strict';` warnings
    'airbnb-base/rules/strict',
    // turns off all rules that are unnecessary or might conflict with Prettier
    'prettier'
  ],
  plugins: [
    // runs Prettier as an ESLint rule
    'prettier'
  ],

  parser,

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
    'no-empty': ['error', { allowEmptyCatch: true }],
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
