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
const merge = require('webpack-merge');
const common = require('./webpack.common');


module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
});
