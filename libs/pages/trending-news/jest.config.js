module.exports = {
  name: 'pages-trending-news',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/pages/trending-news',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
