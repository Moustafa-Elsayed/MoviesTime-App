module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'react-native', 'jsx-a11y', 'import', 'react-hooks'],
  rules: {
    // Add your specific ESLint rules here
    // Example:
    // 'semi': ['error', 'always'],
    // 'quotes': ['error', 'single'],
    // ...
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
};
