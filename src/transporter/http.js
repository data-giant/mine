/**
 *  Project:    miner
 *  File:       http
 *  User:       william <wxl1342247033@gmail.com>
 *  Date:       2018/10/17
 *  Time:       5:20 PM
 *  Description:
 *
 *  Change Date       Author     Content
 *  yyyymmdd          name       comment
 *
 */

'use strict';

/**
 *
 * @param url
 */
export function get(url) {
    let img = new Image();
    let name = '_imgname_' + Math.random();
    window[name] = img;
    function clearImg() {
        if (window[name])
            try {
                delete window[name]
            } catch (e) {
                window[name] = void 0
            }
    }
    img.onload = clearImg;
    img.onerror = clearImg;
    setTimeout(() => {
        img.src = '';
        clearImg();
    }, 5e2);
    img.src = url;
}


export function post(url, data) {
    // for (let key in data) {
    //     if (key != 'uuid') {
    //         data[encodeURIComponent(key)] = encodeURIComponent(data[key]);
    //     }
    // }
    if (navigator && navigator.sendBeacon) {
        navigator.sendBeacon(url, JSON.stringify(data));
    }
}