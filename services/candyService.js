const candies = require('../data/collections').candies;
const offers = require('../data/collections').offers;
const pinatas = require('../data/collections').pinatas;

const candyService = () => {

    const getAllCandy = () => candies;
    const getAllOffers = () => offers;
    const getAllPinatas = () => pinatas;

    const getCandyById = (id) => {
        const candy = candies.filter(c => c.id == id);
        if(candy.length === 0) { return -1; }
        return candy[0];
    }

    const getPinataById = (id) => {
        const pinata = pinatas.filter(p => p.id == id);
        if(pinata.length === 0) { return -1; }
        return pinata[0];
    }

    return {
        getAllCandy,
        getAllOffers,
        getAllPinatas,
        getPinataById,
        getCandyById
    };
}

module.exports = candyService();
