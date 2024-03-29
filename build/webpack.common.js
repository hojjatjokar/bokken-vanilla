const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  module: {     
    rules: [
      {         
        test: /\.m?js$/,         
        exclude: /node_modules/,         
        use: {           
          loader: "babel-loader",
            options: {             
            presets: ['@babel/preset-env']          
          }
        }       
      }     
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};