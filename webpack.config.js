var webpack = require("webpack");

module.exports = {
  entry: [
    "babel-polyfill",
    "webpack/hot/only-dev-server",
    "./src/index.js"
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "react-hot-loader!babel-loader"
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
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
