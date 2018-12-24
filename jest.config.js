const path = require('path')

module.exports = {
  "verbose": true,
  "testURL": "http://localhost/",
  rootDir: path.resolve(__dirname, './'),
  moduleFileExtensions: [
    'js',
    'json',
    'vue'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  testEnvironment: 'jsdom',  //'node'
  testMatch: [
    "<rootDir>/packages/**/__tests__/**/*.(j|t)s?(x)",
    "<rootDir>/packages/**/?(*.)(spec|test).(j|t)s?(x)"
  ],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
  },
  // snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  // setupFiles: ['<rootDir>/test/unit/setup'],
  // mapCoverage: true,
  // coverageDirectory: '<rootDir>/test/unit/coverage',
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/main.js',
    '!src/router/index.js',
    '!**/node_modules/**'
  ]
}
