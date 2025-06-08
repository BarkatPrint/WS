const webpack = require("webpack");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = function override(config) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    fs: false,
    net: false,
    tls: false,
    child_process: false,
    os: require.resolve("os-browserify/browser"),
    path: require.resolve("path-browserify"),
    stream: require.resolve("stream-browserify"),
    buffer: require.resolve("buffer"),
    crypto: require.resolve("crypto-browserify"),
    zlib: require.resolve("browserify-zlib"),
    process: require.resolve("process/browser"),
    util: require.resolve("util"),
  };

  config.plugins = [
    ...config.plugins,
    new NodePolyfillPlugin(),
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    }),
  ];

  config.module.rules.push({
    test: /\.m?js$/,
    resolve: {
      fullySpecified: false,
    },
  });

  return config;
};
