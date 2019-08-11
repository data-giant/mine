/**
 *  Project:    miner
 *  File:       index
 *  User:       william <wxl1342247033@gmail.com>
 *  Date:       2019/8/10
 *  Time:       11:24 PM
 *  Description:
 *
 *  Change Date       Author     Content
 *  yyyymmdd          name       comment
 *
 */


'use strict';
import { miniapp } from "./core/detector";
import { setUserId, setOpenId } from "./core/user";


export function miner() {
    let miner = null;
    if (miniapp.isWX) {
        miner = require('./platforms/wx');
    }
    return miner;
}

export {
    setUserId,
    setOpenId,
    miner,
}
