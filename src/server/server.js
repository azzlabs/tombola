const express = require('express');
const Config = require('./config.js');
const Endpoint = require('./endpoint.js');
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
    res.render('template-main', { viewname: 'index', options: false, viewport: true });
});
app.get('/cartelle-sel', function(req, res) {
    res.render('template-main', { viewname: 'show_cartelle', options: { card: '' }, viewport: true });
});

app.get('/endpoint/:endpoint_name/', function(req, res) {
    const ep = new Endpoint();
    ep.dispatchEndpoint(res, req.params.endpoint_name, req.query);
});