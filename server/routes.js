const routes = require('express').Router();
const users = require('./user/user-routes');
const user = require('./user/user-model');

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

routes.use('/api/users', users);

module.exports = routes;

