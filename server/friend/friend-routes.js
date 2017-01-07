var express = require('express');
var routes = express.Router();
var controller = require('./friend-controller.js');

routes.post('/', controller.getAll);
routes.post('/:id/add', controller.add);
routes.post('/:id/delete', controller.delete);
routes.post('/reciprocal', controller.reciprocal);

module.exports = routes;
