module.exports = {
  context: __dirname + '/app',
  entry: './app.js',
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: [
          { loader: 'file-loader', options: { name: '[name].html' } },
          { loader: 'extract-loader' },
          { loader: 'html-loader' },
          { loader: 'pug-html-loader' },
        ]
      },
      {
        test: /\.sass$/,
        use: [
          { loader: 'file-loader', options: { name: '[name].css' } },
          { loader: 'extract-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ]
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: __dirname + '/node_modules',
      }
    ]
  },
  output: {
    filename: 'app.js',
    path: __dirname + '/dist'
  }
}
