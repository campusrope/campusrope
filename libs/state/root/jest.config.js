module.exports = {
  name: 'state-root',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/state/root',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
