/**
 *  Project:    miner
 *  File:       constants
 *  User:       william <wxl1342247033@gmail.com>
 *  Date:       2018/10/28
 *  Time:       5:59 PM
 *  Description:
 *
 *  Change Date       Author     Content
 *  yyyymmdd          name       comment
 *
 */

'use strict';

/**
 * Config entry in mata
 * @type {{ULM_CNT: string}}
 */
const CONFIG = {
    ULM_CNT: 'miner-ulm-id',        // the ulm id of current page
};

const EVENTS = {
    PAGE_VIEW: 2001,
    CLICK: 2101,
    EXPOSURE: 2201,
};

const TERMINALS = {
    H5: 'h5'
};

const UNKNOW = 'unknow';


export { EVENTS, CONFIG, UNKNOW, TERMINALS };

