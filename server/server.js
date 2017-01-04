var express = require('express');
var config = require('./config/config');
var configExpress = require('./config/express');
var routes =  require('./routes');

var app      = express();
app = configExpress(app);

app.use('/', routes);

app.listen(3000, function() {
    console.log('App listening on http://' + config.server.host+':' +
        config.server.port);
});

