// Small Assignment 3 | SC-T-514-VEFT @ Reykjavik University
// Aegir Tomasson @aegir15

const candies = require('../data/collections').candies;
const offers = require('../data/collections').offers;
const pinatas = require('../data/collections').pinatas;

// The service/logic layer - Candy Services!
const candyService = () => {

    const getAllCandy = () => candies;

    const getAllOffers = () => {
        let candyIndexes = new Array();
        let offerValues = new Array();
        const expandedOffers = new Array();
        let tempObject = new Object();
        offers.forEach(i => { candyIndexes.push(i.candies.toString()); });
        offers.forEach(v => { offerValues.push(Object.values(v)); });
        for (let i = 0; i < offerValues.length; i++) {
            tempObject = {
                id: offerValues[i][0],
                name: offerValues[i][1],
                candies: []
            }
            const candyIds = candyIndexes[i].split(',');
            for (let j = 0; j < candyIds.length; j++) {
                tempObject.candies.push(getCandyById(parseInt(candyIds[j])));
            }
            expandedOffers.push(tempObject);
            tempObject = null;
        }
        candyIndexes = null;
        offerValues = null;
        return expandedOffers;
    }

    const getAllPinatas = () => {
        const noSurprise = new Array();
        pinatas.forEach(pinata => {
            let tempPinata = new Object({
                id: parseInt(pinata.id),
                name: pinata.name,
                maximumHits: parseInt(pinata.maximumHits),
                currentHits: parseInt(pinata.currentHits),
            });
            noSurprise.push(tempPinata);
            tempPinata = null;
        });
        return noSurprise;
    }

    const getCandyById = (id) => {
        const candy = candies.filter(c => c.id == id);
        if(candy.length === 0) { return false; }
        return candy[0];
    }

    const getPinataById = (id) => {
        const pinata = pinatas.filter(p => p.id == id);
        if(pinata.length === 0) { return false; }
        return pinata[0];
    }

    const createCandy = (candy) => {
        let highestId = 0;
        candies.forEach(c => { if (c.id > highestId) { highestId = c.id; }});
        const candyValues = Object.keys(candy).map(key => candy[key]);
        if(candyValues.length < 2){ return false; }
        const arrangedCandy = { 
            id: highestId + 1, 
            name: candyValues[0], 
            description: candyValues[1] 
        };
        candies.push(arrangedCandy);
        return arrangedCandy;
    }

    const createPinata = (pinata) => {
        let highestId = 0;
        pinata.forEach(c => { if (p.id > highestId) { highestId = p.id; }});
        const pinataValues = Object.keys(pinata).map(key => pinata[key]);
        if(pinataValues.length < 3){ return false; }
        const arrangedPinata = { 
            id: highestId + 1, 
            name: pinataValues[0], 
            surprise: pinataValues[1], 
            maximumHits: pinataValues[2], 
            currentHits: 0 
        };
        pinatas.push(arrangedPinata);
        return arrangedPinata;
    }

    const hitPinataById = (id) => {
        const pinata = getPinataById(id);
        if(pinata.currentHits >= pinata.maximumHits) { return -1; }
        pinata.currentHits += 1;
        if(pinata.currentHits == pinata.maximumHits) { return 1; }
        return 0;
    }

    return {
        getAllCandy,
        getAllOffers,
        getAllPinatas,
        getPinataById,
        getCandyById,
        createCandy,
        createPinata,
        hitPinataById
    };
}

module.exports = candyService();
