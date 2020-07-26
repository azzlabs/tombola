const express = require('express');
const Config = require('./config.js');
const Cartelle = require('./cartelle.js');
const constants = new Config().config;

// Setup an Express server
const app = express();
app.use('/public', express.static('public', { root: __dirname + '/../..' }));
app.use('/favicon.ico', express.static('public/favicon.ico', { root: __dirname + '/../..' }));

// Listen on port
app.listen(constants.port);
console.log(`Server listening on port ${constants.port}`);

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
    cards = new Cartelle();
    res.render('template-main', { viewname: 'index', options: { card: cards.generaCartella() }, viewport: true });
});