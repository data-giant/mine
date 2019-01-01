/**
 *  Project:    miner
 *  File:       config
 *  User:       william <wxl1342247033@gmail.com>
 *  Date:       2018/10/17
 *  Time:       10:51 PM
 *  Description:
 *
 *  Change Date       Author     Content
 *  yyyymmdd          name       comment
 *
 */

'use strict';
class MetaConfig {
    constructor() {
        this._store = {};
        this.refresh();
    }
    refresh() {
        let nodes = window.document.querySelectorAll('meta[name^="miner-"]');
        console.log(nodes);
        for (let node of nodes) {
            console.log(node.getAttribute('name'));
            console.log(node.getAttribute('value'));
            if (node.getAttribute('value') && node.getAttribute('value').length > 0) {
                this.set(node.getAttribute('name'), node.getAttribute('value'));
            }
        }
    }


    get(key) {
        if (key in this._store) {
            return this._store[key];
        }
        return null;
    }

    set(key, value) {
        this._store[key] = value;
    }
}

export default MetaConfig;


