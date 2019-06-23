module.exports = {
  name: 'pages-admin',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/pages/admin',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
