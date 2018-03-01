const prettierConfig = require('./prettier.config');

const { resolve } = require;

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
    'eslint-config-airbnb-base',
    'eslint-config-airbnb-base/rules/strict',
    'eslint-config-prettier'
  ].map(resolve),
  plugins: ['prettier'],

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
    ],

    'prettier/prettier': ['error', prettierConfig]
  }
};

if (moduleExists('eslint-plugin-react')) {
  config.extends = config.extends.concat(
    ['eslint-config-airbnb/rules/react', 'eslint-config-prettier/react'].map(
      resolve
    )
  );

  Object.assign(config.rules, {
    'react/forbid-prop-types': 'off',
    'react/prop-types': ['error', { ignore: 'children' }],
    'react/require-default-props': 'off'
  });
}

if (moduleExists('eslint-plugin-jsx-a11y'))
  config.extends.push(resolve('eslint-config-airbnb/rules/react-a11y'));

if (moduleExists('babel-eslint')) config.parser = 'babel-eslint';

module.exports = config;
