var express = require('express');
var routes = express.Router();
var user = require('./user-controller.js');

//var authentication = require('../authentication/authentication.controller.js');
//app.route('/users/:id').get(authentication.isAuthenticated, user.findUser);
//app.route('/users').get(authentication.isAuthenticated, user.findUsers);

routes.get('/', user.getUsers);
routes.get('/:id', user.getUserById);

module.exports = routes;
