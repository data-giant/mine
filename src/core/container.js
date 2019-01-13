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
    }

    register(name, inst) {
        this._store[name] = inst;
    }

    resolve(name) {
        if (name in this._store) {
            return this._store[name];
        }
        return null;
    }
}

let container = new Container();

/**
 * Exposure to different global objects, according to the TERMINAL.
 */
if (TERMINALS == TERMINALS.H5) {
    window.register = container.register;
    window.resolve = container.resolve;
}

export { container };

