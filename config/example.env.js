/**
 *  Project:    miner
 *  File:       example.env.js
 *  User:       william <wxl1342247033@gmail.com>
 *  Date:       2018/12/30
 *  Time:       3:34 PM
 *  Description:
 *
 *  Change Date       Author     Content
 *  yyyymmdd          name       comment
 *
 */

'use strict';
let pack = require("../package.json");

module.exports = {
    LOG_SERVER: JSON.stringify('http://localhost:8000'),
    LOG_KEY:  JSON.stringify('/1.jpg'),
    MINER_VERSION: JSON.stringify(pack.version),
};
