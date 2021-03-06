/* eslint no-inline-comments: "off" */
const path = require('path');

const rootDir = path.join(__dirname, '../../');

module.exports = {
  name: 'react-course',
  rootDir: `${rootDir}`,
  testEnvironment: 'jest-environment-jsdom-global',

  transform: {
    '^.+\\.js$': 'babel-jest',
  },

  transformIgnorePatterns: ['/node_modules/'],

  modulePathIgnorePatterns: ['/node_modules/'],

  moduleFileExtensions: ['js', 'json'],

  snapshotSerializers: ['enzyme-to-json/serializer'],

  setupFilesAfterEnv: ['<rootDir>/config/jest/setup.js'],

  timers: 'fake',
};
