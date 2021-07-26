const path = require('path');

module.exports = {
  entry: './App.js',
  output: {
    filename: 'SimpleCalculator.js',
    path: path.resolve(__dirname, 'build'),
  },
};