const path = require("path");

module.exports = {
  mode: "production",
  watch: false,
  entry: path.join(__dirname, "webpack", "js", "main.js"),
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "assets/js"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [
          path.resolve(__dirname, "node_modules", "core-js"),
          path.resolve(__dirname, "node_modules", "core-js-compat"),
          path.resolve(__dirname, "node_modules", "regenerator-runtime"),
          path.resolve(__dirname, "node_modules", "whatwh-fetch")
        ],
        // include: [
        //   path.resolve(__dirname, 'node_modules', '@dogstudio', 'highway', 'src')
        // ],
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