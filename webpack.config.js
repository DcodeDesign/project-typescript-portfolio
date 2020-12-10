const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

let bundle = {
    mode: 'production',
    entry: ['./build/main.ts'],
    target: 'node',
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            },
            {
                test: /\.scss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                            sassOptions: {
                                outputStyle: "compressed",
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: "file-loader"
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    minimize: true,
                },
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            "@library": path.resolve(__dirname, './library'),
        }
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "build/assets/json/*", to: "", flatten: true, },
                { from: "build/assets/images/*", to: "", flatten: true, },
            ],
        }),
    ],
    output: {
        filename: 'bundle.min.js',
        path: path.resolve(__dirname, './dist/'),
    }
};

module.exports = [bundle];
