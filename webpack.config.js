const webpack = require("webpack");
const path = require("path");

module.exports = {
    mode: "production",
    devtool: "source-map",
    entry: "./src/ts/main.ts",
    output: {
        filename: "mashiro.js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.scss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
        }),
    ],
};
