# eslint-config-dmitmel

> ESLint configuration for my projects

When writing this config I generally tried to replicate the behavior of [Rust](https://www.rust-lang.org/)c's and [Clippy](https://github.com/rust-lang/rust-clippy)'s lints.

## Installation

### Web projects

```sh
yarn add -D eslint dmitmel/eslint-config-dmitmel
```

**.eslintrc.yml**

```yaml
extends: eslint-config-dmitmel/presets/browser
```

### Node.js projects

```sh
yarn add -D eslint dmitmel/eslint-config-dmitmel eslint-plugin-node
```

**.eslintrc.yml**

```yaml
extends: eslint-config-dmitmel/presets/node
```

## License

[MIT](LICENSE) © [Dmytro Meleshko](https://github.com/dmitmel)
