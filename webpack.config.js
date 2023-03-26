const path = require('path');

module.exports = {
  resolve: {
    fallback: {
      fs: false, // no polyfill for fs module
      path: false // use path-browserify for path module
    }
  },
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  
};

