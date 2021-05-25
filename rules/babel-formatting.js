const { rules: rulesFormatting } = require('./formatting');

module.exports = {
  rules: {
    'object-curly-spacing': ['off'],
    '@babel/object-curly-spacing': rulesFormatting['object-curly-spacing'],

    semi: ['off'],
    '@babel/semi': rulesFormatting.semi,
  },
};
