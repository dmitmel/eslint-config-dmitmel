const prettierConfig = require('./prettier.config');

function moduleExists(id) {
  try {
    require.resolve(id);
    return true;
  } catch (e) {
    return false;
  }
}

const config = {
  extends: [
    'airbnb-base/rules/best-practices',
    'airbnb-base/rules/errors',
    'airbnb-base/rules/node',
    'airbnb-base/rules/style',
    'airbnb-base/rules/variables',
    'airbnb-base/rules/es6'
  ],
  plugins: [],

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

    'global-require': 'off',

    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: { array: false, object: true },
        AssignmentExpression: { array: false, object: false }
      },
      { enforceForRenamedProperties: false }
    ]
  }
};

if (moduleExists('eslint-plugin-import'))
  config.extends.push('airbnb-base/rules/imports');

if (moduleExists('eslint-plugin-react')) {
  config.extends.push('airbnb/rules/react');
  config.rules['react/forbid-prop-types'] = 'off';
  config.rules['react/prop-types'] = ['error', { ignore: 'children' }];
  config.rules['react/require-default-props'] = 'off';
}
if (moduleExists('eslint-plugin-jsx-a11y'))
  config.extends.push('airbnb/rules/react-a11y');

if (moduleExists('eslint-config-prettier')) {
  // turns off all rules that are unnecessary or might conflict with Prettier
  config.extends.push('prettier');

  if (moduleExists('eslint-plugin-react'))
    config.extends.push('prettier/react');
}

if (moduleExists('eslint-plugin-prettier')) {
  // runs Prettier as an ESLint rule
  config.plugins.push('prettier');
  config.rules['prettier/prettier'] = ['error', prettierConfig];
}

if (moduleExists('babel-eslint')) config.parser = 'babel-eslint';

module.exports = config;
