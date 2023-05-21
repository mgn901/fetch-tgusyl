module.exports = {
  ignorePatterns: ['/development', '/node_modules', '/production'],
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb', 'airbnb-typescript'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: 'tsconfig.json',
  },
  rules: {
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: ['**/*.test.ts', './scripts/**/*'],
    }],
    'react/function-component-definition': [2, {
      namedComponents: 'arrow-function',
    }],
    'jsx-quotes': ['error', 'prefer-single'],
  },
};
