const express = require('express');
const app = express();
const router = express.Router();
const port = 3000;
const candyService = require('./services/candyService');
const bodyParser = require('body-parser');

// Get all candy
router.get('/candies', (req, res) => {
    return res.json(candyService.getAllCandy());
});

// Create new candy
router.post('/candies', (req, res) => {
    // const { body } = req;
    // ufoService.createUfo(body);
    // return res.status(201).send();
});

// Get a candy with a certain ID
router.get('/candies/:id', (req, res) => {
    const { id } = req.params;
    const candy = candyService.getCandyById(id);
    if (candy === -1) { return res.status(404).send(); }
    return res.json(candy);
});

// Get all offers
router.get('/offers', (req, res) => {
    return res.json(candyService.getAllOffers());
});

// Get all pinatas
router.get('/pinatas', (req, res) => {
    return res.json(candyService.getAllPinatas());
});

// Get a pinata with a certain ID
router.get('/pinatas/:id', (req, res) => {
    const { id } = req.params;
    const pinata = candyService.getPinataById(id);
    if (pinata === -1) { return res.status(404).send(); }
    return res.json(pinata);
});

// Create a pinata
router.post('/pinata', (req, res) => {
    // const { body } = req;
    // ufoService.createUfo(body);
    // return res.status(201).send();
});

// Hit a certain pinata
router.get('/pinatas/:id/hit', (req, res) => {
    // TODO: implement logic.
});

app.use('/api', router);

app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
});
