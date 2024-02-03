const express = require('express');
const breads = express.Router();
const Bread = require('../models/bread.js');
const render = require('../render.js');

// INDEX
breads.get('/', (req, res) => {
    res.send(render('Index', { breads: Bread }));
});

// SHOW
breads.get('/:arrayIndex', (req, res) => {
    res.send(render('Detail', { bread: Bread[req.params.arrayIndex] }));
});

module.exports = breads;
