const routes  = require('express').Router();
const users   = require('./user/user-routes');
const auth    = require('./auth/auth-routes');
const friends = require('./friend/friend-routes');
const controller = require('./friend/friend-controller');

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

routes.use('/api/users', users);
routes.use('/api/auth', auth);
routes.use('/api/friends', friends);
routes.use('/api/followers/list', controller.followers);

module.exports = routes;

