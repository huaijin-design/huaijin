module.exports = {
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
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  collectCoverageFrom: [
    'src/components/**/*.{ts,tsx}',
    '!src/components/*/style/index.tsx',
    '!src/components/style/index.tsx',
    '!src/components/*/locale/index.tsx',
    '!src/components/*/__tests__/**/type.tsx',
    '!src/components/**/*/interface.{ts,tsx}',
  ],
  transformIgnorePatterns: [
    '/dist/',
    '/es/',
    '/lib/',
    'node_modules/',
  ],
};
