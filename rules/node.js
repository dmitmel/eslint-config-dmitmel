module.exports = {
  extends: ['plugin:n/recommended'],

  rules: {
    'n/no-unsupported-features/es-syntax': ['error', { ignores: ['hashbang'] }],
  },
};
