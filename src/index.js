/**
 *  Project:    miner
 *  File:       index.js
 *  User:       william <wxl1342247033@gmail.com>
 *  Date:       2018/10/12
 *  Time:       12:30 AM
 *  Description:
 *
 *  Change Date       Author     Content
 *  yyyymmdd          name       comment
 *
 */

'use strict';
import browserCollector from './collector/browser';
import Miner from './core/miner'

console.log(ENV);
let num = 19;
console.log(num.toString(16));

let collector = null;
if (TERMINAL == 'h5') {
    collector = new browserCollector();
}

let miner = new Miner(collector);
miner.init();

