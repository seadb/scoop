const routes = require('express').Router();
const users = require('./user/user-routes');

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

routes.use('/users', users);

module.exports = routes;

