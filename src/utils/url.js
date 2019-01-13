/**
 *  Project:    miner
 *  File:       url
 *  User:       william <wxl1342247033@gmail.com>
 *  Date:       2018/12/30
 *  Time:       4:10 PM
 *  Description:
 *
 *  Change Date       Author     Content
 *  yyyymmdd          name       comment
 *
 */

'use strict';
export function buildQuery(obj) {
    let query = '';
    for (let key in obj) {
        query += `&${key}=${obj[key]}`;
    }
    return query.length > 0? query.substr(1): '';
}



export function getQuery(url, name) {
    if (! url) {
        return null;
    }
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    let r = url.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}