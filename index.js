const prettierConfig = require('./prettier.config');

function moduleExists(id) {
  try {
    require.resolve(id);
    return true;
  } catch (e) {
    return false;
  }
}

const presets = [
  'airbnb-base/rules/best-practices',
  'airbnb-base/rules/errors',
  'airbnb-base/rules/node',
  'airbnb-base/rules/style',
  'airbnb-base/rules/variables',
  'airbnb-base/rules/es6'
];
if (moduleExists('eslint-plugin-import'))
  presets.push('airbnb-base/rules/imports');
if (moduleExists('eslint-config-prettier'))
  // turns off all rules that are unnecessary or might conflict with Prettier
  presets.push('prettier');

const plugins = [];
if (moduleExists('eslint-plugin-prettier'))
  // runs Prettier as an ESLint rule
  plugins.push('prettier');

module.exports = {
  extends: presets,
  plugins,

  parser: moduleExists('babel-eslint') ? 'babel-eslint' : null,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },

  env: {
    commonjs: true
  },

  rules: {
    curly: [
      'error',
      // remove curly braces only if a block contains one single-line statement
      'multi-or-nest',
      // enforce all bodies of an `if`, `else if` and `else` chain to be with
      // or without braces
      'consistent'
    ],

    'no-console': 'off',
    'no-nested-ternary': 'off', // useful in JSX
    'no-param-reassign': 'off',
    'no-use-before-define': 'off',

    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: { array: false, object: true },
        AssignmentExpression: { array: false, object: false }
      },
      { enforceForRenamedProperties: false }
    ],

    'global-require': 'off',
    'import/no-dynamic-require': 'off',

    'prettier/prettier': ['error', prettierConfig]
  }
};
