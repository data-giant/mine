/**
 *  Project:    miner
 *  File:       index2.js
 *  User:       william <wxl1342247033@gmail.com>
 *  Date:       2019/6/1
 *  Time:       10:24 AM
 *  Description:
 *
 *  Change Date       Author     Content
 *  yyyymmdd          name       comment
 *
 */

'use strict';


let _inited = false;

export default function () {
    if (_inited) {
        return;
    }
    _inited = true;
    let _miner = null;
    function wrapper(origObj, tarName, hook) {
        if (origObj[tarName]) {
            let origFunc = origObj[tarName];
            origObj[tarName] = function (_origObj) {
                hook.call(this, _origObj, tarName);
                origFunc.call(this, _origObj);
                if (typeof getApp === 'function') {
                    const { minerObserver = {} } = getApp() || {};
                    typeof minerObserver[tarName] === 'function' && minerObserver[tarName].call(this, _origObj)
                }
            }
        } else {
            origObj[tarName] = function (_origObj) {
                hook.call(this, _origObj, tarName);
                if (typeof getApp === 'function') {
                    const { minerObserver = {} } = getApp() || {};
                    typeof minerObserver[tarName] === 'function' && minerObserver[tarName].call(this, _origObj)
                }
            }
        }
    }

    function _onPageShow(object) {
        if (!_miner && typeof getApp === 'function') {
            const { miner } = getApp();
            miner && (_miner = miner);
        }
        _miner && _miner.logPv(this.route || this.__route__);
    }

    function _onLoad(object) {
    }

    function _onReady(object) {
    }

    function _onUnload(object) {
    }

    function _onPageHide(object) {
    }

    function _onReachBottom() {
    }

    function _onPullDownRefresh() {
    }

    function _onLaunch(obj) {
    }

    function _onAppShow(obj) {
    }

    function _onAppHide() {
    }

    function _onError(n) {
    }

    return function(n) {
        !
            function() {
                let _App = App, _Page = Page;
                App = function(origObj) {
                    wrapper(origObj, 'onLaunch', _onLaunch);
                    wrapper(origObj, 'onShow', _onAppShow);
                    wrapper(origObj, 'onHide', _onAppHide);
                    wrapper(origObj, 'onError', _onError);
                    _App(origObj);
                };
                Page = function(origObj) {
                    wrapper(origObj, 'onLoad', _onLoad);
                    wrapper(origObj, 'onReady', _onReady);
                    wrapper(origObj, 'onUnload', _onUnload);
                    wrapper(origObj, 'onShow', _onPageShow);
                    wrapper(origObj, 'onHide', _onPageHide);
                    wrapper(origObj, 'onReachBottom', _onReachBottom);
                    wrapper(origObj, 'onPullDownRefresh', _onPullDownRefresh);
                    _Page(origObj);
                };
            }();
    }();
}

// !
//     function(n, t) {
//         if ('object' == typeof exports && 'undefined' != typeof module) {
//             module.exports = t();
//         }
//         else if ('function' == typeof define && define.amd) {
//             define(t);
//         }
//         else {
//             n.miner = t();
//         }
//     }(this,
//         function() {
//             function wrapper(origObj, tarName, hook) {
//                 if (origObj[tarName]) {
//                     var origFunc = origObj[tarName];
//                     origObj[tarName] = function (_origObj) {
//                         hook.call(this, _origObj, tarName),
//                             origFunc.call(this, _origObj);
//                         if (typeof getApp === 'function') {
//                             const { slogObserver = {} } = getApp() || {};
//                             typeof slogObserver[tarName] === 'function' && slogObserver[tarName].call(this, _origObj)
//                         }
//                     }
//                 } else {
//                     origObj[tarName] = function (_origObj) {
//                         hook.call(this, _origObj, tarName);
//                         if (typeof getApp === 'function') {
//                             const { slogObserver = {} } = getApp() || {};
//                             typeof slogObserver[tarName] === 'function' && slogObserver[tarName].call(this, _origObj)
//                         }
//                     }
//                 }
//             }
//
//             let _miner = null;
//             function _onPageShow(object) {
//                 if (!_miner && typeof getApp === 'function') {
//                     const { miner } = getApp();
//                     miner && (_miner = miner);
//                 }
//                 _slog && _slog.logPv(this.route || this.__route__);
//             }
//
//             function _onLoad(object) {
//             }
//
//             function _onReady(object) {
//             }
//
//             function _onUnload(object) {
//             }
//
//             function _onHide_Page(object) {
//             }
//
//             function _onReachBottom() {
//             }
//
//             function _onPullDownRefresh() {
//             }
//
//             function _onLaunch(obj) {
//             }
//
//             function _onAppShow(obj) {
//             }
//
//             function _onAppHide() {
//             }
//
//             function _onError(n) {
//             }
//
//             return function(n) {
//                 !
//                     function() {
//                         let _App = App, _Page = Page;
//                         App = function(origObj) {
//                             wrapper(origObj, 'onLaunch', _onLaunch);
//                             wrapper(origObj, 'onShow', _onAppShow);
//                             wrapper(origObj, 'onHide', _onAppHide);
//                             wrapper(origObj, 'onError', _onError);
//                             _App(origObj);
//                         };
//                         Page = function(origObj) {
//                             wrapper(origObj, 'onLoad', _onLoad);
//                             wrapper(origObj, 'onReady', _onReady);
//                             wrapper(origObj, 'onUnload', _onUnload);
//                             wrapper(origObj, 'onShow', _onPageShow);
//                             wrapper(origObj, 'onHide', _onHide_Page);
//                             wrapper(origObj, 'onReachBottom', _onReachBottom);
//                             wrapper(origObj, 'onPullDownRefresh', _onPullDownRefresh);
//                             _Page(origObj);
//                         };
//                     }();
//             }();
//     });

