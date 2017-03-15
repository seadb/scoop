const WebpackShellPlugin = require('webpack-shell-plugin');

module.exports = {
  devtool: 'cheap-eval-source-map',
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: './www/js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/, 
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react']
      }
    }]
  },
  devServer: {
    historyApiFallback: true,
  }
}
