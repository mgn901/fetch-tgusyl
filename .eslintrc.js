module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base', 'airbnb-typescript/base'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: 'tsconfig.json',
  },
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/*.test.ts', './scripts/**/*'] }],
  },
};
