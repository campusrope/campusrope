module.exports = {
  name: 'features-auth',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/features/auth',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
