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
    'js',
    'jsx',
    'json',
    'ts',
    'tsx',
  ],
  snapshotSerializers: ['jest-emotion']
};
