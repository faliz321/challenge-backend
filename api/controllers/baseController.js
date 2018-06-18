'use strict';

let Data = require('../init/json-init');
let Tools = require('../tools/search-tools.js');

class BaseController {
    get data() {
        return new Data();
    }

    get tools() {
        return new Tools();
    }
}

module.exports = BaseController;