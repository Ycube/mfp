var webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
    {
      test: /\.js?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      options: {
        presets: [
          ['es2015'],
          ['react'],
          ['stage-2']
        ]
      }
    },
    {
        test: /\.scss$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader",
           options: {
                  sourceMap: true
              } // translates CSS into CommonJS
        }, {
            loader: "sass-loader",
            options: {
                sourceMap: true
            } // compiles Sass to CSS
        }]
    }]
  },
  resolve: {
    extensions: ['*','.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
