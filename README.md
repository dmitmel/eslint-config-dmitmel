<a href="https://eslint.org/">
  <img src="https://eslint.org/img/logo.svg" height="150" align="right">
</a>

# eslint-config-dmitmel

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

> ESLint configuration for my projects

## Installation

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

## Features

1.  Almost full compliance with the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
2.  Formatting using [Prettier](https://github.com/prettier/eslint-plugin-prettier) ([without conflicts with ESLint](https://github.com/prettier/eslint-config-prettier))
3.  Auto-detection of optional dependencies
    * [Babel parser](https://github.com/babel/babel-eslint)
    * [React plugin](https://github.com/yannickcr/eslint-plugin-react)
    * [React accessibility plugin](https://github.com/evcohen/eslint-plugin-jsx-a11y)

## Contribute

PRs accepted.

## License

[MIT](LICENSE) © [Dmytro Meleshko](https://github.com/dmitmel)
