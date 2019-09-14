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
const colors = require('colors');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const env = require(`./config/${argv.env}.env`);

let definePlugin = new webpack.DefinePlugin(Object.assign(env, {
    ENV: JSON.stringify(argv.env),             // production/development
    TERMINAL: JSON.stringify(argv.terminal),    // h5(浏览器环境)/wechat（微信小程序）
}));

let mode = argv.env == 'prod'? 'production': 'development';

colors.setTheme({
    silly: 'rainbow', // 说明型的日志为彩虹色
    input: 'grey',    // 输入型的日志为灰色
    info: 'green',    // 普通info级别的日志为绿色
    data: 'grey',     // json格式的数据日志为灰色
    help: 'cyan',     // 帮助型的日志为青色
    warn: 'yellow',   // 警告型的日志为黄色
    debug: 'blue',    // debug型的日志为蓝色
    error: 'red',     // 错误型的日志为红色
});

module.exports = {
    mode,
    entry: './src/mini-app/index.js',
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'mapp-miner.js',
        library: 'userMiner',
        libraryTarget: 'umd'
    },
    plugins: [
        new CleanWebpackPlugin(),
        definePlugin
    ],
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude: __dirname + 'node_modules',
                // include:__dirname + 'src',       //  目前可有可无
                use:{
                    loader:'babel-loader',
                    options:{
                    }
                }
            }
        ]
    }
};
