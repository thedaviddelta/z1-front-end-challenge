const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = createJestConfig({
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '\\.(gql|graphql)$': '@graphql-tools/jest-transform',
  },
  moduleNameMapper: {
    '$/(.*)$': '<rootDir>/$1',
  },
  testPathIgnorePatterns: ['<rootDir>/cypress/'],
  setupFilesAfterEnv: ['<rootDir>/tests/setupTests.ts'],
});

// https://github.com/vercel/next.js/issues/35634
module.exports = async () => {
  const nextJestConfig = await createJestConfig(customJestConfig)();
  return {
    ...nextJestConfig,
    moduleNameMapper: {
      '\\.svg$': '<rootDir>/tests/mocks/svg.ts',
      ...nextJestConfig.moduleNameMapper,
    },
  };
};
