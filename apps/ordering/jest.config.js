module.exports = {
  name: 'ordering',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ordering',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
