// content of index.js
const port = process.env.NODE_PORT
const host = process.env.NODE_HOST

const express = require('express');
const path = require('path');
const app      = express();

app.use('/public', express.static(__dirname + '/www'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/www/index.html'));
});

app.listen(port, host, () => {
    var address = 'http://' + host + ':' + port;
    console.log('App listening on ' + address);
});



