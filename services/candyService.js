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

    const createCandy = (candy) => {
        let highestId = 0;
        candies.forEach(c => { if (c.id > highestId) { highestId = c.id; }});
        candy.id = highestId + 1;
        candies.push(candy);
    }

    const createPinata = (pinata) => {
        let highestId = 0;
        pinata.forEach(c => { if (p.id > highestId) { highestId = p.id; }});
        pinata.id = highestId + 1;
        pinatas.push(pinata);
    }

    return {
        getAllCandy,
        getAllOffers,
        getAllPinatas,
        getPinataById,
        getCandyById,
        createCandy,
        createPinata
    };
}

module.exports = candyService();
