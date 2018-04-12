
module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'google',
  ],
  globals: {},
  rules: {
    'arrow-body-style': ['error', 'always'],
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': 'error',
    'eqeqeq': ['error', 'always'],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'no-extra-semi': 'error',
    'no-mixed-spaces-and-tabs': ['error'],
    'no-unused-vars': [2, {'args': 'after-used'}], // Change google
    'semi': 'error',
    'space-in-parens': ['error','never'],
    'space-infix-ops': 'error'
  }
};
