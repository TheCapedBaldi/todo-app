const path = require("path"),
  webpack = require("webpack"),
  webpackMerge = require("webpack-merge"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  ResourcesManifestPlugin = require("resources-manifest-webpack-plugin");

/**
 * Will correctly call the file based on the mode (i.e. prod/dev)
 * @param {*} env - is the envrironment variable from the command
 */
function modeConfig(env) {
  return require(`${path.resolve(__dirname)}/webpack.${env}`)(env);
}

module.exports = ({ mode } = { mode: "production" }) =>
  webpackMerge(
    {
      mode,
      entry: "./src/index.js",
      optimization: {
        splitChunks: {
          chunks: "all",
        },
      },
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            use: {
              loader: "babel-loader",
            },
            exclude: /node_modules/,
          },
          {
            test: /\.(png|jpe?g|gif|svg|webp)$/,
            use: [
              {
                loader: "file-loader",
                options: {
                  name: "static/media/[name].[contenthash].[ext]",
                },
              },
            ],
          },
        ],
      },
      resolve: {
        extensions: ["*", ".js", ".jsx"],
        alias: {
          src: path.resolve(__dirname, "./src"),
        },
      },
      devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, "public"),
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: "public/index.html",
          inject: "body",
          minify: {
            html5: true,
            removeComments: true,
            collapseWhitespace: true,
          },
          templateParameters: {
            PUBLIC_URL: "",
          },
        }),
        new ResourcesManifestPlugin(
          {
            TO_CACHE: /.+\.(js|css|png|jpe?g|gif|svg|webp)$/,
          },
          "public/service-worker.js"
        ),
        new webpack.ProgressPlugin(),
      ],
    },
    modeConfig(mode)
  );
