module.exports = {
  moduleFileExtensions: [
    'js',
    'json',
    'jsx',
  ],
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest',
  },
  testPathIgnorePatterns: [
    '__tests__/helpers'
  ],
  testEnvironment: 'jsdom'
};
