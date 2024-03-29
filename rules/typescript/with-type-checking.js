const { rules: rulesTypeErrors } = require('../type-errors');
const { rules: rulesRecommendations } = require('../recommendations');
const { rules: rulesSyntaxErrors } = require('../syntax-errors');

module.exports = {
  rules: {
    // promises and async {{{

    '@typescript-eslint/await-thenable': ['error'],

    '@typescript-eslint/no-floating-promises': ['warn', { ignoreVoid: true, ignoreIIFE: true }],

    '@typescript-eslint/no-misused-promises': [
      'error',
      { checksConditionals: true, checksVoidReturn: false },
    ],

    // TODO: this rule sounded interesting, maybe I should revisit it in the future?
    '@typescript-eslint/promise-function-async': ['off'],

    'require-await': ['off'],
    '@typescript-eslint/require-await': rulesSyntaxErrors['require-await'],

    'no-return-await': ['off'],
    '@typescript-eslint/return-await': rulesRecommendations['no-return-await'],

    '@typescript-eslint/no-confusing-void-expression': ['warn', { ignoreArrowShorthand: true }],

    // }}}

    // standard library (haha funny) suggestions {{{

    '@typescript-eslint/prefer-includes': ['warn'],

    '@typescript-eslint/prefer-reduce-type-parameter': ['warn'],

    '@typescript-eslint/prefer-regexp-exec': ['off'],

    '@typescript-eslint/prefer-string-starts-ends-with': ['warn'],

    '@typescript-eslint/require-array-sort-compare': ['error', { ignoreStringArrays: true }],

    // }}}

    // forbidden "illegal" functions and methods {{{

    '@typescript-eslint/no-base-to-string': ['warn'],

    'no-implied-eval': ['off'],
    '@typescript-eslint/no-implied-eval': rulesTypeErrors['no-implied-eval'],

    // }}}

    '@typescript-eslint/no-for-in-array': ['error'],

    'no-throw-literal': ['off'],
    '@typescript-eslint/no-throw-literal': rulesTypeErrors['no-throw-literal'],

    '@typescript-eslint/no-unnecessary-boolean-literal-compare': ['warn'],

    'no-constant-condition': ['off'],
    '@typescript-eslint/no-unnecessary-condition': [
      rulesRecommendations['no-constant-condition'][0],
      {
        allowConstantLoopConditions: !rulesRecommendations['no-constant-condition'][1].checkLoops,
      },
    ],

    '@typescript-eslint/no-unnecessary-qualifier': ['off'],

    '@typescript-eslint/no-unnecessary-type-arguments': ['warn'],

    '@typescript-eslint/no-unnecessary-type-assertion': ['warn'],

    // same issue, e.g. `void | unknown` is rejected by this rule
    '@typescript-eslint/no-redundant-type-constituents': ['off'],

    '@typescript-eslint/no-unsafe-assignment': ['off'],
    '@typescript-eslint/no-unsafe-call': ['off'],
    '@typescript-eslint/no-unsafe-member-access': ['off'],
    '@typescript-eslint/no-unsafe-return': ['off'],

    '@typescript-eslint/prefer-nullish-coalescing': ['off'],
    '@typescript-eslint/prefer-optional-chain': ['warn'],

    '@typescript-eslint/restrict-plus-operands': ['error'],

    '@typescript-eslint/restrict-template-expressions': ['off'],

    '@typescript-eslint/unbound-method': ['off'],

    'dot-notation': ['off'],
    '@typescript-eslint/dot-notation': [
      rulesRecommendations['dot-notation'][0],
      {
        ...rulesRecommendations['dot-notation'][1],
        allowPrivateClassPropertyAccess: true,
        allowProtectedClassPropertyAccess: true,
      },
    ],

    // TODO: I **definitely** would like to have the following rules enabled in
    // the future, but alas right now I don't have time to evaluate its effects
    // on a big codebase
    '@typescript-eslint/strict-boolean-expressions': ['off'],
    '@typescript-eslint/switch-exhaustiveness-check': ['off'],
    '@typescript-eslint/prefer-readonly': ['off'],
    '@typescript-eslint/prefer-readonly-parameter-types': ['off'],

    '@typescript-eslint/non-nullable-type-assertion-style': ['warn'],
  },
};
