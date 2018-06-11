'use strict';

class Utils {   
    
    Find(quantitySearch, offers, sort) {
        let result = [];
        let totalSearch = quantitySearch;
        for (let i = 0; i < offers.length; i++) {
            let price = Number.parseFloat(offers[i][0]);
            let amount = Number.parseFloat(offers[i][1]);
            let offer = this.CalculateOffer(price, amount);

            if (this.SearchHigherThanOffer(totalSearch, offer)) {
                let newPrice = this.CalculatePricePortion(totalSearch, amount);
                let tempPartialResult = [newPrice, amount];
                result.push(tempPartialResult);
                break;
            }

            let tempResult = [price, amount];
            totalSearch -= offer;
            result.push(tempResult);
        }
        result = this.OrderByPrice(result, sort);

        return result;
    };

    Comparator(a, b) {
        return Number.parseFloat(a[0]) > Number.parseFloat(b[0]) ? 1 : -1;
    };

    CalculateOffer(price, amount) {
        return price * amount;
    }

    SearchHigherThanOffer(search, offer) {
        return offer > search;
    }

    CalculatePricePortion(search, amount) {
        return search / amount;
    }

    SplitParameters(values) {
        return values !== undefined ? values.split(',') : values;
    };

    OrderByPrice(values, sortOption) {
        if (sortOption !== undefined) {
            if (sortOption === 'asc')
                return values.sort(this.Comparator);
            else
                return values.sort(this.Comparator).reverse();
        }
        return values;
    };


    SearchOffers(quantitySearch, offers, sort) {
        let result = [];

        if(offers === undefined || offers === []) return "There were no offers found for this type";

        for (let i = 0; i < quantitySearch.length; i++) {
            let localAmount = quantitySearch[i];
            let tempAmount = {
                [localAmount]: this.Find(localAmount, offers, sort)
            }
            result.push(tempAmount);
        }

        return result;
    }
}

module.exports = Utils;