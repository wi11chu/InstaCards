const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "/src/index",
  output: { path: path.resolve(__dirname, "dist") },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
     template: path.join(__dirname, 'src', 'index.html'),
    }),
  ],
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
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
        exclude: /node_modules/,
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx']
  }

};