// Type errors, pretend that JS is a statically typed language like Rust

module.exports = {
  rules: {
    // assignments {{{

    // the assignment expression returns `null` or `undefined`
    'no-cond-assign': ['error', 'always'],
    'no-return-assign': ['error', 'always'],
    'no-multi-assign': ['error'],

    // imported idenfitiers are read-only
    'no-import-assign': ['error'],

    // }}}

    // type casting and coercion {{{

    'no-extra-boolean-cast': ['warn'],
    // operators are strongly typed and shouldn't be used for type casting
    'no-implicit-coercion': ['error'],

    // }}}

    // the Rust compiler would say something like "value moved into closure
    // here, in previous iteration of loop", but I'm overthinking this since
    // JS doesn't have a concept of ownership and borrows of Rust
    'no-loop-func': ['error'],

    // deprecated (therefore undefined) identifiers {{{

    'prefer-rest-params': ['error'], // `arguments`
    'no-caller': ['error'], // `arguments.caller` and `arguments.callee`
    'no-eval': ['error'], // `eval`
    // functions similar to `eval` or passing incorrect types (i.e. strings) to
    // functions like `setTimeout`
    'no-implied-eval': ['error'],

    // }}}

    // constructors {{{

    // the following classes can't be constructed (constructors are undefined):
    // - Object
    // - Function
    // - Array
    // - Boolean
    // - Number
    // - String
    // - Symbol
    // - Buffer
    'no-new-object': ['error'], // Object
    'no-new-func': ['error'], // Function
    'no-array-constructor': ['error'], // Array
    'no-new-wrappers': ['error'], // Boolean, Number, String
    'no-new-symbol': ['error'], // Symbol
    'no-buffer-constructor': ['error'], // Buffer

    // }}}

    // operators {{{

    // This decision comes from Rust: in the Rust standard library there is a
    // struct called `PathBuf` (and `Path` for slices of paths, but that's a
    // whole another story) for storing file paths that provides a lot of
    // functionality specific for file paths, so you can't just concatenate a
    // string to a path, you have to use specific methods for that. JavaScript
    // and Node.js on the other hand represent paths as regular strings. In
    // case of `__dirname` and `__filename` I assume that these variables have
    // a special type for file paths which doesn't implement the `+` operator
    // for concatenating them with strings.
    'no-path-concat': ['error'],

    // the `NaN` value does not implement the comparison operator
    'use-isnan': ['error', { enforceForSwitchCase: true }],

    // the `==` operator isn't implemented for anything but `null`
    eqeqeq: ['error', 'always', { null: 'never' }],

    // returned values of `typeof` are members of a enum (and yes, `typeof` is
    // in fact an operator)
    'valid-typeof': ['error', { requireStringLiterals: true }],

    'prefer-spread': ['error'],

    // }}}

    // function signatures {{{

    // the second argument of `parseInt` is required
    radix: ['error'],

    // the first argument of `Symbol` is required
    'symbol-description': ['error'],

    // the `throw` expression and `Promise.reject` require their argument to be
    // an instance of the `Error` class
    'no-throw-literal': ['error'],
    'prefer-promise-reject-errors': ['error'],

    // iterator callbacks in `map`/`filter`/`reduce`/etc must return a value
    'array-callback-return': ['error'],

    // }}}

    // classes {{{

    // prototypes of builtin classes are read-only
    'no-extend-native': ['error'],

    // objects might not have methods like `hasOwnProperty` when created with
    // `Object.create(null)`
    'no-prototype-builtins': ['warn'],

    // `new require('module')()` looks really weird
    'no-new-require': ['error'],

    // there is no way to tell whether a function is a constructor or not, so
    // constructors must be named with a first capital letter (regular
    // functions can't be instantiated, this is common sense)
    'new-cap': ['error', { properties: true }],

    // }}}
  },
};
