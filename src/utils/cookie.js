/**
 *  Project:    miner
 *  File:       cookie
 *  User:       william <wxl1342247033@gmail.com>
 *  Date:       2018/10/17
 *  Time:       10:58 PM
 *  Description:
 *
 *  Change Date       Author     Content
 *  yyyymmdd          name       comment
 *
 */

'use strict';

/**
 *
 * @param key
 * @param value
 * @param cfg
 * {
 *     expires: "session"|num|Date
 *     path:
 *     domain:
 * }
 */
export function set(key, value, cfg) {
    cfg || (cfg = {});
    let date = new Date();
    let e = key + "=" + value;
    if (cfg.expires && "number" == typeof cfg.expires) {
        date.setTime(date.getTime() + 24 * cfg.expires * 60 * 60 * 1e3)
    } else if(cfg.expires && cfg.expires.toUTCString) {
        date = cfg.expires;
    } else {
        date.setTime(date.getTime() + 63072e7);
    }

    e += "; expires=" + date.toUTCString();
    e += "; path=" + (cfg.path ? cfg.path : "/");
    e += "; domain=" + cfg.domain;
    document.cookie = e;
}

export function get(key) {
    let e = document.cookie.match(new RegExp("(?:^|;)\\s*" + key + "=([^;]+)"));
    return e ? e[1] : ""
}

export function del(key) {
    set(key, null, -1);
}

