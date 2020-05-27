const { rules: rulesJS } = require('../recommendations');

module.exports = {
  rules: {
    camelcase: ['off'],
    '@typescript-eslint/naming-convention': [
      rulesJS.camelcase[0],
      {
        selector: 'default',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
        filter: {
          regex: '^[a-zA-Z_$][a-zA-Z0-9_$]*$',
          match: true,
        },
      },
    ],

    // unfortunately I have to work with nw.js where it isn't possible to import
    // Node.js modules via the ES6 syntax
    '@typescript-eslint/no-require-imports': ['off'], // disallows the `require()` function entirely
    '@typescript-eslint/no-var-requires': ['off'], // only disallows using the returned value of `require()`

    // types and type annotations {{{

    '@typescript-eslint/array-type': ['warn', { default: 'array-simple' }],

    // https://microsoft.github.io/TypeScript-New-Handbook/everything/#interface-vs-alias
    // https://www.typescriptlang.org/docs/handbook/advanced-types.html#interfaces-vs-type-aliases
    // https://pawelgrzybek.com/typescript-interface-vs-type/
    '@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],

    // see notes in https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/typedef.md#when-not-to-use-it
    // basically this rule creates more friction than helps
    '@typescript-eslint/typedef': ['off'],

    // }}}

    // classes {{{

    '@typescript-eslint/class-literal-property-style': ['off'],

    '@typescript-eslint/member-ordering': ['off'],

    '@typescript-eslint/explicit-member-accessibility': ['off'], // TODO perhaps enable?

    // }}}
  },
};
