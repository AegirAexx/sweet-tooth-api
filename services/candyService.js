const candies = require('../data/collections').candies;
const offers = require('../data/collections').offers;
const pinatas = require('../data/collections').pinatas;

const candyService = () => {

    const getAllCandy = () => candies;

    const getCandyById = (id) => {
        const candy = candies.filter(c => c.id == id);
        if(candy.length === 0) { return -1; }
        return candy[0];
    }

    return {
        getAllCandy,
        getCandyById
    };
}

module.exports = candyService();
