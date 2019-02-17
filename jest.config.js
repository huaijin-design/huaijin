module.exports = {
  rootDir: 'src',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  coverageDirectory: './coverage/',
  collectCoverage: true,
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/src/index.ts',
  ],
  collectCoverageFrom: [
    'src/tests/**/*.{ts,tsx}',
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
  transformIgnorePatterns: [
    '/dist/',
    '/es/',
    '/lib/',
    '/node_modules/',
  ],
};
