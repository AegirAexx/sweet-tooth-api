const express = require('express');
const app = express();
const router = express.Router();
const port = 3000;
const candyService = require('./services/candyService');
const bodyParser = require('body-parser');

router.get('/candies', (req, res) => {
    return res.json(candyService.getAllCandy());
});

router.post('/candies', (req, res) => {
    const { body } = req;
    const candy = candyService.createCandy(body);
    if(candy === -1) { return res.status(412).send("Precondition Failed"); }
    return res.status(201).json(candy);
});

router.get('/candies/:id', (req, res) => {
    const { id } = req.params;
    const candy = candyService.getCandyById(id);
    if (candy === -1) { return res.status(404).send(); }
    return res.json(candy);
});

router.get('/offers', (req, res) => {
    return res.json(candyService.getAllOffers());
});

router.get('/pinatas', (req, res) => {
    return res.json(candyService.getAllPinatas());
});

router.get('/pinatas/:id', (req, res) => {
    const { id } = req.params;
    const pinata = candyService.getPinataById(id);
    if (pinata === -1) { return res.status(404).send(); }
    return res.json(pinata);
});

router.post('/pinata', (req, res) => {
    const { body } = req;
    const pinata = candyService.createPinata(body);
    if(pinata === -1) { return res.status(412).send("Precondition Failed"); }
    return res.status(201).json(pinata);
});

router.get('/pinatas/:id/hit', (req, res) => {
    // TODO: implement logic.
});

app.use(bodyParser.json());

app.use('/api', router);

app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
});
