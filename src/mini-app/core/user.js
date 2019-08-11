/**
 *  Project:    miner
 *  File:       user
 *  User:       william <wxl1342247033@gmail.com>
 *  Date:       2019/8/10
 *  Time:       11:30 PM
 *  Description:
 *
 *  Change Date       Author     Content
 *  yyyymmdd          name       comment
 *
 */

'use strict';
let _uid = null;
let _openid = null;

/**
 * TODO Fire an event to rewrite logs
 * @param userId
 */
export function setUserId(userId) {
    _uid = userId;
}

/**
 * TODO Fire an event to rewrite logs
 * @param openId
 */
export function setOpenId(openId) {
    _openid = openId;
}

export function getUserId() {
    return _uid;
}

export function getOpenId() {
    return _openid;
}
