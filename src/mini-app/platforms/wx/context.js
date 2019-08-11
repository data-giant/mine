/**
 *  Project:    miner
 *  File:       context
 *  User:       william <wxl1342247033@gmail.com>
 *  Date:       2019/7/28
 *  Time:       9:04 PM
 *  Description:
 *
 *  Change Date       Author     Content
 *  yyyymmdd          name       comment
 *
 */


'use strict';
import { Context as BaseContext, setCtx } from '../../core/context';
import { UNKNOW } from '../../../core/constants';
import { buildQuery } from "../../../utils/url";

class Context extends BaseContext {
    constructor() {
        super();
        this._sys = {
            os: UNKNOW,
        };
    }
    getRequest() {
        return wx.request;
    }

    getStorageManager() {
        return wx;
    }

    setSystemInfo(sys) {
        this._sys = Object.assign(this._sys, sys);
    }

    getSystemInfo() {
        return this._sys;
    }

    getLocation() {
        try {
            /**
             * @var st {Array}
             */
            let st = getCurrentPages();
            let curPage = st[st.length-1];
            return {
                query: curPage.options || {},
                href: st.route + '?' + buildQuery(curPage.options || {})
            };
        } catch (e) {
            return {
                query: {},
                href: '',
            }
        }
    }
}

let _context = null;


export function install() {
    if (! _context) {
        _context = new Context();
    }
    if (wx) {
        wx.getSystemInfo({
            success (res) {
                _context.setSystemInfo({
                    os: res.system
                });
            }
        })
    }
    setCtx(_context);
}



