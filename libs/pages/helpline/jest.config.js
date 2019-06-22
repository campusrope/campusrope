module.exports = {
  name: 'pages-helpline',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/pages/helpline',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
