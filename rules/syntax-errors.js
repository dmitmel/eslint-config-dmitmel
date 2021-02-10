// Syntax errors

module.exports = {
  rules: {
    // `eslint:recommended` overrides {{{

    'no-debugger': ['off'],
    'no-empty': ['off'],
    'no-inner-declarations': ['off'],
    'no-control-regex': ['off'],

    // }}}

    'no-irregular-whitespace': ['error', { skipStrings: false }],

    // empty character classes are treated as errors in other environments
    'no-empty-character-class': ['error'],

    // switch-case fallthrough is almost always a sign of a mistake, so it is
    // treated as a syntax error
    'no-fallthrough': ['error'],

    'global-require': ['off'],

    // undefined {{{

    // disallow the identifier `undefined` itself
    'no-undefined': ['error'],
    // disallow initializing variables to `undefined`
    'no-undef-init': ['error'],

    // }}}

    // classes {{{

    // why does `this` even exist outside of classes and objects???
    'no-invalid-this': ['error'],

    'constructor-super': ['error'],

    'no-dupe-class-members': ['error'],

    // }}}

    // functions {{{

    // behave like Python in the case of default parameters
    'default-param-last': ['error'],

    'consistent-return': ['error'],

    'require-await': ['warn'],
    'require-yield': ['warn'],

    'no-empty-function': ['off'],

    // }}}

    // variables {{{

    'block-scoped-var': ['error'],
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false,
        variables: true,
      },
    ],
    'init-declarations': ['off'], // come on. this isn't Pascal
    // use of the same identifier for two items is an error
    // 'no-shadow': ['error', { builtinGlobals: true }], // two variables
    'no-shadow': ['off'], // turns out this rule is more annoying than helpful
    'no-redeclare': ['off'], // same as with no-shadow
    'no-label-var': ['error'], // a variable and a label

    // }}}

    // deprecated syntax and features {{{
    // these are deprecated (some by the spec, some by lack of usefulness, some
    // by common sense) and should not be used

    'no-var': ['error'],
    'no-void': ['error', { allowAsStatement: true }],
    'no-with': ['error'],
    'no-sequences': ['error'], // comma operator, as in `var a = (f(), b++);`
    'no-octal-escape': ['error'],
    'no-proto': ['error'], // `__proto__`
    'no-script-url': ['error'], // `javascript:...` URLs

    // }}}
  },
};
