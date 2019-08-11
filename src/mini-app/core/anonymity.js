/**
 *  Project:    miner
 *  File:       anonymity
 *  User:       william <wxl1342247033@gmail.com>
 *  Date:       2019/7/28
 *  Time:       8:14 PM
 *  Description:
 *
 *  Change Date       Author     Content
 *  yyyymmdd          name       comment
 *
 */

'use strict';
import { getCtx } from './context';

const LS_ANONYMOUS_ID = '_aid';

let _anonymousId = null;

/**
 * TODO recognize the visitor by etag
 * @return {Promise<any>}
 */
function recognizeByEtag() {
    return new Promise((resolve, reject) => {
        let req = getCtx().getRequest();
    });
}

function recognizeByLS() {
    return new Promise((resolve, reject) => {
        let sm = getCtx().getStorageManager();
        sm.getStorage({
            key: LS_ANONYMOUS_ID,
            success(res) {
                if (res.data) {
                    _anonymousId = res.data;
                    resolve(res.data);
                } else {
                    reject(res);
                }
            },
            fail() {
                reject();
            }
        })
    })
}

export function hasAnonymousId() {
    return _anonymousId == null;
}

/**
 * Try to recognize the anonymous visitor
 * @return {Promise}
 */
export function recognize() {
    return new Promise((resolve, reject) => {
        if (hasAnonymousId()) {
            resolve(_anonymousId);
        } else {
            recognizeByLS().finally(() => resolve(_anonymousId));
        }
    });
}
