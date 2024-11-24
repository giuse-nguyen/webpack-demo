const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  // entry: {
  //   main: [
  //     './src/a.js',
  //     './src/b.js',
  //   ],
  // },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
}
