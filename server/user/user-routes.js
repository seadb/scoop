var express = require('express');
var routes = express.Router();
var controller = require('./user-controller.js');

//var authentication = require('../authentication/authentication.controller.js');
//app.route('/users/:id').get(authentication.isAuthenticated, user.findUser);
//app.route('/users').get(authentication.isAuthenticated, user.findUsers);

routes.get('/', controller.all);
routes.get('/:id', controller.byID);
routes.get('/lookup/:id', controller.lookup);
routes.post('/create', controller.create);
routes.post('/update/:id', controller.update);

module.exports = routes;
