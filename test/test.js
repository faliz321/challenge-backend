'use strict';

let assert = require('assert');
let Tools = require('../api/tools/search-tools');

let _tools = new Tools();

describe('Calculate offer value', function () {
    it('should return results from offer value', function () {
        let price = 45000;
        let amount = 0.10000000;
        let offerPrice = 4500.00;
        assert.equal(_tools.CalculateOffer(price, amount), offerPrice);
    });
});

describe('Calculate Price Portion', function () {
    it('should return calculated partial price', function () {
        let search = 6000;
        let amount = 0.2;
        let result = 30000
        assert.equal(_tools.CalculatePricePortion(search, amount), result);
    });
});

describe('Order By Price', function () {    
    it('should return values in ascending order', function () {
        let values = [
            [10],
            [1],
            [5],
            [2],
            [7]
        ];
        let sortOption = 'asc';
        let sortedValues = _tools.OrderByPrice(values, sortOption);
        assert.equal(sortedValues[0] < sortedValues[1], true);
    });
    it('should return values in descending order', function () {
        let values = [
            [10],
            [12],
            [7],
            [9],
            [6]
        ];
        let sortOption = 'desc';
        let sortedValues = _tools.OrderByPrice(values, sortOption);
        assert.equal(sortedValues[0] > sortedValues[1], true);
    });
});