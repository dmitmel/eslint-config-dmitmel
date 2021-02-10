// Again, just like in the file '../formatting.js` here I try to replicate
// the style of Prettier. Fortunately I can reference a ton of rules from the
// ruleset in that file.

const { rules: rulesJS } = require('../formatting');

module.exports = {
  rules: {
    '@typescript-eslint/member-delimiter-style': [
      'warn',
      {
        multiline: { delimiter: 'semi', requireLast: true },
        singleline: { delimiter: 'semi', requireLast: false },
      },
    ],

    '@typescript-eslint/type-annotation-spacing': [
      'warn',
      {
        before: rulesJS['key-spacing'][1].beforeColon,
        after: rulesJS['key-spacing'][1].afterColon,
      },
    ],

    // upgraded versions of the built-in rules {{{

    'brace-style': ['off'],
    '@typescript-eslint/brace-style': rulesJS['brace-style'],

    'comma-spacing': ['off'],
    '@typescript-eslint/comma-spacing': rulesJS['comma-spacing'],

    'func-call-spacing': ['off'],
    '@typescript-eslint/func-call-spacing': rulesJS['func-call-spacing'],

    indent: ['off'],
    // see https://github.com/typescript-eslint/typescript-eslint/issues/1824
    // '@typescript-eslint/indent': rulesJS.indent,

    'keyword-spacing': ['off'],
    '@typescript-eslint/keyword-spacing': rulesJS['keyword-spacing'],

    'lines-between-class-members': ['off'],
    '@typescript-eslint/lines-between-class-members': rulesJS['lines-between-class-members'],

    'no-extra-parens': ['off'],
    '@typescript-eslint/no-extra-parens': rulesJS['no-extra-parens'],

    'no-extra-semi': ['off'],
    '@typescript-eslint/no-extra-semi': rulesJS['no-extra-semi'],

    quotes: ['off'],
    '@typescript-eslint/quotes': rulesJS.quotes,

    semi: ['off'],
    '@typescript-eslint/semi': rulesJS.semi,

    'space-before-function-paren': ['off'],
    '@typescript-eslint/space-before-function-paren': rulesJS['space-before-function-paren'],

    // }}}
  },
};
