/** @type {import('jest').Config} */
const config = {
  transform: {
    '^.+\\.tsx?$': ['@swc/jest'],
  },
  testEnvironment: 'jsdom',
  collectCoverage: true,
  coverageProvider: 'v8',
  coverageReporters: ['text'],
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
};

export default config;
