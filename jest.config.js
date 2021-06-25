module.exports = {
  verbose: true,
  preset: 'ts-jest',
  testMatch: ['<rootDir>/**/__tests__/*.spec.{tsx,ts}'],
  setupFilesAfterEnv: ['<rootDir>/tests/jest-setup.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': ['babel-jest', { configFile: './tests/.babelrc.js' }],
  },
  globals: {
    'ts-jest': {
      tsconfig: 'tests/tsconfig.test.json',
    },
  },
}
