module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    '@typescript-eslint'
  ],
  'rules': {
    'semi': 'off',
    'prettier/prettier': 'off',
    'object-curly-spacing': ['error', 'always'],
    'quotes': [2, 'single', { 'avoidEscape': true }],
    '@typescript-eslint/semi': ['error'],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': ['error', { 'accessibility': 'no-public' }],
    '@typescript-eslint/prefer-interface': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-return-assign': 'off',
    '@typescript-eslint/no-sequences': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', {
      'vars': 'all',
      'args': 'none',
      'ignoreRestSiblings': false,
    }],
    '@typescript-eslint/indent': ['error', 2, {
      'FunctionDeclaration': {
        'parameters': 'first',
      },
      'FunctionExpression': {
        'parameters': 'first',
      },
      'SwitchCase': 1,
    }],
    'react-native/no-inline-styles': 'off',
    'no-extend-native': 'off',
    'require-atomic-updates': 'off',
    'react/prop-types': 'off',
    'no-sequences': 'off',
    'no-return-assign': 'off',
    'eqeqeq': 'off',
    'jest/no-disabled-tests': 'off'
  },
};
