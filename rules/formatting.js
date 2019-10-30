// Formatting, I'm trying to immitate the style of Prettier here

const prettierConfig = require('../prettier.config');

module.exports = {
  rules: {
    curly: ['warn', 'multi-line', 'consistent'],

    indent: [
      'warn',
      prettierConfig.useTabs ? 'tab' : prettierConfig.tabWidth,
      { SwitchCase: 1 },
    ],
    'no-tabs': ['warn', { allowIndentationTabs: prettierConfig.useTabs }],

    quotes: [
      'warn',
      prettierConfig.singleQuote ? 'single' : 'double',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],

    semi: ['warn', prettierConfig.semi ? 'always' : 'never'],
    'semi-style': prettierConfig.semi ? ['off'] : ['warn', 'first'],

    'max-len': [
      'warn',
      {
        code: prettierConfig.printWidth,
        tabWidth: prettierConfig.tabWidth,
        ignoreUrls: true,
      },
    ],

    'quote-props':
      prettierConfig.quoteProps === 'as-needed' ||
        prettierConfig.quoteProps === 'consistent'
        ? ['warn', prettierConfig.quoteProps]
        : ['off'],
    'jsx-quotes': [
      'warn',
      prettierConfig.jsxSingleQuote ? 'prefer-single' : 'prefer-double',
    ],

    'comma-dangle':
      prettierConfig.trailingComma === 'none'
        ? ['warn', 'never']
        : prettierConfig.trailingComma === 'es5' ||
          prettierConfig.trailingComma === 'all'
          ? ['warn', 'always-multiline']
          : ['off'],

    'object-curly-spacing': [
      'warn',
      prettierConfig.bracketSpacing ? 'always' : 'never',

    ],
    'arrow-parens':
      prettierConfig.arrowParens === 'avoid'
        ? ['warn', 'as-needed']
        : prettierConfig.arrowParens === 'always'
          ? ['warn', 'always']
          : ['off'],

    'array-bracket-newline': ['warn', 'consistent'],
    'array-bracket-spacing': ['warn', 'never'],
    'array-element-newline': ['warn', 'consistent'],
    'block-spacing': ['warn', 'always'],
    'brace-style': ['warn', '1tbs'],
    'comma-spacing': ['warn', { before: false, after: true }],
    'computed-property-spacing': [
      'error',
      'never',
      {
        enforceForClassMembers: true,
      },
    ],
    'dot-location': ['warn', 'property'],
    'eol-last': ['warn', 'always'],
    'func-call-spacing': ['warn', 'never'],
    'function-call-argument-newline': ['error', 'consistent'],
    'function-paren-newline': ['warn', 'multiline-arguments'],
    'key-spacing': [
      'warn',
      {
        beforeColon: false,
        afterColon: true,
        mode: 'strict',
      },
    ],
    'keyword-spacing': ['warn', { before: true, after: true }],
    'linebreak-style': ['warn', 'unix'],
    'multiline-ternary': ['warn', 'always-multiline'],
    'new-parens': ['error', 'always'],
    'no-extra-parens': ['warn', 'all', {
      nestedBinaryExpressions: false,
      ignoreJSX: 'all',
      enforceForArrowConditionals: false,
    }],
    'no-extra-semi': ['warn'],
    'no-floating-decimal': ['warn'],
    'no-mixed-spaces-and-tabs': ['warn', 'smart-tabs'],
    'no-multi-spaces': ['off', { ignoreEOLComments: true }],
    'no-multiple-empty-lines': ['warn', { max: 1 }],
    'no-trailing-spaces': ['warn'],
    'no-whitespace-before-property': ['warn'],
    'object-curly-newline': ['warn', { consistent: true }],
    'object-property-newline': ['warn', { allowAllPropertiesOnSameLine: true }],
    'operator-linebreak': ['warn'],
    'padded-blocks': ['warn', 'never'],
    'semi-spacing': ['warn', { before: false, after: true }],
    'space-before-blocks': ['warn', 'always'],
    'space-before-function-paren': [
      'warn',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'space-in-parens': ['warn', 'never'],
    'space-infix-ops': ['warn'],
    'space-unary-ops': ['warn', { words: true, nonwords: false }],
    'switch-colon-spacing': ['warn', { before: false, after: true }],
    'template-tag-spacing': ['error', 'never'],

    'arrow-body-style': ['warn', 'as-needed'],
    'arrow-spacing': ['warn', { before: true, after: true }],
    'generator-star-spacing': [
      'error',
      {
        before: false,
        after: true,
        anonymous: 'neither',
        method: { before: true, after: false },
      },
    ],
    'no-confusing-arrow': ['warn', { allowParens: true }],
    'rest-spread-spacing': ['warn', 'never'],
    'template-curly-spacing': ['warn', 'never'],
    'wrap-iife': ['warn', 'inside', { functionPrototypeMethods: true }],
    'yield-star-spacing': ['error', 'after'],
  },
};
