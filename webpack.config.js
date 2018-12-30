#!/usr/bin/env node

/**
 *  Project:    mine
 *  File:       webpack.config
 *  User:       william <wxl1342247033@gmail.com>
 *  Date:       2018/9/16
 *  Time:       11:27 PM
 *  Description:
 *
 *  Change Date       Author     Content
 *  yyyymmdd          name       comment
 */

'use strict';

const { argv } = require('yargs');
const colors = require('colors');
const webpack = require('webpack');
const path = require('path');
const env = require(`./config/${argv.env}.env`);

console.log('Environment: ' + argv.env);
console.log(env);


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

let definePlugin = new webpack.DefinePlugin(Object.assign(env, {
    ENV: JSON.stringify(argv.env),             // production/development
    TERMINAL: JSON.stringify(argv.terminal),    // h5(浏览器环境)/wechat（微信小程序）
}));


const defaultConfig = {};

let config = {
    mode: argv.env == 'prod'? 'production': 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: ['main', argv.terminal, argv.env, 'js'].join('.'),
    },
    plugins: [
        definePlugin
    ]

};

module.exports = config;
