'use strict';

let BaseRoute = require('./baseRoute.js');

class OfferRoute extends BaseRoute {
    init(app) {
        app.get('/offer/:quantity/:sort?', (req, res) => {
            super.controllers.offer.search(req, res);
        });
    }
}

module.exports = new OfferRoute();