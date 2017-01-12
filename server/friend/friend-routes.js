const express = require('express');
const routes = express.Router();
const controller = require('./friend-controller');
const authenticate = require('../middleware/auth');

routes.get('/', authenticate, controller.all);
routes.post('/add/:id', authenticate, controller.add);
//routes.post('/delete/:id', controller.delete);
//routes.get('/reciprocal/:id', controller.reciprocal);

module.exports = routes;
