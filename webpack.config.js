const path = require("path");

module.exports = {
  mode: "production",
  watch: false,
  entry: path.join(__dirname, "webpack", "js", "main"),
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "assets/js"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [
          path.resolve(__dirname, "node_modules"),
          path.resolve(__dirname, "bower_components"),
        ],
        include: [
          path.resolve(__dirname, 'node_modules', '@dogstudio', 'highway')
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: [".json", ".js", ".jsx"],
  },
}