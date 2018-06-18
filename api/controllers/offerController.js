'use strict';

let BaseController = require('./baseController.js');

class OfferController extends BaseController {
    search(req, res) {

        let quantitySearch = super.tools.SplitParameters(req.params.quantity);

        let sortOption = req.params.sort;

        let bids = super.tools.SearchOffers(quantitySearch, super.data.orderBook["bids"], sortOption);
        let asks = super.tools.SearchOffers(quantitySearch, super.data.orderBook["asks"], sortOption);

        let list = {
            asks: asks,
            bids: bids
        };

        res.end(JSON.stringify(list, null, 4));
    }
}

module.exports = OfferController;