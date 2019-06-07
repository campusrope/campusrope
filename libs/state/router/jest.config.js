module.exports = {
  name: 'state-router',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/state/router',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
