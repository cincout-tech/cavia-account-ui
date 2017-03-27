/**
 * Created by zhaoyu on 16-11-22.
 */
var webpack = require("webpack");
var path = require("path");
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

const nodeModulesPath = path.resolve(__dirname, 'node_modules');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist');

var config = {
    entry: APP_PATH + "/index.js",
    // Render source-map file for final build
    devtool: 'eval',
    output: {
        path: BUILD_PATH,
        filename: "bundle.js",
        publicPath: BUILD_PATH
    },
    module: {
        loaders: [{
            test: /src(\\|\/).+\.js?$/,
            exclude: [nodeModulesPath],
            loader: 'babel-loader'
            /*query: {
                "presets": ["es2015", "react", "stage-2"]
            }*/
        }, {
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader', 'sass-loader']
        }, {
            test: /\.scss$/,
            loader: "style-loader!css-loader!less-loader"
        }, {
            test: /\.less$/,
            loader: "style-loader!css-loader!less-loader"
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url?limit=40000'
        }, {
            test: /\.eot(\?v=\d+.\d+.\d+)?$/,
            loader: 'file'
        },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=image/svg+xml'
            }]
    },
    devServer: {
        historyApiFallback: true,
        //hot: true,
        //inline: true,
        //progress: true,
        //contentBase: BUILD_PATH,
        proxy:{
            '/api/*' : {
                target: 'http://localhost:8099/',
                changeOrigin: true
                /*ignorePath: true*/
                /*pathRewrite: {
                 '^/api': ''
                 }*/
            }
        }
    },
    plugins: [
        // Define production build to allow React to strip out unnecessary checks
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        //这个使用uglifyJs压缩你的js代码
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                // suppresses warnings, usually from module minification
                warnings: false,
            }
        }),
        // Allows error warnings but does not new OpenBrowserPlugin({}),
        new OpenBrowserPlugin({url : 'http://localhost:8080'}),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
            __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
        }),
        new webpack.NoEmitOnErrorsPlugin(),

        // Transfer Files
        /* new TransferWebpackPlugin([
         {from: 'www'},
         ], path.resolve(__dirname, 'src')),*/
        // Enables Hot Modules Replacement
        //new webpack.HotModuleReplacementPlugin()
    ]
};

module.exports = config;