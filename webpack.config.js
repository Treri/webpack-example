var path = require('path')

  , webpack = require('webpack')

  , ReplaceTaskWebpackPlugin = require('replace-task-webpack-plugin')

module.exports = {
  resolve: {
    root: [
      path.resolve(__dirname)
    ]
  },
  entry: {
    boot: 'boot.js'
  },
  output: {
    path: 'dist',
    publicPath: 'http://localhost:8080/dist/',
    filename: '[name].js',
    pathinfo: true
  },
  // plugins: [
  //   new ReplaceTaskWebpackPlugin({
  //     patterns: [{
  //       match: 'foo',
  //       replacement: 'foo+bar'
  //     }]
  //   }),
  //   new webpack.optimize.UglifyJsPlugin({
  //     compress: {
  //       warnings: false
  //     }
  //   })
  // ],
  module: {
    loaders: [
      // {
      //   test: /\.jsx?$/,
      //   exclude: /(node_modules|bower_components)/,
      //   loader: 'babel?presets[]=es2015'
      // },
      {
        test: /services\/.*/,
        exclude: /runtimes\/[^\/]*\/.*/,
        loader: 'then?global,[name]'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.css$/,
        loader: 'autoprefixer',
        query: {
          browsers: ['> 1%']
        }
      }
    ]
  }
}
