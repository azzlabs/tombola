const express = require('express');
const Config = require('./config.js');
const constants = new Config().config;

// Setup server Express
const app = express();
// Route statiche per gli assets
app.use('/public', express.static('public', { root: __dirname + '/../..' }));
app.use('/favicon.ico', express.static('public/favicon.ico', { root: __dirname + '/../..' }));

// Apre il server sulla porta scelta in config
app.listen(constants.port);
console.log(`Server listening on port ${constants.port}`);

// Setup di EJS
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Tutte le route
app.get('/', function(req, res) {
    res.render('template-main', { viewname: 'index', options: false, viewport: true });
});
app.get('/tabellone/:slug/', function(req, res) {
    res.render('template-main', { viewname: 'tabellone', options: { fe_opt: { room_slug: req.params.slug } }, viewport: true });
});
app.get('/cartelle-sel/:slug/', function(req, res) {
    const Rooms = new (require('./rooms.js'));
    let the_room = Rooms.getRoom(req.params.slug);
    res.render('template-main', { viewname: 'select_cartelle', options: { fe_opt: { room_slug: req.params.slug }, the_room: the_room }, viewport: true });
});
app.get('/cartelle/:slug/', function(req, res) {
    res.render('template-main', { viewname: 'show_cartelle', options: { fe_opt: { room_slug: req.params.slug } }, viewport: true });
});
app.get('/endpoint/:endpoint_name/', function(req, res) {
    const Endpoint = new (require('./endpoint.js'));
    Endpoint.dispatchEndpoint(res, req.params.endpoint_name, req.query);
});