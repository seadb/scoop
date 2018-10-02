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
  },
  plugins: [
    new webpack.DefinePlugin({
      'env': {
        'API_URL': JSON.stringify(process.env.API_URL),
        'CLIENT_ROOT_URL': JSON.stringify(process.env.CLIENT_ROOT_URL)
      }
    }),
  ]
}
}
