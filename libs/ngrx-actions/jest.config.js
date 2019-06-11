module.exports = {
  name: 'ngrx-actions',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ngrx-actions',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
