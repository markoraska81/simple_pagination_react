const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',   // putanja do glavnog JS fajla, koja je u fajlu SRC
  output: {
    path: path.resolve(__dirname, 'dist'), // putanja gde prebacujemo JS fajl
    filename: 'JS/bundle.js'              // putanja gde cemo napraviti JS fajla
  },
  plugins: [
    new HtmlWebpackPlugin ({
      filename:'index.html',                // ime HTML fajla koji ce se napraviti
      template:'./src/index.html'           // putanja fajla koji uzimamo
    })
  ],
  devServer: {
    contentBase: './dist'
  },
  module: {
   rules: [
     {
       test: /\.s[ac]ss$/i,
       use: [
         // Creates `style` nodes from JS strings
         'style-loader',
         // Translates CSS into CommonJS
         'css-loader',
         // Compiles Sass to CSS
         'sass-loader',
       ],
     },
     {
       test: /\.js$/,
       exclude: /node_modules/,
       use: {
         loader: 'babel-loader'
       }
     },
     {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
   ],
 },
};
