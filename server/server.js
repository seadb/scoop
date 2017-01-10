var express = require('express');
var config = require('./config').server;
var middleware = require('./middleware/express');
var routes =  require('./routes');

var app      = express();
app = middleware(app);

app.use('/', routes);

app.listen(config.port, config.host, () => {
    var address = 'http://' + config.host + ':' + config.port;
    console.log('App listening on ' + address );
});

