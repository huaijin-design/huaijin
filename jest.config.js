module.exports = {
  rootDir: 'src',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest'
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
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/es/',
    '<rootDir>/lib/',
    '<rootDir>/src/components',
  ],
  transformIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/es/',
    '<rootDir>/lib/',
  ],
  snapshotSerializers: ['jest-emotion']
};
