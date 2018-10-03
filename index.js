const express = require('express');
const app = express();
const router = express.Router();
const port = 3000;
// const sweetToothService = require('./services/sweetToothService');
const bodyParser = require('body-parser');

// Get all candy
router.get('/candies', (req, res) => {
    const strObj = { "id": 1, "name": "All the candies!"};
    return res.json(strObj);
});

// Create new candy
router.post('/candies', (req, res) => {
    // const { body } = req;
    // ufoService.createUfo(body);
    // return res.status(201).send();
});

// Get a candy with a certain ID
router.get('/candies/:id', (req, res) => {
    // const { id } = req.params;
    // const ufo = ufoService.getUfoById(id);
    // if (ufo === -1) { return res.status(404).send(); }
    // return res.json(ufo);
});

// Get all offers
router.get('/offers', (req, res) => {
    // const strObj = { "id": 1, "name": "All the candies!"};
    // return res.json(strObj);
});

// Get all pinatas
router.get('/pinatas', (req, res) => {
    // const strObj = { "id": 1, "name": "All the candies!"};
    // return res.json(strObj);
});

// Get a pinata with a certain ID
router.get('/pinatas/:id', (req, res) => {
    // const { id } = req.params;
    // const ufo = ufoService.getUfoById(id);
    // if (ufo === -1) { return res.status(404).send(); }
    // return res.json(ufo);
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
