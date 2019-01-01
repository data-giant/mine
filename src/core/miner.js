/**
 *  Project:    miner
 *  File:       miner
 *  User:       william <wxl1342247033@gmail.com>
 *  Date:       2018/12/2
 *  Time:       8:32 PM
 *  Description:
 *
 *  Change Date       Author     Content
 *  yyyymmdd          name       comment
 *
 */


'use strict';
import { get } from '../transporter/http';
import { CONFIG } from './constants';
import { buildQuery} from "../utils/url";

class Miner {
    constructor(configurer, collector) {
        this._configurer = configurer;
        this._collector = collector;
    }

    init() {
        this._sendPv();
    }

    _sendPv() {
        let baseInfo = this._collector.collect();
        baseInfo['ulm-cnt'] = this._configurer.get(CONFIG.ULM_CNT);
        let url = LOG_SERVER + LOG_KEY + '?' + buildQuery(Object.assign(baseInfo, {
            time: Math.round((new Date()).getTime() / 1000),
            logid: this.logid()
        }));
        get(url);
    }

    /**
     * TODO a unique logid globally
     * @returns {number}
     */
    logid() {
        return Math.round((new Date()).getTime() / 1000);
    }
}

export default Miner;
