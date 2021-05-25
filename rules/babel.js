const { rules: rulesTypeErrors } = require('./type-errors');
const { rules: rulesSyntaxErrors } = require('./syntax-errors');
const { rules: rulesRecommendations } = require('./recommendations');

module.exports = {
  rules: {
    'new-cap': ['off'],
    '@babel/new-cap': rulesTypeErrors['new-cap'],

    'no-invalid-this': ['off'],
    '@babel/no-invalid-this': rulesSyntaxErrors['no-invalid-this'],

    'no-unused-expressions': ['off'],
    '@babel/no-unused-expressions': rulesRecommendations['no-unused-expressions'],
  },
};
