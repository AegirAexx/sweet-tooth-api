// Small Assignment 3 | SC-T-514-VEFT @ Reykjavik University
// Aegir Tomasson @aegir15

const express = require('express');
const app = express();
const router = express.Router();
const port = 3000;
const candyService = require('./services/candyService');
const bodyParser = require('body-parser');

// Returns all the candy
router.get('/candies', (req, res) => {
    return res.json(candyService.getAllCandy());
});

// Add candy to the collection
router.post('/candies', (req, res) => {
    const { body } = req;
    const candy = candyService.createCandy(body);
    if(!candy) { return res.status(412).json(body); }
    return res.status(201).json(candy);
});

// Returns one piece of candy from the collection
router.get('/candies/:id', (req, res) => {
    const { id } = req.params;
    const candy = candyService.getCandyById(id);
    if (!candy) { return res.status(404).send(); }
    return res.json(candy);
});

// Returns all the special offers from the collection
router.get('/offers', (req, res) => {
    return res.json(candyService.getAllOffers());
});

// Returns all the pinatas from the collection
router.get('/pinatas', (req, res) => {
    return res.json(candyService.getAllPinatas());
});

// Returns an individual pinata from the collection
router.get('/pinatas/:id', (req, res) => {
    const { id } = req.params;
    const pinata = candyService.getPinataById(id);
    if (!pinata) { return res.status(404).send(); }
    return res.json(pinata);
});

// Adds a pinata to the collection
router.post('/pinata', (req, res) => {
    const { body } = req;
    const pinata = candyService.createPinata(body);
    if(!pinata) { return res.status(412).json(body); }
    return res.status(201).json(pinata);
});

// Returns whether you've busted the pinata or not.
router.get('/pinatas/:id/hit', (req, res) => {
    const { id } = req.params;
    const health = candyService.hitPinataById(id);
    if(health === 1) { 
        const message = candyService.getPinataById(id);
        return res.status(200).send(message.surprise); 
    }
    if(health === -1) { return res.status(423).send(); }
    return res.status(204).send();
});

app.use(bodyParser.json());

app.use('/api', router);

app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
});
