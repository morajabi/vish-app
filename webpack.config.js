const path = require('path');

module.exports = {
  context: __dirname,

  entry: './src/index.js',

  module: {
    rules: [
      {
        test: /.js$/,
        use: 'babel-loader',
      }
    ]
  },

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/'
  },

  devtool: 'inline-source-map',

  devServer: {
    contentBase: './dist',
    port: 4000
  },
};
