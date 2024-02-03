// DEPENDENCIES
const express = require('express');
const render = require('./render.js');

// CONFIGURATION
require('dotenv').config();
const PORT = process.env.PORT;
const app = express();

// ROUTES
app.get('/', (req, res) => {
    res.send(render('Home'));
});

// Breads
const breadsController = require('./controllers/breads_controller.js');
app.use('/breads', breadsController);

// LISTEN
app.listen(PORT, () => {
    console.log('listening on port', PORT);
});
