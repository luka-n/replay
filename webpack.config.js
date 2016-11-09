var webpack = require("webpack");

module.exports = {
  entry: [
    "babel-polyfill",
    "webpack/hot/only-dev-server",
    "./src/index.js"
  ],
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "react-hot-loader!babel-loader"
      }
    ]
  },
  devServer: {
    contentBase: __dirname + "/public",
    port: 7070,
    inline: true,
    historyApiFallback: true,
    hot: true,
    proxy: {
      "/api": {
        target: "http://localhost:9090"
      }
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: "source-map"
};
