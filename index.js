const prettierConfig = require('./prettier.config');

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

  rules: {
    'arrow-parens': 'off',
    'comma-dangle': ['error', 'never'],
    curly: ['error', 'multi-or-nest', 'consistent'],
    'func-names': 'off',
    'function-paren-newline': 'off',
    'global-require': 'off',
    'max-len': 'off',
    'no-param-reassign': 'off',
    'no-console': 'off',
    'no-mixed-operators': 'off',
    'no-multi-assign': 'off',
    'no-nested-ternary': 'off',
    'no-plusplus': 'off',
    'no-return-assign': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-expressions': ['error', { allowShortCircuit: true }],
    'no-use-before-define': 'off',
    'object-curly-newline': 'off',
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: { array: false, object: true },
        AssignmentExpression: { array: false, object: false }
      },
      { enforceForRenamedProperties: false }
    ],

    'import/no-dynamic-require': 'off',

    'prettier/prettier': ['error', prettierConfig]
  }
};
