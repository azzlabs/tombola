const express = require('express');
const Config = require('./config.js');
const constants = new Config().config;

// Setup an Express server
const app = express();
app.use('/public', express.static('public', { root: __dirname + '/../..' }));
app.use('/favicon.ico', express.static('public/favicon.ico', { root: __dirname + '/../..' }));

// Listen on port
const port = constants.port;

const server = app.listen(port);
console.log(`Server listening on port ${port}`);

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
  res.render('template-main', { viewname: 'index', options: false, viewport: true });
});