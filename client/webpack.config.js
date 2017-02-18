module.exports = {
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
