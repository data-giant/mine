/**
 *  Project:    miner
 *  File:       container
 *  User:       william <wxl1342247033@gmail.com>
 *  Date:       2019/1/12
 *  Time:       7:56 PM
 *  Description:
 *
 *  Change Date       Author     Content
 *  yyyymmdd          name       comment
 *
 */


'use strict';
import {TERMINALS} from "./constants";

class Container {
    constructor() {
        this._store = {};
        this._protected = new Set(['miner']);
    }

    register(name, inst) {
        if (this._store[name] && this._protected.has(name)) {
            return ;
        }
        this._store[name] = inst;
    }

    resolve(name) {
        return this._store[name];
    }
}

let container = new Container();

/**
 * Exposure to different global objects, according to the TERMINAL.
 */
let global = null;
if (TERMINAL == TERMINALS.H5) {
    global = window;
}

global.register = (n, i) => container.register(n, i);
global.resolve = (n) => container.resolve(n);

export { container };

