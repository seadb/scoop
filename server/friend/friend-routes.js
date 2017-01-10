const express = require('express');
const routes = express.Router();
const controller = require('./friend-controller');
const isAuthenticated = require('../middleware/auth');

routes.get('/:id', isAuthenticated, controller.all);
routes.post('/add/:id', controller.add);
routes.post('/delete/:id', controller.delete);
routes.get('/reciprocal/:id', controller.reciprocal);

module.exports = routes;
