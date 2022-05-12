const path = require("path");
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "/src/index.js",

  output: { path: path.resolve(__dirname, "dist") },

  mode: 'development',

  // plugins: [
  //   new HtmlWebpackPlugin({
  //    title: 'Development',
  //    template: 'src/index.html',
  //    inject: "body"
  //   }),
  // ],

  devServer: { 
    static: {
      directory: path.resolve(__dirname, 'dist'),
      publicPath: '/dist',
    },
  },

  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx']
  }

};