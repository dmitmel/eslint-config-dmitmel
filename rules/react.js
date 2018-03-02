module.exports = {
  extends: ['airbnb/rules/react'],

  rules: {
    'react/forbid-prop-types': 'off',
    'react/prop-types': ['error', { ignore: 'children' }],
    'react/require-default-props': 'off'
  }
};
