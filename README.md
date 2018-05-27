<a href="https://eslint.org/">
  <img src="https://eslint.org/img/logo.svg" height="150" align="right">
</a>

# eslint-config-dmitmel

[![npm](https://img.shields.io/npm/v/eslint-config-dmitmel.svg?style=flat-square)](https://npmjs.com/package/eslint-config-dmitmel)
[![MIT License](https://img.shields.io/npm/l/eslint-config-dmitmel.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

> ESLint configuration for my projects

## Features

1.  Almost full compliance with the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
2.  Formatting using [Prettier](https://github.com/prettier/eslint-plugin-prettier) ([without conflicts with ESLint](https://github.com/prettier/eslint-config-prettier))
3.  Auto-detection of optional dependencies
    * [Babel parser](https://github.com/babel/babel-eslint)
    * [React plugin](https://github.com/yannickcr/eslint-plugin-react)
    * [React accessibility plugin](https://github.com/evcohen/eslint-plugin-jsx-a11y)

## Install

```bash
# for most projects
yarn add -D eslint-config-dmitmel

# for React projects
yarn add -D eslint-config-dmitmel babel-eslint eslint-plugin-react eslint-plugin-jsx-a11y
```

## Usage

**.eslintrc.yml**

```yaml
extends: eslint-config-dmitmel
# ...your overrides...
```

## Changed rules

### `curly`

* `multi-or-nest`: Use braces with all blocks **that contain multi-line statements**.
* `consistent`: All chained `if`, `else if` and `else` blocks must be either with or without braces.

### `global-require: off`

Disabled to allow optional imports.

### `no-console: off`

Although it's considered a best practice to avoid using `console` in browser JavaScript, `console` is commonly used in Node.js.

### `no-nested-ternary: off`

If the condition and branches are small, nested ternaries can be really handy.

### `no-param-reassign: off`

See `no-param-reassign` section of [this article](https://blog.javascripting.com/2015/09/07/fine-tuning-airbnbs-eslint-config/).

### `no-use-before-define: off`

Code is harder to understand when the low-level functions go first.

## Why do you use trailing/dangling commas?

See [this article](https://medium.com/@nikgraf/why-you-should-enforce-dangling-commas-for-multiline-statements-d034c98e36f8).

## Contribute

PRs accepted.

## License

[MIT](LICENSE) © [Dmytro Meleshko](https://github.com/dmitmel)
