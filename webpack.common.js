const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.ts[x]?$/,
        exclude: path.resolve(__dirname, "node_modules"),
        loader: "ts-loader"
      },
      {
        test: /\.s?css$/,
        include: [path.join(__dirname, "src")],
        use: [
          {
            loader: "style-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[path]_[local]_[hash:base64:5]"
            }
          },
          {
            loader: "sass-loader",
            options: { sourceMap: true }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name(file) {
                if (process.env.NODE_ENV) {
                  return "/talks-lp/[path][name].[ext]";
                } else {
                  return "/[path][name].[ext]";
                }
              }
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".scss"]
  },
  optimization: {
    splitChunks: {
      name: "vendor",
      chunks: "initial"
    }
  }
};
