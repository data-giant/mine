/**
 *  Project:    miner
 *  File:       browser
 *  User:       william <wxl1342247033@gmail.com>
 *  Date:       2018/11/20
 *  Time:       3:26 PM
 *  Description:
 *
 *  Change Date       Author     Content
 *  yyyymmdd          name       comment
 *
 */

'use strict';
import {getQuery} from '../utils/url'


let _os = {
    ...detectOS()
};

let _screen = {
    width: screen? screen.width: null,
    height: screen? screen.height: null,
};
let _browser = {
    ua: navigator.userAgent,
    ...detectBrowser()
};

function detectOS() {
    let userAgent = navigator.userAgent.toLowerCase();
    let name = 'Unknown';
    let version = "Unknown";
    if(userAgent.indexOf("win") > -1) {
        name = "Windows";
        if(userAgent.indexOf("windows nt 5.0") > -1) {
            version = "Windows 2000";
        } else if(userAgent.indexOf("windows nt 5.1") > -1 || userAgent.indexOf("windows nt 5.2") > -1) {
            version = "Windows XP";
        } else if(userAgent.indexOf("windows nt 6.0") > -1) {
            version = "Windows Vista";
        } else if(userAgent.indexOf("windows nt 6.1") > -1 || userAgent.indexOf("windows 7") > -1) {
            version = "Windows 7";
        } else if(userAgent.indexOf("windows nt 6.2") > -1 || userAgent.indexOf("windows 8") > -1) {
            version = "Windows 8";
        } else if(userAgent.indexOf("windows nt 6.3") > -1) {
            version = "Windows 8.1";
        } else if(userAgent.indexOf("windows nt 6.2") > -1 || userAgent.indexOf("windows nt 10.0") > -1) {
            version = "Windows 10";
        } else {
            version = "Unknown";
        }
    } else if(userAgent.indexOf("iphone") > -1) {
        name = "Iphone";
    } else if(userAgent.indexOf("mac") > -1) {
        name = "Mac";
    } else if(userAgent.indexOf("x11") > -1 || userAgent.indexOf("unix") > -1 || userAgent.indexOf("sunname") > -1 || userAgent.indexOf("bsd") > -1) {
        name = "Unix";
    } else if(userAgent.indexOf("linux") > -1) {
        if(userAgent.indexOf("android") > -1) {
            name = "Android"
        } else {
            name = "Linux";
        }

    } else {
        name = "Unknown";
    }
    let lang = navigator.language||navigator.userLanguage;
    return {
        os: name,
        over: version,
        lang
    };
}

function detectBrowser(){
    let Browser = (function(window) {
        let document = window.document,
            navigator = window.navigator,
            agent = navigator.userAgent.toLowerCase(),
            //IE8+支持.返回浏览器渲染当前文档所用的模式
            //IE6,IE7:undefined.IE8:8(兼容模式返回7).IE9:9(兼容模式返回7||8)
            //IE10:10(兼容模式7||8||9)
            IEMode = document.documentMode,
            //chorme
            chrome = window.chrome || false,
            System = {
                //user-agent
                agent: agent,
                //是否为IE
                isIE: /trident/.test(agent),
                //Gecko内核
                isGecko: agent.indexOf("gecko") > 0 && agent.indexOf("like gecko") < 0,
                //webkit内核
                isWebkit: agent.indexOf("webkit") > 0,
                //是否为标准模式
                isStrict: document.compatMode === "CSS1Compat",
                //是否支持subtitle
                supportSubTitle: function() {
                    return "track" in document.createElement("track");
                },
                //是否支持scoped
                supportScope: function() {
                    return "scoped" in document.createElement("style");
                },

                //获取IE的版本号
                ieVersion: function() {
                    var rMsie  = /(msie\s|trident.*rv:)([\w.]+)/;
                    var ma = window.navigator.userAgent.toLowerCase()
                    var  match  = rMsie.exec(ma);
                    try {
                        return match[2];
                    } catch (e) {
//									console.log("error");
                        return IEMode;
                    }
                },
                //Opera版本号
                operaVersion: function() {
                    try {
                        if (window.opera) {
                            return agent.match(/opera.([\d.]+)/)[1];
                        } else if (agent.indexOf("opr") > 0) {
                            return agent.match(/opr\/([\d.]+)/)[1];
                        }
                    } catch (e) {
//									console.log("error");
                        return 0;
                    }
                }
            };

        try {
            //浏览器类型(IE、Opera、Chrome、Safari、Firefox)
            System.type = System.isIE ? "IE" :
                window.opera || (agent.indexOf("opr") > 0) ? "Opera" :
                    (agent.indexOf("chrome") > 0) ? "Chrome" :
                        //safari也提供了专门的判定方式
                        window.openDatabase ? "Safari" :
                            (agent.indexOf("firefox") > 0) ? "Firefox" :
                                'unknow';

            //版本号
            System.version = (System.type === "IE") ? System.ieVersion() :
                (System.type === "Firefox") ? agent.match(/firefox\/([\d.]+)/)[1] :
                    (System.type === "Chrome") ? agent.match(/chrome\/([\d.]+)/)[1] :
                        (System.type === "Opera") ? System.operaVersion() :
                            (System.type === "Safari") ? agent.match(/version\/([\d.]+)/)[1] :
                                "0";

            //浏览器外壳
            System.shell = function() {

                if (agent.indexOf("edge") > 0) {
                    System.version = agent.match(/edge\/([\d.]+)/)[1] || System.version;
                    return "edge浏览器";
                }
                //遨游浏览器
                if (agent.indexOf("maxthon") > 0) {
                    System.version = agent.match(/maxthon\/([\d.]+)/)[1] || System.version;
                    return "傲游浏览器";
                }
                //QQ浏览器
                if (agent.indexOf("qqbrowser") > 0) {
                    System.version = agent.match(/qqbrowser\/([\d.]+)/)[1] || System.version;
                    return "QQ浏览器";
                }

                //搜狗浏览器
                if (agent.indexOf("se 2.x") > 0) {
                    return '搜狗浏览器';
                }

                //Chrome:也可以使用window.chrome && window.chrome.webstore判断
                if (chrome && System.type !== "Opera") {
                    var external = window.external,
                        clientInfo = window.clientInformation,
                        //客户端语言:zh-cn,zh.360下面会返回undefined
                        clientLanguage = clientInfo.languages;

                    //猎豹浏览器:或者agent.indexOf("lbbrowser")>0
                    if (external && 'LiebaoGetVersion' in external) {
                        return '猎豹浏览器';
                    }
                    //百度浏览器
                    if (agent.indexOf("bidubrowser") > 0) {
                        System.version = agent.match(/bidubrowser\/([\d.]+)/)[1] ||
                            agent.match(/chrome\/([\d.]+)/)[1];
                        return "百度浏览器";
                    }
                    //360极速浏览器和360安全浏览器
                    if (System.supportSubTitle() && typeof clientLanguage === "undefined") {
                        //object.key()返回一个数组.包含可枚举属性和方法名称
                        var storeKeyLen = Object.keys(chrome.webstore).length,
                            v8Locale = "v8Locale" in window;
                        return storeKeyLen > 1 ? '360极速浏览器' : '360安全浏览器';
                    }
                    return "Chrome";
                }
                return System.type;
            };

            //浏览器名称(如果是壳浏览器,则返回壳名称)
            System.name = System.shell();
            //对版本号进行过滤过处理
            //	System.version = System.versionFilter(System.version);

        } catch (e) {
//						console.log(e.message);
        }
        return System;

    })(window);
    if (Browser.name == undefined || Browser.name=="") {
        Browser.name = "Unknown";
        Browser.version = "Unknown";
    }else if(Browser.version == undefined){
        Browser.version = "Unknown";
    }
    console.log(Browser);
    return {
        brs: Browser.type,      // browser
        bver: Browser.version,  // browser version
        title: window.document.title,
    };
}

class Collector {
    constructor() {
        let ulmUrl = getQuery(window.location.search, 'ulm');
        let ulmPre = getQuery(window.document.referrer, 'ulm');
        this._info =  {
            ..._os,
            ..._browser,
            scr: `${_screen.width}x${_screen.height}`,
            pre: window.document.referrer,
            'ulm-url': ulmUrl? ulmUrl: '',
            'ulm-pre': ulmPre? ulmPre: '',
        };
    }

    collect() {
        return this._info;
    }

}


export default Collector

