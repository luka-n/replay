import webpack from "webpack";

export default {
  entry: [
    "babel-polyfill",
    "webpack-hot-middleware/client",
    __dirname + "/../client/main.js"
  ],
  devtool: "#inline-source-map",
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
  output: {
    filename: "bundle.js",
    path: "/"
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
