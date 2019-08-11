/**
 *  Project:    miner
 *  File:       miner
 *  User:       william <wxl1342247033@gmail.com>
 *  Date:       2019/7/21
 *  Time:       6:55 PM
 *  Description:
 *
 *  Change Date       Author     Content
 *  yyyymmdd          name       comment
 *
 */


'use strict';


import { getCtx } from './context';
import { EVENTS, HTTP_METHOD } from '../../core/constants'
import { recognize } from './anonymity';
import { getQuery } from '../../utils/url'
import { getOpenId, getUserId } from "./user";

export class Miner {
    /**
     *
     * @param cfg {{pageMapper: {}, site: string}}
     * Example:
     * {
     *     pageMapper: {
     *         'pages/index': {
     *             urlmb: 'abc',
     *             name: 'Home',
     *         }
     *     },
     *     site: 'mySiteId'
     * }
     */
    constructor(cfg = null) {
        this._meta = {};
        this._cfg = cfg;
    }

    setCfg(cfg) {
        this._cfg = cfg;
    }

    /**
     * preserved arguments
     * @return {{_tls: string, _ver: string}}
     * @private
     */
    _getPreArgs() {
        return {
            _clt: 'mapp_miner',  // collector
            _ver: '0.0.1',  // version
        };
    }

    _getEnvArgs() {
        return {
            _appid: 'appid',
            _os: getCtx().getSystemInfo().os,
            _pf: 'wx',
        }
    }

    getArgs(args) {
        return Object.assign(args, this._getEnvArgs(), this._getPreArgs());
    }
    /**
     *
     * @param eventId
     * @return {string}
     */
    _getReqSvrByEvtId(eventId) {
        return 'http://localhost:8080';
    }

    /**
     * Get current page/routes
     * @return {string}
     */
    getCurPage() {
        let loc = getCtx().getLocation();
        return loc.path;
    }

    /**
     *
     * @param page
     * @return {Array}
     */
    getPageULM(page) {
        if (page in this._cfg.pageMapper) {
            return [this._cfg.site, this._cfg.pageMapper[page]['ulmb']];
        }
        return [this._cfg.site, '0'];
    }

    setPageULM(ulmb, name = '') {
        let page = this.getCurPage();
        if (page in this._cfg.pageMapper) {
            this._cfg.pageMapper[page]['ulmb'] = ulmb;
        } else {
            this._cfg.pageMapper[page] = {
                ulmb,
                name,
            };
        }
    }

    pageAppear(pageCfg) {
        let loc = getCtx().getLocation();
        if (!this._meta['ulm_lst']) {
            this._meta['ulm_lst'] = getQuery(loc.href, 'ulm') || '';
        }
        let args = this._assemble(EVENTS.PAGE_VIEW, event, pageCfg);
        this._mine(EVENTS.PAGE_VIEW, args);
    }

    fireEvent(event, eventArgs) {
        let args = this._assemble(EVENTS.USER_DEFINE, event, eventArgs);
        this._mine(EVENTS.USER_DEFINE, args);
    }

    _assemble(eventId, event, eventArgs) {
        return {
            id: eventId,
            arg1: this.getCurPage(),
            arg2: event,
            arg3: '',
            args: {
                ...eventArgs,
                ulm_cnt: this.getPageULM(this.getCurPage()).join('.') + '0.0',
                ulm_lst: this._meta['ulm_lst'],
            }
        }
    }


    /**
     * Send request
     * @param eventId
     * @param args
     * @private
     */
    _mine(eventId, args) {
        let req = getCtx().getRequest();
        recognize()
            .then(aid => {
                args['reserves'] = {
                    _uid: getUserId(),
                    _openid: getOpenId(),
                    _aid: aid,
                };
                return new Promise((resolve, reject) => {
                    req.request({
                        url: this._getReqSvrByEvtId(eventId),
                        method: HTTP_METHOD.POST,
                        data: args,
                        success(res) {
                            resolve(res);
                        },
                        fail(res) {
                            reject(res);
                        }
                    })
                })
            });
    }

}
