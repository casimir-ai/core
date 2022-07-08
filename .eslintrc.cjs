module.exports = {
  root: true,
  extends: [
    '@deip/eslint-config',
    '@deip/eslint-config/vue'
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json'
      },
      plugins: ['@typescript-eslint'],
      extends: [
        '@deip/eslint-config',
        '@deip/eslint-config/vue',
        'plugin:@typescript-eslint/recommended',
        'airbnb-typescript/base'
      ],
      rules: {
        '@typescript-eslint/comma-dangle': [
          'error',
          'never'
        ]
      }
    }
  ]
};
