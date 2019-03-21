const path = require("path");

module.exports = ({ config, mode }) => {
  config.module.rules.push(
    {
      test: /\.ts[x]?$/,
      exclude: path.resolve(__dirname, "node_modules"),
      loader: "ts-loader"
    },
    {
      test: /\.s?css$/,
      use: [
        {
          loader: "style-loader"
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
          loader: "sass-loader"
        }
      ]
    }
  );

  config.resolve.extensions.push(".ts", ".tsx");

  return config;
};
