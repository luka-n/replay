module.exports = {
  entry: ["babel-polyfill", "./index.js"],
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  resolve: {
    // Setting this overrides the default, so ...
    // Default is: ["", ".webpack.js", ".web.js", ".js"]
    extensions: ["", ".webpack.js", ".web.js", ".js", ".jsx"]
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.scss$/,
        loader: "style-loader!css-loader!sass-loader"
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
    inline: true,
    proxy: {
      "/api": {
        target: "http://localhost:9090"
      }
    }
  }
};
