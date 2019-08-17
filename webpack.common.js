/**
 *  Project:    miner
 *  File:       webpack.common.js
 *  User:       william <wxl1342247033@gmail.com>
 *  Date:       2019/8/16
 *  Time:       11:39 PM
 *  Description:
 *
 *  Change Date       Author     Content
 *  yyyymmdd          name       comment
 *
 */

'use strict';
const path = require('path');
const { argv } = require('yargs');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const env = require(`./config/${argv.env}.env`);

let definePlugin = new webpack.DefinePlugin(Object.assign(env, {
    ENV: JSON.stringify(argv.env),             // production/development
    TERMINAL: JSON.stringify(argv.terminal),    // h5(浏览器环境)/wechat（微信小程序）
}));

let mode = argv.env == 'prod'? 'production': 'development';

module.exports = {
    mode,
    entry: './src/mini-app/index.js',
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'mapp-miner.js',
        library: 'userMiner',
        libraryTarget: 'commonjs2'
    },
    plugins: [
        new CleanWebpackPlugin(),
        definePlugin
    ],
};
