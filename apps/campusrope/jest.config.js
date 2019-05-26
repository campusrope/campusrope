module.exports = {
  name: "campusrope",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/apps/campusrope/",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
