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
import Miner from './core/miner'
import browserCollector from './collector/browser';
import MetaConfig from './config/metaconfig';
import { container } from './core/container';
import { TERMINALS } from "./core/constants";

let collector = null;
let configer = null;
if (TERMINAL == TERMINALS.H5) {
    collector = new browserCollector();
    configer = new MetaConfig();
}


let miner = new Miner(configer, collector);
container.register('miner', miner);
miner.init();

