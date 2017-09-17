var webpack = require('webpack');
require('dotenv').config();

var defineEnv = new webpack.DefinePlugin({
  'process.env': {
    'TEST': JSON.stringify(process.env.TEST)
  }
});

module.exports = {
  context: __dirname + '/app',

  entry: {
    js: "./sample.js"
  },

  output: {
    path: __dirname + '/dist',
    filename: "./bundle.js"
  },

  plugins: [defineEnv]
};