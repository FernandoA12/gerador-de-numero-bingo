module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
    jest: true
  },
  extends: ['standard', 'prettier/standard', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 8,
    sourceType: 'module'
  },
  plugins: ['prettier'],
  rules: {
    'space-before-function-paren': 'off',
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off'
  }
}
