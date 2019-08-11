/**
 *  Project:    miner
 *  File:       detector
 *  User:       william <wxl1342247033@gmail.com>
 *  Date:       2019/7/19
 *  Time:       2:46 PM
 *  Description:
 *
 *  Change Date       Author     Content
 *  yyyymmdd          name       comment
 *
 */

'use strict';

export const isWeb = typeof navigator === 'object' && (navigator.appCodeName === 'Mozilla' || navigator.product === 'Gecko');
export const isNode = typeof process !== 'undefined' && !!(process.versions && process.versions.node);
export const isWeex = typeof callNative === 'function' || typeof WXEnvironment === 'object' && WXEnvironment.platform !== 'Web';
export const isReactNative = typeof __fbBatchedBridgeConfig !== 'undefined';


export const miniapp = {
    isAP: typeof my === 'object' && my.ap,
    isDD: typeof my === 'object' && my.dd,
    isWX: typeof wx === 'object',
};
