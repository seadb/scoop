const express = require('express');
const routes = express.Router();
const controller = require('./auth-controller.js');
const authenticate = require('../middleware/auth');

routes.post('/login', controller.login);
routes.post('/logout', controller.logout);
routes.post('/register', controller.register);
routes.post('/verify', authenticate, controller.verify);

module.exports = routes;
