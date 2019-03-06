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
    'src/components/**/*.{ts,tsx}',
    'src/components/*/__tests__/**/type.tsx',
    'src/components/**/*/interface.{ts,tsx}',
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
  ],
  transformIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/es/',
    '<rootDir>/lib/',
  ],
  snapshotSerializers: ['jest-emotion']
};
