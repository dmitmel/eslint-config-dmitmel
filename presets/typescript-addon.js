module.exports = {
  extends: [
    // configures the TS parser and plugin
    'plugin:@typescript-eslint/base',
    // you know... this config enables a set of rules only for `*.(ts|tsx)`
    // files, which I kind of dislike, since this addon is already meant to be
    // enabled as an override for TS files... well, I can't realistically go
    // over every error in https://github.com/microsoft/TypeScript/blob/v3.8.3/src/compiler/diagnosticMessages.json
    // , then find and disable appropriate ESLint rules, so I guess I'll just go
    // along with including this config from the TS plugin. btw, `ts(xxxx)`
    // comments there refer to the compiler errors from the aforementioned file.
    'plugin:@typescript-eslint/strict',
    'plugin:@typescript-eslint/stylistic',

    '../rules/typescript/syntax-errors',
    '../rules/typescript/type-errors',
    '../rules/typescript/code-style',
    '../rules/typescript/recommendations',
  ],
};
