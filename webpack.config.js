var path = require('path');
var webpack = require('webpack');
var nodeModulesPath = path.join(__dirname, 'node_modules');
var bowerComponentsPath = path.join(__dirname, 'bower_components');

module.exports = {
  entry: './src/main.js',
  output: {
    path: __dirname + "/dist",
    filename: 'main.js',
    library: 'Trans__',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {test: /jquery\.js$/, loader: "exports?jQuery!script"},
      {test: /\.js$/, exclude: /node_modules|bower_components/, loader: 'babel-loader'},
      {test: /\.handlebars$/, loader: 'handlebars-loader'},
      {test: /\.less$/, loader: "style!css!less"},
      {test: /\.scss/, loader: "style!css!sass"},
      {test: /\.css$/, loader: "style!css"},
      {test: /\.(eot|woff|woff2|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9][0-9])?$/, loader: "file-loader"},
      {test: /\.(otf|eot|png|gif|svg|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader"}
    ],
    noParse: []
  },
  resolve: {
    root: [
      nodeModulesPath,
      bowerComponentsPath],
    alias: {
      "jquery$": "jquery/dist/jquery.js"
    },
    extensions: ['',
      '.js',
      '.css']
  },
  bail: true,
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.ProvidePlugin({
      $: "jquery"
    })
  ]
};