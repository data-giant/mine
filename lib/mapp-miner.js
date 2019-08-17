module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/mini-app/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/core/constants.js":
/*!*******************************!*\
  !*** ./src/core/constants.js ***!
  \*******************************/
/*! exports provided: EVENTS, CONFIG, UNKNOW, TERMINALS, HTTP_METHOD */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENTS", function() { return EVENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONFIG", function() { return CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNKNOW", function() { return UNKNOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TERMINALS", function() { return TERMINALS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTP_METHOD", function() { return HTTP_METHOD; });
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
    USER_DEFINE: 9999,
};

const TERMINALS = {
    H5: 'h5'
};

const HTTP_METHOD = {
    GET: 'get',
    POST: 'post',
};

const UNKNOW = 'unknow';






/***/ }),

/***/ "./src/mini-app/core/anonymity.js":
/*!****************************************!*\
  !*** ./src/mini-app/core/anonymity.js ***!
  \****************************************/
/*! exports provided: hasAnonymousId, recognize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasAnonymousId", function() { return hasAnonymousId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recognize", function() { return recognize; });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context */ "./src/mini-app/core/context.js");
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




const LS_ANONYMOUS_ID = '_aid';

let _anonymousId = null;

/**
 * TODO recognize the visitor by etag
 * @return {Promise<any>}
 */
function recognizeByEtag() {
    return new Promise((resolve, reject) => {
        let req = Object(_context__WEBPACK_IMPORTED_MODULE_0__["getCtx"])().getRequest();
    });
}

function recognizeByLS() {
    return new Promise((resolve, reject) => {
        let sm = Object(_context__WEBPACK_IMPORTED_MODULE_0__["getCtx"])().getStorageManager();
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

function hasAnonymousId() {
    return _anonymousId == null;
}

/**
 * Try to recognize the anonymous visitor
 * @return {Promise}
 */
function recognize() {
    return new Promise((resolve, reject) => {
        if (hasAnonymousId()) {
            resolve(_anonymousId);
        } else {
            recognizeByLS().finally(() => resolve(_anonymousId));
        }
    });
}


/***/ }),

/***/ "./src/mini-app/core/context.js":
/*!**************************************!*\
  !*** ./src/mini-app/core/context.js ***!
  \**************************************/
/*! exports provided: Context, setCtx, getCtx */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCtx", function() { return setCtx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCtx", function() { return getCtx; });
/* harmony import */ var _detector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detector */ "./src/mini-app/core/detector.js");
/* harmony import */ var _platforms_wx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../platforms/wx */ "./src/mini-app/platforms/wx/index.js");
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





class Context {
    constructor() {
        if (_detector__WEBPACK_IMPORTED_MODULE_0__["miniapp"].isAP() || _detector__WEBPACK_IMPORTED_MODULE_0__["miniapp"].isDD()) {
            this.request = null;
        } else if (_detector__WEBPACK_IMPORTED_MODULE_0__["miniapp"].isWX()) {
            this.request = _platforms_wx__WEBPACK_IMPORTED_MODULE_1__["request"];
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
function setCtx(ctx) {
    context = ctx;
}

/**
 *
 * @return {Context}
 */
function getCtx() {
    return context;
}


/***/ }),

/***/ "./src/mini-app/core/detector.js":
/*!***************************************!*\
  !*** ./src/mini-app/core/detector.js ***!
  \***************************************/
/*! exports provided: miniapp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "miniapp", function() { return miniapp; });
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



function isAP() {
    return typeof my === 'object' && my.ap;
}

function isDD() {
    return typeof my === 'object' && my.dd;
}

function isWX() {
    return typeof wx === 'object';
}

const miniapp = {
    isAP,
    isDD,
    isWX
};


/***/ }),

/***/ "./src/mini-app/core/miner.js":
/*!************************************!*\
  !*** ./src/mini-app/core/miner.js ***!
  \************************************/
/*! exports provided: Miner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Miner", function() { return Miner; });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context */ "./src/mini-app/core/context.js");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/constants */ "./src/core/constants.js");
/* harmony import */ var _anonymity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./anonymity */ "./src/mini-app/core/anonymity.js");
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/url */ "./src/utils/url.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user */ "./src/mini-app/core/user.js");
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











class Miner {
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
            _os: Object(_context__WEBPACK_IMPORTED_MODULE_0__["getCtx"])().getSystemInfo().os,
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
        let loc = Object(_context__WEBPACK_IMPORTED_MODULE_0__["getCtx"])().getLocation();
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
        let loc = Object(_context__WEBPACK_IMPORTED_MODULE_0__["getCtx"])().getLocation();
        if (!this._meta['ulm_lst']) {
            this._meta['ulm_lst'] = Object(_utils_url__WEBPACK_IMPORTED_MODULE_3__["getQuery"])(loc.href, 'ulm') || '';
        }
        let args = this._assemble(_core_constants__WEBPACK_IMPORTED_MODULE_1__["EVENTS"].PAGE_VIEW, event, pageCfg);
        this._mine(_core_constants__WEBPACK_IMPORTED_MODULE_1__["EVENTS"].PAGE_VIEW, args);
    }

    fireEvent(event, eventArgs) {
        let args = this._assemble(_core_constants__WEBPACK_IMPORTED_MODULE_1__["EVENTS"].USER_DEFINE, event, eventArgs);
        this._mine(_core_constants__WEBPACK_IMPORTED_MODULE_1__["EVENTS"].USER_DEFINE, args);
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
        let req = Object(_context__WEBPACK_IMPORTED_MODULE_0__["getCtx"])().getRequest();
        Object(_anonymity__WEBPACK_IMPORTED_MODULE_2__["recognize"])()
            .then(aid => {
                args['reserves'] = {
                    _uid: Object(_user__WEBPACK_IMPORTED_MODULE_4__["getUserId"])(),
                    _openid: Object(_user__WEBPACK_IMPORTED_MODULE_4__["getOpenId"])(),
                    _aid: aid,
                };
                return new Promise((resolve, reject) => {
                    req.request({
                        url: this._getReqSvrByEvtId(eventId),
                        method: _core_constants__WEBPACK_IMPORTED_MODULE_1__["HTTP_METHOD"].POST,
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


/***/ }),

/***/ "./src/mini-app/core/user.js":
/*!***********************************!*\
  !*** ./src/mini-app/core/user.js ***!
  \***********************************/
/*! exports provided: setUserId, setOpenId, getUserId, getOpenId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUserId", function() { return setUserId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setOpenId", function() { return setOpenId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserId", function() { return getUserId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOpenId", function() { return getOpenId; });
/**
 *  Project:    miner
 *  File:       user
 *  User:       william <wxl1342247033@gmail.com>
 *  Date:       2019/8/10
 *  Time:       11:30 PM
 *  Description:
 *
 *  Change Date       Author     Content
 *  yyyymmdd          name       comment
 *
 */


let _uid = null;
let _openid = null;

/**
 * TODO Fire an event to rewrite logs
 * @param userId
 */
function setUserId(userId) {
    _uid = userId;
}

/**
 * TODO Fire an event to rewrite logs
 * @param openId
 */
function setOpenId(openId) {
    _openid = openId;
}

function getUserId() {
    return _uid;
}

function getOpenId() {
    return _openid;
}


/***/ }),

/***/ "./src/mini-app/index.js":
/*!*******************************!*\
  !*** ./src/mini-app/index.js ***!
  \*******************************/
/*! exports provided: setUserId, setOpenId, miner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "miner", function() { return miner; });
/* harmony import */ var _core_detector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/detector */ "./src/mini-app/core/detector.js");
/* harmony import */ var _core_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/user */ "./src/mini-app/core/user.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setUserId", function() { return _core_user__WEBPACK_IMPORTED_MODULE_1__["setUserId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setOpenId", function() { return _core_user__WEBPACK_IMPORTED_MODULE_1__["setOpenId"]; });

/**
 *  Project:    miner
 *  File:       index
 *  User:       william <wxl1342247033@gmail.com>
 *  Date:       2019/8/10
 *  Time:       11:24 PM
 *  Description:
 *
 *  Change Date       Author     Content
 *  yyyymmdd          name       comment
 *
 */







function miner() {
    let miner = null;
    if (_core_detector__WEBPACK_IMPORTED_MODULE_0__["miniapp"].isWX()) {
        let wxmapp = __webpack_require__(/*! ./platforms/wx */ "./src/mini-app/platforms/wx/index.js");
        miner = wxmapp.miner;
        wxmapp.install();
    } else {

    }
    return miner;
}



/***/ }),

/***/ "./src/mini-app/platforms/wx/context.js":
/*!**********************************************!*\
  !*** ./src/mini-app/platforms/wx/context.js ***!
  \**********************************************/
/*! exports provided: install */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony import */ var _core_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/context */ "./src/mini-app/core/context.js");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/constants */ "./src/core/constants.js");
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/url */ "./src/utils/url.js");
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







class Context extends _core_context__WEBPACK_IMPORTED_MODULE_0__["Context"] {
    constructor() {
        super();
        this._sys = {
            os: _core_constants__WEBPACK_IMPORTED_MODULE_1__["UNKNOW"],
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
                href: st.route + '?' + Object(_utils_url__WEBPACK_IMPORTED_MODULE_2__["buildQuery"])(curPage.options || {})
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


function install() {
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
    Object(_core_context__WEBPACK_IMPORTED_MODULE_0__["setCtx"])(_context);
}





/***/ }),

/***/ "./src/mini-app/platforms/wx/index.js":
/*!********************************************!*\
  !*** ./src/mini-app/platforms/wx/index.js ***!
  \********************************************/
/*! exports provided: miner, install */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "miner", function() { return miner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony import */ var _core_miner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/miner */ "./src/mini-app/core/miner.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context */ "./src/mini-app/platforms/wx/context.js");
/**
 *  Project:    miner
 *  File:       index
 *  User:       william <wxl1342247033@gmail.com>
 *  Date:       2019/7/28
 *  Time:       5:29 PM
 *  Description:
 *
 *  Change Date       Author     Content
 *  yyyymmdd          name       comment
 *
 */






const miner = new _core_miner__WEBPACK_IMPORTED_MODULE_0__["Miner"]();
const install = _context__WEBPACK_IMPORTED_MODULE_1__["install"];


/***/ }),

/***/ "./src/utils/url.js":
/*!**************************!*\
  !*** ./src/utils/url.js ***!
  \**************************/
/*! exports provided: buildQuery, getQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildQuery", function() { return buildQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuery", function() { return getQuery; });
/**
 *  Project:    miner
 *  File:       url
 *  User:       william <wxl1342247033@gmail.com>
 *  Date:       2018/12/30
 *  Time:       4:10 PM
 *  Description:
 *
 *  Change Date       Author     Content
 *  yyyymmdd          name       comment
 *
 */


function buildQuery(obj) {
    let query = '';
    for (let key in obj) {
        query += `&${key}=${obj[key]}`;
    }
    return query.length > 0? query.substr(1): '';
}



function getQuery(url, name) {
    if (! url) {
        return null;
    }
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    let r = url.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91c2VyTWluZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdXNlck1pbmVyLy4vc3JjL2NvcmUvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3VzZXJNaW5lci8uL3NyYy9taW5pLWFwcC9jb3JlL2Fub255bWl0eS5qcyIsIndlYnBhY2s6Ly91c2VyTWluZXIvLi9zcmMvbWluaS1hcHAvY29yZS9jb250ZXh0LmpzIiwid2VicGFjazovL3VzZXJNaW5lci8uL3NyYy9taW5pLWFwcC9jb3JlL2RldGVjdG9yLmpzIiwid2VicGFjazovL3VzZXJNaW5lci8uL3NyYy9taW5pLWFwcC9jb3JlL21pbmVyLmpzIiwid2VicGFjazovL3VzZXJNaW5lci8uL3NyYy9taW5pLWFwcC9jb3JlL3VzZXIuanMiLCJ3ZWJwYWNrOi8vdXNlck1pbmVyLy4vc3JjL21pbmktYXBwL2luZGV4LmpzIiwid2VicGFjazovL3VzZXJNaW5lci8uL3NyYy9taW5pLWFwcC9wbGF0Zm9ybXMvd3gvY29udGV4dC5qcyIsIndlYnBhY2s6Ly91c2VyTWluZXIvLi9zcmMvbWluaS1hcHAvcGxhdGZvcm1zL3d4L2luZGV4LmpzIiwid2VicGFjazovL3VzZXJNaW5lci8uL3NyYy91dGlscy91cmwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR2E7QUFDMkI7QUFDVzs7QUFFNUMsa0JBQWtCLGlEQUFLO0FBQ3ZCLGdCQUFnQixnREFBVzs7Ozs7Ozs7Ozs7OztBQ25CbEM7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhO0FBQ047QUFDUDtBQUNBO0FBQ0EscUJBQXFCLElBQUksR0FBRyxTQUFTO0FBQ3JDO0FBQ0E7QUFDQTs7OztBQUlPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6Im1hcHAtbWluZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9taW5pLWFwcC9pbmRleC5qc1wiKTtcbiIsIi8qKlxuICogIFByb2plY3Q6ICAgIG1pbmVyXG4gKiAgRmlsZTogICAgICAgY29uc3RhbnRzXG4gKiAgVXNlcjogICAgICAgd2lsbGlhbSA8d3hsMTM0MjI0NzAzM0BnbWFpbC5jb20+XG4gKiAgRGF0ZTogICAgICAgMjAxOC8xMC8yOFxuICogIFRpbWU6ICAgICAgIDU6NTkgUE1cbiAqICBEZXNjcmlwdGlvbjpcbiAqXG4gKiAgQ2hhbmdlIERhdGUgICAgICAgQXV0aG9yICAgICBDb250ZW50XG4gKiAgeXl5eW1tZGQgICAgICAgICAgbmFtZSAgICAgICBjb21tZW50XG4gKlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDb25maWcgZW50cnkgaW4gbWF0YVxuICogQHR5cGUge3tVTE1fQ05UOiBzdHJpbmd9fVxuICovXG5jb25zdCBDT05GSUcgPSB7XG4gICAgVUxNX0NOVDogJ21pbmVyLXVsbS1pZCcsICAgICAgICAvLyB0aGUgdWxtIGlkIG9mIGN1cnJlbnQgcGFnZVxufTtcblxuY29uc3QgRVZFTlRTID0ge1xuICAgIFBBR0VfVklFVzogMjAwMSxcbiAgICBDTElDSzogMjEwMSxcbiAgICBFWFBPU1VSRTogMjIwMSxcbiAgICBVU0VSX0RFRklORTogOTk5OSxcbn07XG5cbmNvbnN0IFRFUk1JTkFMUyA9IHtcbiAgICBINTogJ2g1J1xufTtcblxuY29uc3QgSFRUUF9NRVRIT0QgPSB7XG4gICAgR0VUOiAnZ2V0JyxcbiAgICBQT1NUOiAncG9zdCcsXG59O1xuXG5jb25zdCBVTktOT1cgPSAndW5rbm93JztcblxuXG5leHBvcnQgeyBFVkVOVFMsIENPTkZJRywgVU5LTk9XLCBURVJNSU5BTFMsIEhUVFBfTUVUSE9EIH07XG5cbiIsIi8qKlxuICogIFByb2plY3Q6ICAgIG1pbmVyXG4gKiAgRmlsZTogICAgICAgYW5vbnltaXR5XG4gKiAgVXNlcjogICAgICAgd2lsbGlhbSA8d3hsMTM0MjI0NzAzM0BnbWFpbC5jb20+XG4gKiAgRGF0ZTogICAgICAgMjAxOS83LzI4XG4gKiAgVGltZTogICAgICAgODoxNCBQTVxuICogIERlc2NyaXB0aW9uOlxuICpcbiAqICBDaGFuZ2UgRGF0ZSAgICAgICBBdXRob3IgICAgIENvbnRlbnRcbiAqICB5eXl5bW1kZCAgICAgICAgICBuYW1lICAgICAgIGNvbW1lbnRcbiAqXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuaW1wb3J0IHsgZ2V0Q3R4IH0gZnJvbSAnLi9jb250ZXh0JztcblxuY29uc3QgTFNfQU5PTllNT1VTX0lEID0gJ19haWQnO1xuXG5sZXQgX2Fub255bW91c0lkID0gbnVsbDtcblxuLyoqXG4gKiBUT0RPIHJlY29nbml6ZSB0aGUgdmlzaXRvciBieSBldGFnXG4gKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gKi9cbmZ1bmN0aW9uIHJlY29nbml6ZUJ5RXRhZygpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBsZXQgcmVxID0gZ2V0Q3R4KCkuZ2V0UmVxdWVzdCgpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiByZWNvZ25pemVCeUxTKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGxldCBzbSA9IGdldEN0eCgpLmdldFN0b3JhZ2VNYW5hZ2VyKCk7XG4gICAgICAgIHNtLmdldFN0b3JhZ2Uoe1xuICAgICAgICAgICAga2V5OiBMU19BTk9OWU1PVVNfSUQsXG4gICAgICAgICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICAgICAgICAgIGlmIChyZXMuZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBfYW5vbnltb3VzSWQgPSByZXMuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMuZGF0YSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHJlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZhaWwoKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Fub255bW91c0lkKCkge1xuICAgIHJldHVybiBfYW5vbnltb3VzSWQgPT0gbnVsbDtcbn1cblxuLyoqXG4gKiBUcnkgdG8gcmVjb2duaXplIHRoZSBhbm9ueW1vdXMgdmlzaXRvclxuICogQHJldHVybiB7UHJvbWlzZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlY29nbml6ZSgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBpZiAoaGFzQW5vbnltb3VzSWQoKSkge1xuICAgICAgICAgICAgcmVzb2x2ZShfYW5vbnltb3VzSWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVjb2duaXplQnlMUygpLmZpbmFsbHkoKCkgPT4gcmVzb2x2ZShfYW5vbnltb3VzSWQpKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiLyoqXG4gKiAgUHJvamVjdDogICAgbWluZXJcbiAqICBGaWxlOiAgICAgICBjb250ZXh0XG4gKiAgVXNlcjogICAgICAgd2lsbGlhbSA8d3hsMTM0MjI0NzAzM0BnbWFpbC5jb20+XG4gKiAgRGF0ZTogICAgICAgMjAxOS83LzE5XG4gKiAgVGltZTogICAgICAgMzo0MyBQTVxuICogIERlc2NyaXB0aW9uOlxuICpcbiAqICBDaGFuZ2UgRGF0ZSAgICAgICBBdXRob3IgICAgIENvbnRlbnRcbiAqICB5eXl5bW1kZCAgICAgICAgICBuYW1lICAgICAgIGNvbW1lbnRcbiAqXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuaW1wb3J0IHsgbWluaWFwcCB9IGZyb20gJy4vZGV0ZWN0b3InO1xuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4uL3BsYXRmb3Jtcy93eCc7XG5cbmV4cG9ydCBjbGFzcyBDb250ZXh0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgaWYgKG1pbmlhcHAuaXNBUCgpIHx8IG1pbmlhcHAuaXNERCgpKSB7XG4gICAgICAgICAgICB0aGlzLnJlcXVlc3QgPSBudWxsO1xuICAgICAgICB9IGVsc2UgaWYgKG1pbmlhcHAuaXNXWCgpKSB7XG4gICAgICAgICAgICB0aGlzLnJlcXVlc3QgPSByZXF1ZXN0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5zdXBwb3J0IG1pbmkgYXBwIHBsYXRmb3Jtc1wiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFJlcXVlc3QoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZFwiKTtcbiAgICB9XG5cbiAgICBnZXRTdG9yYWdlTWFuYWdlcigpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm90IGltcGxlbWVudGVkXCIpO1xuICAgIH1cblxuICAgIGdldFN5c3RlbUluZm8oKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZFwiKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3tocmVmOiBzdHJpbmcsIHBhdGg6IHN0cmluZywgcXVlcnk6IEFycmF5fX1cbiAgICAgKi9cbiAgICBnZXRMb2NhdGlvbigpIHtcbiAgICAgICAgbGV0IGhyZWYgPSAnJztcbiAgICAgICAgbGV0IGxvYyA9IHtcbiAgICAgICAgICAgIGhyZWZcbiAgICAgICAgfTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxvYyA9IGxvY2F0aW9uIHx8IHtcbiAgICAgICAgICAgICAgICBocmVmXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBsb2MgPSB7XG4gICAgICAgICAgICAgICAgaHJlZlxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9sb2NhdGlvbiA9IGxvYztcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvY2F0aW9uO1xuICAgIH1cbn1cblxuXG5sZXQgY29udGV4dCA9IG5ldyBDb250ZXh0KCk7XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBjdHgge0NvbnRleHR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRDdHgoY3R4KSB7XG4gICAgY29udGV4dCA9IGN0eDtcbn1cblxuLyoqXG4gKlxuICogQHJldHVybiB7Q29udGV4dH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEN0eCgpIHtcbiAgICByZXR1cm4gY29udGV4dDtcbn1cbiIsIi8qKlxuICogIFByb2plY3Q6ICAgIG1pbmVyXG4gKiAgRmlsZTogICAgICAgZGV0ZWN0b3JcbiAqICBVc2VyOiAgICAgICB3aWxsaWFtIDx3eGwxMzQyMjQ3MDMzQGdtYWlsLmNvbT5cbiAqICBEYXRlOiAgICAgICAyMDE5LzcvMTlcbiAqICBUaW1lOiAgICAgICAyOjQ2IFBNXG4gKiAgRGVzY3JpcHRpb246XG4gKlxuICogIENoYW5nZSBEYXRlICAgICAgIEF1dGhvciAgICAgQ29udGVudFxuICogIHl5eXltbWRkICAgICAgICAgIG5hbWUgICAgICAgY29tbWVudFxuICpcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGlzQVAoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBteSA9PT0gJ29iamVjdCcgJiYgbXkuYXA7XG59XG5cbmZ1bmN0aW9uIGlzREQoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBteSA9PT0gJ29iamVjdCcgJiYgbXkuZGQ7XG59XG5cbmZ1bmN0aW9uIGlzV1goKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB3eCA9PT0gJ29iamVjdCc7XG59XG5cbmV4cG9ydCBjb25zdCBtaW5pYXBwID0ge1xuICAgIGlzQVAsXG4gICAgaXNERCxcbiAgICBpc1dYXG59O1xuIiwiLyoqXG4gKiAgUHJvamVjdDogICAgbWluZXJcbiAqICBGaWxlOiAgICAgICBtaW5lclxuICogIFVzZXI6ICAgICAgIHdpbGxpYW0gPHd4bDEzNDIyNDcwMzNAZ21haWwuY29tPlxuICogIERhdGU6ICAgICAgIDIwMTkvNy8yMVxuICogIFRpbWU6ICAgICAgIDY6NTUgUE1cbiAqICBEZXNjcmlwdGlvbjpcbiAqXG4gKiAgQ2hhbmdlIERhdGUgICAgICAgQXV0aG9yICAgICBDb250ZW50XG4gKiAgeXl5eW1tZGQgICAgICAgICAgbmFtZSAgICAgICBjb21tZW50XG4gKlxuICovXG5cblxuJ3VzZSBzdHJpY3QnO1xuXG5cbmltcG9ydCB7IGdldEN0eCB9IGZyb20gJy4vY29udGV4dCc7XG5pbXBvcnQgeyBFVkVOVFMsIEhUVFBfTUVUSE9EIH0gZnJvbSAnLi4vLi4vY29yZS9jb25zdGFudHMnXG5pbXBvcnQgeyByZWNvZ25pemUgfSBmcm9tICcuL2Fub255bWl0eSc7XG5pbXBvcnQgeyBnZXRRdWVyeSB9IGZyb20gJy4uLy4uL3V0aWxzL3VybCdcbmltcG9ydCB7IGdldE9wZW5JZCwgZ2V0VXNlcklkIH0gZnJvbSBcIi4vdXNlclwiO1xuXG5leHBvcnQgY2xhc3MgTWluZXIge1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGNmZyB7e3BhZ2VNYXBwZXI6IHt9LCBzaXRlOiBzdHJpbmd9fVxuICAgICAqIEV4YW1wbGU6XG4gICAgICoge1xuICAgICAqICAgICBwYWdlTWFwcGVyOiB7XG4gICAgICogICAgICAgICAncGFnZXMvaW5kZXgnOiB7XG4gICAgICogICAgICAgICAgICAgdXJsbWI6ICdhYmMnLFxuICAgICAqICAgICAgICAgICAgIG5hbWU6ICdIb21lJyxcbiAgICAgKiAgICAgICAgIH1cbiAgICAgKiAgICAgfSxcbiAgICAgKiAgICAgc2l0ZTogJ215U2l0ZUlkJ1xuICAgICAqIH1cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihjZmcgPSBudWxsKSB7XG4gICAgICAgIHRoaXMuX21ldGEgPSB7fTtcbiAgICAgICAgdGhpcy5fY2ZnID0gY2ZnO1xuICAgIH1cblxuICAgIHNldENmZyhjZmcpIHtcbiAgICAgICAgdGhpcy5fY2ZnID0gY2ZnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHByZXNlcnZlZCBhcmd1bWVudHNcbiAgICAgKiBAcmV0dXJuIHt7X3Rsczogc3RyaW5nLCBfdmVyOiBzdHJpbmd9fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2dldFByZUFyZ3MoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBfY2x0OiAnbWFwcF9taW5lcicsICAvLyBjb2xsZWN0b3JcbiAgICAgICAgICAgIF92ZXI6ICcwLjAuMScsICAvLyB2ZXJzaW9uXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgX2dldEVudkFyZ3MoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBfYXBwaWQ6ICdhcHBpZCcsXG4gICAgICAgICAgICBfb3M6IGdldEN0eCgpLmdldFN5c3RlbUluZm8oKS5vcyxcbiAgICAgICAgICAgIF9wZjogJ3d4JyxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEFyZ3MoYXJncykge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihhcmdzLCB0aGlzLl9nZXRFbnZBcmdzKCksIHRoaXMuX2dldFByZUFyZ3MoKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGV2ZW50SWRcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG4gICAgX2dldFJlcVN2ckJ5RXZ0SWQoZXZlbnRJZCkge1xuICAgICAgICByZXR1cm4gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MCc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGN1cnJlbnQgcGFnZS9yb3V0ZXNcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0Q3VyUGFnZSgpIHtcbiAgICAgICAgbGV0IGxvYyA9IGdldEN0eCgpLmdldExvY2F0aW9uKCk7XG4gICAgICAgIHJldHVybiBsb2MucGF0aDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBwYWdlXG4gICAgICogQHJldHVybiB7QXJyYXl9XG4gICAgICovXG4gICAgZ2V0UGFnZVVMTShwYWdlKSB7XG4gICAgICAgIGlmIChwYWdlIGluIHRoaXMuX2NmZy5wYWdlTWFwcGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gW3RoaXMuX2NmZy5zaXRlLCB0aGlzLl9jZmcucGFnZU1hcHBlcltwYWdlXVsndWxtYiddXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW3RoaXMuX2NmZy5zaXRlLCAnMCddO1xuICAgIH1cblxuICAgIHNldFBhZ2VVTE0odWxtYiwgbmFtZSA9ICcnKSB7XG4gICAgICAgIGxldCBwYWdlID0gdGhpcy5nZXRDdXJQYWdlKCk7XG4gICAgICAgIGlmIChwYWdlIGluIHRoaXMuX2NmZy5wYWdlTWFwcGVyKSB7XG4gICAgICAgICAgICB0aGlzLl9jZmcucGFnZU1hcHBlcltwYWdlXVsndWxtYiddID0gdWxtYjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2NmZy5wYWdlTWFwcGVyW3BhZ2VdID0ge1xuICAgICAgICAgICAgICAgIHVsbWIsXG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwYWdlQXBwZWFyKHBhZ2VDZmcpIHtcbiAgICAgICAgbGV0IGxvYyA9IGdldEN0eCgpLmdldExvY2F0aW9uKCk7XG4gICAgICAgIGlmICghdGhpcy5fbWV0YVsndWxtX2xzdCddKSB7XG4gICAgICAgICAgICB0aGlzLl9tZXRhWyd1bG1fbHN0J10gPSBnZXRRdWVyeShsb2MuaHJlZiwgJ3VsbScpIHx8ICcnO1xuICAgICAgICB9XG4gICAgICAgIGxldCBhcmdzID0gdGhpcy5fYXNzZW1ibGUoRVZFTlRTLlBBR0VfVklFVywgZXZlbnQsIHBhZ2VDZmcpO1xuICAgICAgICB0aGlzLl9taW5lKEVWRU5UUy5QQUdFX1ZJRVcsIGFyZ3MpO1xuICAgIH1cblxuICAgIGZpcmVFdmVudChldmVudCwgZXZlbnRBcmdzKSB7XG4gICAgICAgIGxldCBhcmdzID0gdGhpcy5fYXNzZW1ibGUoRVZFTlRTLlVTRVJfREVGSU5FLCBldmVudCwgZXZlbnRBcmdzKTtcbiAgICAgICAgdGhpcy5fbWluZShFVkVOVFMuVVNFUl9ERUZJTkUsIGFyZ3MpO1xuICAgIH1cblxuICAgIF9hc3NlbWJsZShldmVudElkLCBldmVudCwgZXZlbnRBcmdzKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogZXZlbnRJZCxcbiAgICAgICAgICAgIGFyZzE6IHRoaXMuZ2V0Q3VyUGFnZSgpLFxuICAgICAgICAgICAgYXJnMjogZXZlbnQsXG4gICAgICAgICAgICBhcmczOiAnJyxcbiAgICAgICAgICAgIGFyZ3M6IHtcbiAgICAgICAgICAgICAgICAuLi5ldmVudEFyZ3MsXG4gICAgICAgICAgICAgICAgdWxtX2NudDogdGhpcy5nZXRQYWdlVUxNKHRoaXMuZ2V0Q3VyUGFnZSgpKS5qb2luKCcuJykgKyAnMC4wJyxcbiAgICAgICAgICAgICAgICB1bG1fbHN0OiB0aGlzLl9tZXRhWyd1bG1fbHN0J10sXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFNlbmQgcmVxdWVzdFxuICAgICAqIEBwYXJhbSBldmVudElkXG4gICAgICogQHBhcmFtIGFyZ3NcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9taW5lKGV2ZW50SWQsIGFyZ3MpIHtcbiAgICAgICAgbGV0IHJlcSA9IGdldEN0eCgpLmdldFJlcXVlc3QoKTtcbiAgICAgICAgcmVjb2duaXplKClcbiAgICAgICAgICAgIC50aGVuKGFpZCA9PiB7XG4gICAgICAgICAgICAgICAgYXJnc1sncmVzZXJ2ZXMnXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgX3VpZDogZ2V0VXNlcklkKCksXG4gICAgICAgICAgICAgICAgICAgIF9vcGVuaWQ6IGdldE9wZW5JZCgpLFxuICAgICAgICAgICAgICAgICAgICBfYWlkOiBhaWQsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXEucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHRoaXMuX2dldFJlcVN2ckJ5RXZ0SWQoZXZlbnRJZCksXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IEhUVFBfTUVUSE9ELlBPU1QsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBhcmdzLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZmFpbChyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG59XG4iLCIvKipcbiAqICBQcm9qZWN0OiAgICBtaW5lclxuICogIEZpbGU6ICAgICAgIHVzZXJcbiAqICBVc2VyOiAgICAgICB3aWxsaWFtIDx3eGwxMzQyMjQ3MDMzQGdtYWlsLmNvbT5cbiAqICBEYXRlOiAgICAgICAyMDE5LzgvMTBcbiAqICBUaW1lOiAgICAgICAxMTozMCBQTVxuICogIERlc2NyaXB0aW9uOlxuICpcbiAqICBDaGFuZ2UgRGF0ZSAgICAgICBBdXRob3IgICAgIENvbnRlbnRcbiAqICB5eXl5bW1kZCAgICAgICAgICBuYW1lICAgICAgIGNvbW1lbnRcbiAqXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xubGV0IF91aWQgPSBudWxsO1xubGV0IF9vcGVuaWQgPSBudWxsO1xuXG4vKipcbiAqIFRPRE8gRmlyZSBhbiBldmVudCB0byByZXdyaXRlIGxvZ3NcbiAqIEBwYXJhbSB1c2VySWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldFVzZXJJZCh1c2VySWQpIHtcbiAgICBfdWlkID0gdXNlcklkO1xufVxuXG4vKipcbiAqIFRPRE8gRmlyZSBhbiBldmVudCB0byByZXdyaXRlIGxvZ3NcbiAqIEBwYXJhbSBvcGVuSWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldE9wZW5JZChvcGVuSWQpIHtcbiAgICBfb3BlbmlkID0gb3BlbklkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlcklkKCkge1xuICAgIHJldHVybiBfdWlkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3BlbklkKCkge1xuICAgIHJldHVybiBfb3BlbmlkO1xufVxuIiwiLyoqXG4gKiAgUHJvamVjdDogICAgbWluZXJcbiAqICBGaWxlOiAgICAgICBpbmRleFxuICogIFVzZXI6ICAgICAgIHdpbGxpYW0gPHd4bDEzNDIyNDcwMzNAZ21haWwuY29tPlxuICogIERhdGU6ICAgICAgIDIwMTkvOC8xMFxuICogIFRpbWU6ICAgICAgIDExOjI0IFBNXG4gKiAgRGVzY3JpcHRpb246XG4gKlxuICogIENoYW5nZSBEYXRlICAgICAgIEF1dGhvciAgICAgQ29udGVudFxuICogIHl5eXltbWRkICAgICAgICAgIG5hbWUgICAgICAgY29tbWVudFxuICpcbiAqL1xuXG5cbid1c2Ugc3RyaWN0JztcbmltcG9ydCB7IG1pbmlhcHAgfSBmcm9tIFwiLi9jb3JlL2RldGVjdG9yXCI7XG5leHBvcnQgeyBzZXRVc2VySWQsIHNldE9wZW5JZCB9IGZyb20gXCIuL2NvcmUvdXNlclwiO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBtaW5lcigpIHtcbiAgICBsZXQgbWluZXIgPSBudWxsO1xuICAgIGlmIChtaW5pYXBwLmlzV1goKSkge1xuICAgICAgICBsZXQgd3htYXBwID0gcmVxdWlyZSgnLi9wbGF0Zm9ybXMvd3gnKTtcbiAgICAgICAgbWluZXIgPSB3eG1hcHAubWluZXI7XG4gICAgICAgIHd4bWFwcC5pbnN0YWxsKCk7XG4gICAgfSBlbHNlIHtcblxuICAgIH1cbiAgICByZXR1cm4gbWluZXI7XG59XG5cbiIsIi8qKlxuICogIFByb2plY3Q6ICAgIG1pbmVyXG4gKiAgRmlsZTogICAgICAgY29udGV4dFxuICogIFVzZXI6ICAgICAgIHdpbGxpYW0gPHd4bDEzNDIyNDcwMzNAZ21haWwuY29tPlxuICogIERhdGU6ICAgICAgIDIwMTkvNy8yOFxuICogIFRpbWU6ICAgICAgIDk6MDQgUE1cbiAqICBEZXNjcmlwdGlvbjpcbiAqXG4gKiAgQ2hhbmdlIERhdGUgICAgICAgQXV0aG9yICAgICBDb250ZW50XG4gKiAgeXl5eW1tZGQgICAgICAgICAgbmFtZSAgICAgICBjb21tZW50XG4gKlxuICovXG5cblxuJ3VzZSBzdHJpY3QnO1xuaW1wb3J0IHsgQ29udGV4dCBhcyBCYXNlQ29udGV4dCwgc2V0Q3R4IH0gZnJvbSAnLi4vLi4vY29yZS9jb250ZXh0JztcbmltcG9ydCB7IFVOS05PVyB9IGZyb20gJy4uLy4uLy4uL2NvcmUvY29uc3RhbnRzJztcbmltcG9ydCB7IGJ1aWxkUXVlcnkgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvdXJsXCI7XG5cbmNsYXNzIENvbnRleHQgZXh0ZW5kcyBCYXNlQ29udGV4dCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX3N5cyA9IHtcbiAgICAgICAgICAgIG9zOiBVTktOT1csXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0UmVxdWVzdCgpIHtcbiAgICAgICAgcmV0dXJuIHd4LnJlcXVlc3Q7XG4gICAgfVxuXG4gICAgZ2V0U3RvcmFnZU1hbmFnZXIoKSB7XG4gICAgICAgIHJldHVybiB3eDtcbiAgICB9XG5cbiAgICBzZXRTeXN0ZW1JbmZvKHN5cykge1xuICAgICAgICB0aGlzLl9zeXMgPSBPYmplY3QuYXNzaWduKHRoaXMuX3N5cywgc3lzKTtcbiAgICB9XG5cbiAgICBnZXRTeXN0ZW1JbmZvKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3lzO1xuICAgIH1cblxuICAgIGdldExvY2F0aW9uKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAdmFyIHN0IHtBcnJheX1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgbGV0IHN0ID0gZ2V0Q3VycmVudFBhZ2VzKCk7XG4gICAgICAgICAgICBsZXQgY3VyUGFnZSA9IHN0W3N0Lmxlbmd0aC0xXTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcXVlcnk6IGN1clBhZ2Uub3B0aW9ucyB8fCB7fSxcbiAgICAgICAgICAgICAgICBocmVmOiBzdC5yb3V0ZSArICc/JyArIGJ1aWxkUXVlcnkoY3VyUGFnZS5vcHRpb25zIHx8IHt9KVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBxdWVyeToge30sXG4gICAgICAgICAgICAgICAgaHJlZjogJycsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmxldCBfY29udGV4dCA9IG51bGw7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGluc3RhbGwoKSB7XG4gICAgaWYgKCEgX2NvbnRleHQpIHtcbiAgICAgICAgX2NvbnRleHQgPSBuZXcgQ29udGV4dCgpO1xuICAgIH1cbiAgICBpZiAod3gpIHtcbiAgICAgICAgd3guZ2V0U3lzdGVtSW5mbyh7XG4gICAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICAgICAgICBfY29udGV4dC5zZXRTeXN0ZW1JbmZvKHtcbiAgICAgICAgICAgICAgICAgICAgb3M6IHJlcy5zeXN0ZW1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgc2V0Q3R4KF9jb250ZXh0KTtcbn1cblxuXG5cbiIsIi8qKlxuICogIFByb2plY3Q6ICAgIG1pbmVyXG4gKiAgRmlsZTogICAgICAgaW5kZXhcbiAqICBVc2VyOiAgICAgICB3aWxsaWFtIDx3eGwxMzQyMjQ3MDMzQGdtYWlsLmNvbT5cbiAqICBEYXRlOiAgICAgICAyMDE5LzcvMjhcbiAqICBUaW1lOiAgICAgICA1OjI5IFBNXG4gKiAgRGVzY3JpcHRpb246XG4gKlxuICogIENoYW5nZSBEYXRlICAgICAgIEF1dGhvciAgICAgQ29udGVudFxuICogIHl5eXltbWRkICAgICAgICAgIG5hbWUgICAgICAgY29tbWVudFxuICpcbiAqL1xuXG5cbid1c2Ugc3RyaWN0JztcbmltcG9ydCB7IE1pbmVyIH0gZnJvbSAnLi4vLi4vY29yZS9taW5lcidcbmltcG9ydCB7IGluc3RhbGwgYXMgd3hJbnN0YWxsZXIgfSBmcm9tIFwiLi9jb250ZXh0XCI7XG5cbmV4cG9ydCBjb25zdCBtaW5lciA9IG5ldyBNaW5lcigpO1xuZXhwb3J0IGNvbnN0IGluc3RhbGwgPSB3eEluc3RhbGxlcjtcbiIsIi8qKlxuICogIFByb2plY3Q6ICAgIG1pbmVyXG4gKiAgRmlsZTogICAgICAgdXJsXG4gKiAgVXNlcjogICAgICAgd2lsbGlhbSA8d3hsMTM0MjI0NzAzM0BnbWFpbC5jb20+XG4gKiAgRGF0ZTogICAgICAgMjAxOC8xMi8zMFxuICogIFRpbWU6ICAgICAgIDQ6MTAgUE1cbiAqICBEZXNjcmlwdGlvbjpcbiAqXG4gKiAgQ2hhbmdlIERhdGUgICAgICAgQXV0aG9yICAgICBDb250ZW50XG4gKiAgeXl5eW1tZGQgICAgICAgICAgbmFtZSAgICAgICBjb21tZW50XG4gKlxuICovXG5cbid1c2Ugc3RyaWN0JztcbmV4cG9ydCBmdW5jdGlvbiBidWlsZFF1ZXJ5KG9iaikge1xuICAgIGxldCBxdWVyeSA9ICcnO1xuICAgIGZvciAobGV0IGtleSBpbiBvYmopIHtcbiAgICAgICAgcXVlcnkgKz0gYCYke2tleX09JHtvYmpba2V5XX1gO1xuICAgIH1cbiAgICByZXR1cm4gcXVlcnkubGVuZ3RoID4gMD8gcXVlcnkuc3Vic3RyKDEpOiAnJztcbn1cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRRdWVyeSh1cmwsIG5hbWUpIHtcbiAgICBpZiAoISB1cmwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGxldCByZWcgPSBuZXcgUmVnRXhwKFwiKF58JilcIiArIG5hbWUgKyBcIj0oW14mXSopKCZ8JClcIiwgXCJpXCIpO1xuICAgIGxldCByID0gdXJsLnN1YnN0cigxKS5tYXRjaChyZWcpO1xuICAgIGlmIChyICE9IG51bGwpIHJldHVybiB1bmVzY2FwZShyWzJdKTtcbiAgICByZXR1cm4gbnVsbDtcbn0iXSwic291cmNlUm9vdCI6IiJ9