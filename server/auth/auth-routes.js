var express = require('express');
var routes = express.Router();
var controller = require('./auth-controller.js');

routes.post('/login', controller.login);
routes.post('/logout', controller.logout);
routes.post('/register', controller.register);

module.exports = routes;
