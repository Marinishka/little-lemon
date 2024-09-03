const CopyPlugin = require("copy-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const path = require("path")

module.exports = {
    mode: "development",
    resolve: {
        extensions: [".js", ".jsx", ".tsx", ".ts"],
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
    entry: "./src/index.tsx",
    devtool: "source-map",
    devServer: {
        hot: true,
        static: { directory: path.resolve(__dirname, "dist"), publicPath: "/" },
        historyApiFallback: true,
        client: {
            overlay: {
              warnings: true,
              errors: true,
            },
          },
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: ["@svgr/webpack"],
            },
            {
                test: /\.(woff2?|eot|ttf|otf|png|jpg)$/i,
                type: "asset/resource",
            },
            {
                test: /\.scss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            additionalData:
                                '@import "./src/assets/styles/_variables.scss";',
                        },
                    },
                ],
            },
            {
                test: /\.(?:js|jsx|mjs|cjs|tsx|ts)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            ["@babel/preset-react", { targets: "defaults" }],
                        ],
                        plugins: ["@babel/plugin-proposal-class-properties"],
                        cacheDirectory: true,
                        sourceMaps: true,
                    },
                },
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: "./public/index.html",
                    to: "./index.html",
                },
            ],
        }),
    ],
}
