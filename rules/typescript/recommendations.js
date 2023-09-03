const { rules: rulesJS } = require('../recommendations');

module.exports = {
  rules: {
    // override for `plugin:@typescript-eslint/recommended`
    'prefer-const': ['off'],

    '@typescript-eslint/no-extraneous-class': ['warn'],

    // fun fact: JS doesn't have arrow generator functions
    '@typescript-eslint/no-this-alias': [
      'warn',
      { allowDestructuring: true, allowedNames: ['self'] },
    ],

    // performance and runtime environment support matter
    '@typescript-eslint/prefer-for-of': ['off'],

    // while this isn't an error per se, IMO using a non-null assertion after an
    // optional chain (which is **designed** to help handle nullable values)
    // defeats the purpose of it and in practice is shooting yourself in the
    // leg, so I made it an error as well
    '@typescript-eslint/no-non-null-asserted-optional-chain': ['error'],

    // types {{{

    '@typescript-eslint/no-empty-interface': ['warn', { allowSingleExtends: true }],

    '@typescript-eslint/no-inferrable-types': ['warn'],

    '@typescript-eslint/prefer-as-const': ['warn'],

    '@typescript-eslint/prefer-function-type': ['warn'],

    '@typescript-eslint/unified-signatures': ['warn'],

    '@typescript-eslint/sort-type-union-intersection-members': ['off'],

    '@typescript-eslint/no-unnecessary-type-constraint': ['warn'],

    // }}}

    // improved versions of the built-in rules {{{

    'no-magic-numbers': ['off'],
    '@typescript-eslint/no-magic-numbers': rulesJS['no-magic-numbers'],

    'no-unused-expressions': ['off'],
    '@typescript-eslint/no-unused-expressions': rulesJS['no-unused-expressions'],

    'no-unused-vars': ['off'],
    // see https://github.com/typescript-eslint/typescript-eslint/issues/1856
    '@typescript-eslint/no-unused-vars': rulesJS['no-unused-vars'],
    // an alternative is this, though it is unstable and slow at the moment:
    '@typescript-eslint/no-unused-vars-experimental': ['off'],

    'no-useless-constructor': ['off'],
    '@typescript-eslint/no-useless-constructor': rulesJS['no-useless-constructor'],

    // }}}
  },
};
