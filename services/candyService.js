const candies = require('../data/collections').candies;
const offers = require('../data/collections').offers;
const pinatas = require('../data/collections').pinatas;

const candyService = () => {

    const getAllCandy = () => candies;
    const getAllOffers = () => {
        return offers;
    }

    const getAllPinatas = () => {
        const noSurprise = [];
        pinatas.forEach(function(pinata){
            const tempPinata = {};
            tempPinata.id = pinata.id;
            tempPinata.name = pinata.name;
            tempPinata.maximumHits = pinata.maximumHits;
            tempPinata.currentHits = pinata.currentHits;
            noSurprise.push(tempPinata);
        });
        return noSurprise;
    }

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
        const candyValues = Object.keys(candy).map(key => candy[key]);
        if(candyValues.length >= 2){
            const arrangedCandy = { id: highestId + 1, name: candyValues[0], description: candyValues[1] };
            candies.push(arrangedCandy);
            return arrangedCandy;
        }
        return -1;
    }

    const createPinata = (pinata) => {
        let highestId = 0;
        pinata.forEach(c => { if (p.id > highestId) { highestId = p.id; }});
        const pinataValues = Object.keys(pinata).map(key => pinata[key]);
        if(pinataValues >= 3){
            const arrangedPinata = { id: highestId + 1, name: pinataValues[0], surprise: pinataValues[1], maximumHits: pinataValues[2], currentHits: 0 };
            pinatas.push(arrangedPinata);
            return arrangedPinata;
        }
        return -1;
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
