// let's pretend that TS has stricter syntax rules

const { rules: rulesJS } = require('../syntax-errors');

module.exports = {
  rules: {
    '@typescript-eslint/no-misused-new': ['error'],

    '@typescript-eslint/no-parameter-properties': ['off'],

    '@typescript-eslint/no-type-aliases': ['off'],

    // banned ("illegal" in my opinion) syntax {{{

    '@typescript-eslint/consistent-type-assertions': [
      'error',
      // angle brackets conflict with my syntax highlighting and JSX syntax
      { assertionStyle: 'as' },
    ],

    // using dynamic expressions in the place of property for `delete` is an
    // error, similar to how you can only use statically-computed values for
    // `const`ants and `static` variables in Rust
    '@typescript-eslint/no-dynamic-delete': ['error'],

    // disallow `namespace` in non-declaration positions
    '@typescript-eslint/no-namespace': [
      'error',
      { allowDeclarations: true, allowDefinitionFiles: true },
    ],
    // disallows the `module` keyword in non-declarations
    '@typescript-eslint/prefer-namespace-keyword': ['error'],

    // }}}

    // functions {{{

    '@typescript-eslint/adjacent-overload-signatures': ['error'],

    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
        allowConciseArrowFunctionExpressionsStartingWithVoid: true,
      },
    ],
    // return types are already checked by `explicit-function-return-type`
    '@typescript-eslint/explicit-module-boundary-types': ['off'],

    // }}}

    // compile-time pragmas {{{

    '@typescript-eslint/ban-ts-comment': ['error'],
    '@typescript-eslint/prefer-ts-expect-error': ['error'],

    '@typescript-eslint/triple-slash-reference': [
      'error',
      { path: 'always', types: 'prefer-import', lib: 'always' },
    ],

    // }}}

    // enhanced versions of the built-in rules {{{

    'default-param-last': ['off'],
    '@typescript-eslint/default-param-last': rulesJS['default-param-last'],

    'init-declarations': ['off'],
    '@typescript-eslint/init-declarations': rulesJS['init-declarations'],

    'no-dupe-class-members': ['off'],
    '@typescript-eslint/no-dupe-class-members': rulesJS['no-dupe-class-members'],

    'no-empty-function': ['off'],
    '@typescript-eslint/no-empty-function': rulesJS['no-empty-function'],

    'no-invalid-this': ['off'],
    '@typescript-eslint/no-invalid-this': rulesJS['no-invalid-this'],

    // see https://github.com/typescript-eslint/typescript-eslint/issues/1856
    'no-use-before-define': ['off'],
    '@typescript-eslint/no-use-before-define': [
      rulesJS['no-use-before-define'][0],
      {
        ...rulesJS['no-use-before-define'][1],
        enums: rulesJS['no-use-before-define'][1].classes,
        typedefs: false,
        ignoreTypeReferences: true,
      },
    ],

    'no-redeclare': ['off'],
    '@typescript-eslint/no-redeclare': rulesJS['no-redeclare'],

    'no-shadow': ['off'],
    '@typescript-eslint/no-shadow': rulesJS['no-shadow'],

    // }}}
  },
};
