module.exports = {
  parserOptions: {
    sourceType: 'module'
  },
  parser: '@babel/eslint-parser',

  env: {
    node: true
  },
  extends: [
    'react-app',
    'plugin:jsx-a11y/recommended',
    'plugin:security/recommended',
    'standard',
    'prettier'
  ],
  plugins: ['prettier', 'security'],
  rules: {
    'promise/catch-or-return': 'error',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
        endOfLine: 'auto'
      }
    ]
  }
};
