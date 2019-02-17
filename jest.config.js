module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  coverageDirectory: './coverage/',
  collectCoverage: true,
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/src/index.ts',
  ],
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
  ],
  collectCoverageFrom: [
    'src/tests/**/*.{ts,tsx}',
  ],
  transformIgnorePatterns: [
    '/dist/',
    '/es/',
    '/lib/',
    'node_modules',
  ],
};
