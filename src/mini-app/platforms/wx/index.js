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

'use strict';
import { install } from './context'
import { Miner } from '../../core/miner'

install();

export const miner = new Miner();
