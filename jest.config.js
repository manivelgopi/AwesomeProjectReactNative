const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
  ...tsjPreset,
  preset: 'react-native',
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/tests/jest-setup.ts'],
  setupFiles: ['<rootDir>/tests/_mocks_/setupTests.ts'],
  transform: {
    '^.+\\.jsx$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        useESM: true,
        tsconfig: 'tsconfig.spec.json',
        babelConfig: 'babel.config.js',
      },
    ],
  },
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@react-navigation/native-stack|@firebase|firebase/.*|@react-native|react-native|react-redux)',
  ],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/e2e/'],
  // moduleNameMapper: {
  //   '^lodash-es$': 'lodash',
  // '\\.svg': '<rootDir>/tests/_mocks_/svgMock.js',
  // },
  cacheDirectory: '.jest/cache',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverageFrom: [
    'src/**/**/*.{js,jsx,ts,tsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/e2e/**',
    '!**/src/**/**/*.simulator.{js,jsx,ts,tsx}',
  ],
};
