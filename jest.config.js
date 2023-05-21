/** @type {import('jest').Config} */
const config = {
  transform: {
    '^.+\\.tsx?$': 'esbuild-jest',
  },
  testEnvironment: 'jsdom',
  collectCoverage: true,
  coverageProvider: 'v8',
  coverageReporters: ['text'],
};

module.exports = config;
