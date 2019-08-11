/**
 *  Project:    miner
 *  File:       index2.js
 *  User:       william <wxl1342247033@gmail.com>
 *  Date:       2019/6/1
 *  Time:       10:21 AM
 *  Description:
 *
 *  Change Date       Author     Content
 *  yyyymmdd          name       comment
 *
 */

'use strict';

import magic from './magic/index'

const LOG_URL = '://log.mmstat.com/vx.gif?cfgver=vx.1.0&logtype=1';//PV日志
const WGO_URL = '://wgo.mmstat.com/vx/';//黄金令箭
const LOG_SERVER = '://api.datagiant.com/';

const KEY_PC_I = 'KEY_PC_I';
const LOG_TYPE = {TYPE_PV: 'TYPE_PV', TYPE_GOLD: 'TYPE_GOLD'};


export default class MiniProgramMiner {
    constructor(cfg) {
        this.logConfig = cfg;
        this.adapter = cfg.adapter;
        this.spma = cfg.spma;
        this.appId = cfg.appId;
        this.ulmMap = cfg.ulmMap;
        this.pageCnt = null;
        this.pageUrl = null;
        this.pagePre = null;
        this.refererPage = null;
        this.logUrl = null;
        this.wgoUrl = null;
        this._p_pf = null;
        this.pc_i = null;
        this._curPageProp = {};
        this._st = [];
    }

    /**
     * 立即发送日志
     * @param page
     * @param params
     */
    view(page, params) {
        if (typeof page === 'string') {
            page = this.ulmMap[page];
        }
        // TODO use getCurrentPages() to get stacks
        this.currentPage = page;
        let st = this.adapter.getPageStack() || [];
        let refer = {};
        if (st.length >= 2) {
            let last = st[st.length-2];
            refer = {
                ...this.ulmMap[last.route],
            };
        }
        this._mine(page, refer, params);
    }

    pageAppear(page) {
        this._curPageProp = {};
    }

    /**
     * 更新当前页面参数
     * @param prop
     */
    updatePageProperties(prop) {
        Object.assign(this._curPageProp, prop);
    }

    pageDisappear(page) {

    }

    /**
     * TODO
     * @param params
     */
    updatePageProperties(params) {
    }

    gold(gold, params) {
        this.goldLog(this.currentPage, gold, params);
    }

    goldLog(page, gold, params) {
        this._log(page, LOG_TYPE.TYPE_GOLD, params, gold);
    }

    _mine(event, page, params) {
        for (let key in params) {
        }
        this.adapter.fetch({
            url: ''
        });
    }

    _log(page, logType, params, gold) {
        if (!page) {
            console.log('fail page can not be null');
            return;
        }
        this.fixUrl();
        let url = this.genTrackUrl(page, logType === LOG_TYPE.TYPE_GOLD ? `${this.wgoUrl}${gold}?` : `${this.logUrl}&`);
        Promise.all([this.adapter.getUserId(), this.getRandomPci(), this.adapter.getDeviceId(),
            this.deviceParams ? null : this.adapter.getDeviceInfo()]).then(
            ([userId, random_pc_i, device_id, deviceInfo]) => {
                if (deviceInfo) {
                    this.deviceParams = this.formatDeviceInfo(deviceInfo);
                }
                if (userId) {//pu_i用于区分uv
                    url += `&pu_i=${userId}`;
                }
                if (device_id || random_pc_i) {//设备标识
                    this.pc_i = device_id || random_pc_i;
                    url += `&pc_i=${this.pc_i}`;
                }
                const pf = this.getP_pf();
                if (pf) {
                    url += `&_p_pf=${pf}`;
                }

                if (this.deviceParams) {
                    url += `&${this.deviceParams}`;
                }
                const {versionName} = this.logConfig || {};

                url += `&app_version=${versionName}`;
                url = this.addParams(url, params);
                if (logType === LOG_TYPE.TYPE_GOLD) {
                    const {gmkey = 'CLK'} = params || {};
                    url += `&gmkey=${gmkey}`;
                }
                this.adapter.fetch({url: url});
            });
    }

    genTrackUrl(page, url) {
        if (!page) return null;
        const cache = new Date().getTime();
        const p_url = this._url(page);
        const spm_url = this._spm(this.currentPage);//来源
        const spm_cnt = this._spm(page);//当前页面
        let trackUrl = `${url}title=${page.name}&aplus&spm-cnt=${spm_cnt}&cache=${cache}&_p_url=${p_url}`;
        if (spm_url) {//设置来源
            trackUrl += `&spm-url=${spm_url}`;
            trackUrl += `&_p_ref=${this._url(this.currentPage)}`;
        }
        this.currentPage = page;
        return trackUrl;
    }

    _spm(page) {
        if (!page) return null;
        return `${this.spma}.${page.spm}.0.0`;
    }

    _url(page) {
        return !page ? '' : encodeURIComponent(`https://h5.m.taobao.com/${page.name}.html`);
    }

    /**
     * 先获取本地的pci如果没有则生成一个随机的
     * @returns {Promise}
     */
    getRandomPci() {
        return new Promise((resolve, reject) => {
            this.getLocalPci().then(data => {
                if (data) {
                    resolve(data);
                } else {
                    resolve(this.randomPci());
                }
            }).catch(e => {
                resolve(this.randomPci());
            });
        });
    }

    /**
     * 生成随机pci
     * @returns {*}
     */
    randomPci() {
        this.pc_i = `${new Date().getTime()}${this.getRandomInt(1, 999999)}`;
        this.saveLocalPci();
        return this.pc_i;
    }

    getLocalPci() {
        return this.adapter.getItem(KEY_PC_I);
    }

    getDeviceInfo() {
        return this.adapter.getDeviceInfo();
    }

    saveLocalPci() {
        if (!this.pc_i) return;
        this.adapter.setItem(KEY_PC_I, this.pc_i);
    }

    fixUrl() {
        if (this.logUrl && this.wgoUrl) return;
        let prefix = this.logConfig.debug ? 'http' : 'https';
        if (!this.logUrl) {
            this.logUrl = `${prefix}${LOG_URL}`;
        }
        if (!this.wgoUrl) {
            this.wgoUrl = `${prefix}${WGO_URL}`;
        }
    }

    formatDeviceInfo(deviceInfo) {
        if (!deviceInfo) return null;
        const {brand, model, osVersionName, platformVersionCode, osType} = deviceInfo;
        return `brand=${brand}&device_model=${encodeURIComponent(
            model)}&os_version=${osVersionName}&os=${osType}&platformVersionCode=${platformVersionCode}`;

    }

    /**
     * 生成指定范围内的随机整数
     */
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    addParams(url, params = {}) {
        for (let key in params) {
            url += `&${key}=${params[key]}`;
        }
        return url;
    }

    getP_pf() {
        if (this._p_pf) {
            return this._p_pf;
        }
        return this._p_pf = this.p_pf();
    }

    p_pf() {
        try {
            if (tt) {
                let res;
                try {
                    res = tt.getSystemInfoSync();
                } catch (error) {
                    console.log(`获取系统信息失败`);
                }
                const {appName = ''} = res || {};
                switch (appName.toLowerCase()) {
                    case 'douyin':
                        return 'douyin';
                    case 'ppx':
                        return 'ppx';
                    default:
                        return 'tt';
                }
            }
        } catch (e) {

        }
        try {
            if (swan) {
                return 'bd';
            }
        } catch (e) {

        }
        try {
            if (wx) {
                return 'wx';
            }
        } catch (e) {

        }
        return null;
    }
}


