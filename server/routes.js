const routes = require('express').Router();
const users  = require('./user/user-routes');
const auth   = require('./auth/auth-routes');

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

routes.use('/api/users', users);
routes.use('/api/auth', auth);

module.exports = routes;

