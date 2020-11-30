const path = require('path')
var HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
  entry: './src/App.js',
  module: {
  	  rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-object-rest-spread']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
       },
     ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
    open: 'Google Chrome'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins : [
    new HtmlWebpackPlugin ({
        template : 'src/index.html'
    })
  ],
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};