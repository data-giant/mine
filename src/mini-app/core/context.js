/**
 *  Project:    miner
 *  File:       context
 *  User:       william <wxl1342247033@gmail.com>
 *  Date:       2019/7/19
 *  Time:       3:43 PM
 *  Description:
 *
 *  Change Date       Author     Content
 *  yyyymmdd          name       comment
 *
 */

'use strict';
import { miniapp } from './detector';
import { request } from '../platforms/wx';

export class Context {
    constructor() {
        if (miniapp.isAP() || miniapp.isDD()) {
            this.request = null;
        } else if (miniapp.isWX()) {
            this.request = request;
        } else {
            throw new Error("Unsupport mini app platforms");
        }
    }

    getRequest() {
        throw new Error("Not implemented");
    }

    getStorageManager() {
        throw new Error("Not implemented");
    }

    getSystemInfo() {
        throw new Error("Not implemented");
    }

    /**
     *
     * @return {{href: string, path: string, query: Array}}
     */
    getLocation() {
        let href = '';
        let loc = {
            href
        };
        try {
            loc = location || {
                href
            };
        } catch (e) {
            loc = {
                href
            };
        }
        this._location = loc;
        return this._location;
    }
}


let context = new Context();

/**
 *
 * @param ctx {Context}
 */
export function setCtx(ctx) {
    context = ctx;
}

/**
 *
 * @return {Context}
 */
export function getCtx() {
    return context;
}
