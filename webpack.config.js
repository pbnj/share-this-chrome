const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [],
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css'],
  },
};
