/* eslint-env node */
module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    semi: 'error',
    'semi-spacing': ['error', { 'before': false, 'after': true }],
    quotes: ['error', 'single'],
    'space-infix-ops': 'error',
    'space-in-parens': ['error', 'never'],
    'semi-style': ['error', 'last'],
    'padded-blocks': ['error', 'never'],
    'object-property-newline': ['error', { 'allowAllPropertiesOnSameLine': true }],
    'object-curly-spacing': ['error', 'always'],
    'no-trailing-spaces': 'error',
    'no-whitespace-before-property': 'error',
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'newline-per-chained-call': ['error', { 'ignoreChainWithDepth': 1 }],
    'array-bracket-spacing': ['error', 'never', { 'singleValue': false }],
    'array-element-newline': ['error', 'consistent']
  }
};
