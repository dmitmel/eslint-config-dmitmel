module.exports = {
  extends: [
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    './typescript-addon',
    '../rules/typescript/with-type-checking',
  ],
};
