module.exports = {
  plugins: ['@typescript-eslint', 'eslint-comments', 'jest'],
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:jest/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  rules: {
    'import/prefer-default-export': 'off',
    'no-trailing-spaces': 'error',
    'space-infix-ops': 'error',
    'object-curly-spacing': 'error',
    '@typescript-eslint/type-annotation-spacing': 'error',
    'comma-spacing': 'error',
  },
};
