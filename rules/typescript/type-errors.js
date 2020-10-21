// let's make typechecking even stricter! yay! ^w^

const { rules: rulesJS } = require('../type-errors');

module.exports = {
  rules: {
    '@typescript-eslint/ban-types': ['error'],

    // unfortunately, purpose of this rule is beyond my understanding right now
    // (bivarance? covariance? contravariance? I suppose this is group theory),
    // so I'll keep it disabled for now
    '@typescript-eslint/method-signature-style': ['off'],

    // `any` can be useful sometimes (e.g. as a return type of deserialization
    // functions like `JSON.parse`), but in the most cases it should really be
    // avoided like a plague
    '@typescript-eslint/no-explicit-any': ['error'],

    // imagine that the non-null assertion operator is implemented only for
    // nullable values, similar to how `.unwrap()` is avaliable only on
    // `Option<T>` and `Result<T, E>` types
    '@typescript-eslint/no-extra-non-null-assertion': ['error'],

    '@typescript-eslint/no-non-null-assertion': ['off'],

    // unfortunately this rule breaks functions whose return type is a union of
    // void and non-void types (in other words, functions with optional returned
    // value), so I have to disable it
    '@typescript-eslint/no-invalid-void-type': [
      'off', // 'error',
      // useful in, say, expression `new Promise<void>(() => {})`
      // I might as well specify a whitelist here once I have a sufficient
      // number of big TS codebases for testing effects of this rule
      { allowInGenericTypeArguments: true },
    ],

    'no-array-constructor': ['off'],
    '@typescript-eslint/no-array-constructor': rulesJS['no-array-constructor'],

    // enhanced versions of the built-in rules {{{

    'no-loop-func': ['off'],
    '@typescript-eslint/no-loop-func': rulesJS['no-loop-func'],

    // }}}
  },
};
