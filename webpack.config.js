module.exports = {
  entry: "./demo/index.js",
  debug: true,
  output: {
    path: "./demo/build",
    filename: "app.js"
  },
  module: {
      loaders: [
          {
            test: /\.js$/,
            loader: "jsx-loader"
          },
          {
            test: /\.svg$/,
            loader: "raw-loader"
          }
      ]
  }
};