const globals = require('jest-preset-angular/jest-preset').globals;

module.exports = {
  preset: 'jest-preset-angular',
  globals,
  reporters: ['default', 'jest-junit'],
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png)$': '<rootDir>/__mocks__/image.js',
    '^@core/(.*)$': '<rootDir>/projects/core/src/lib/$1',
    '^@common/(.*)$': '<rootDir>/projects/common/src/lib/$1',
    '^@app/(.*)$': '<rootDir>/src/$1'
  },
  setupFilesAfterEnv: ['<rootDir>/.config/testing/setup-jest.ts'],
  transform: {
    '^.+\\.(ts|html)$': 'ts-jest',
    '^.+\\.js$': 'babel-jest'
  }
};
