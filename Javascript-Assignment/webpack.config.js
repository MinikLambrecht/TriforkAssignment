const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    app: `${__dirname}/App.mjs`
  },
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].min.js'
  }
};