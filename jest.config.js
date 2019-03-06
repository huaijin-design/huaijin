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
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
  ],
  snapshotSerializers: ['jest-emotion']
};
