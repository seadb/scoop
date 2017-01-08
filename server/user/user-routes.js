var express = require('express');
var routes = express.Router();
var controller = require('./user-controller.js');

//var authentication = require('../authentication/authentication.controller.js');
//app.route('/users/:id').get(authentication.isAuthenticated, user.findUser);
//app.route('/users').get(authentication.isAuthenticated, user.findUsers);

routes.get('/', controller.getAll);
routes.get('/:id', controller.getOneById);
routes.post('/create', controller.create);

module.exports = routes;