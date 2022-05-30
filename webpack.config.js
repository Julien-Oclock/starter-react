var path = require('path');

module.exports = {
    mode: 'development',
    entry: './src',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename:'main.bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      port: 9000,
    },
}
