/**
 *  Project:    miner
 *  File:       detector
 *  User:       william <wxl1342247033@gmail.com>
 *  Date:       2019/7/19
 *  Time:       2:46 PM
 *  Description:
 *
 *  Change Date       Author     Content
 *  yyyymmdd          name       comment
 *
 */

'use strict';

function isAP() {
    return typeof my === 'object' && my.ap;
}

function isDD() {
    return typeof my === 'object' && my.dd;
}

function isWX() {
    return typeof wx === 'object';
}

export const miniapp = {
    isAP,
    isDD,
    isWX
};
