import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack, { WebpackPluginInstance } from "webpack";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import CopyPlugin from "copy-webpack-plugin";
import { BuildOptions } from "./types/config";

const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

export function buildPlugins({
  isDev,
  paths,
  apiUrl,
  project,
}: BuildOptions): WebpackPluginInstance[] {
  const plugins = [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),

    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __API__: JSON.stringify(apiUrl),
      __PROJECT__: JSON.stringify(project),
    }),

    new CopyPlugin({
      patterns: [
        {
          from: paths.locales,
          to: paths.buildLocales,
        },
      ],
    }),
  ];
  plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false }));

  if (isDev) {
    plugins.push(new webpack.HotModuleReplacementPlugin());

    plugins.push(new ReactRefreshWebpackPlugin());
  }

  return plugins;
}
