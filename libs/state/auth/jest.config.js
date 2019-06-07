module.exports = {
  name: 'state-auth',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/state/auth',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
