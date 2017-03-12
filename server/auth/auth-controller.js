const bcrypt = require('bcrypt')
const jwt    = require('jsonwebtoken');
const userModel  = require('../user/user-model.js')
const Users = new userModel();
const config = require('../config').token

const login = (req, res, next) => {
  const userPromise = Users.one(req.body.email);
  const compare = userPromise.then((user) => {
    return bcrypt.compare(req.body.password, user.password);
  });
  Promise
    .all([userPromise, compare])
    .then((results) => {
      const user = results[0];
      const bool = results[1];
      if (!bool) {
        res.status(401).json({
          success: false,
          message: 'Authentication failed. Wrong password.'
        });
      }
      else {
        const token = jwt.sign({sub: user.id}, config.secret, config.expiresIn);
        res.status(200).json({
          success: true,
          message: 'Login successful',
          token: token,
          user: user
        });
      }
    })
    .catch((err) => {
      res.status(401).json({
        status: 'error',
        error: err,
        message: 'User not found with email ' + req.body.email
      });
    });
}

const logout = () => {
  return;
}

const register = (req, res, next) => {
  req.body.age ? parseInt(req.body.age) : '';
  const User = new userModel(req.body);
  User.one(req.body.email)
    .then((user) => {
      return res.status(401).json({
        status: 'error',
        error: 'The email address ' + req.body.email +
          ' is already registered to a user account'
      });
    })
    .catch((err) => {
      const user = User.save()
      const token = user.then((user) => {
          return jwt.sign({ sub: user.id }, config.secret, config.expiresIn);
        })
      Promise.all([user, token])
        .then((results) => {
          res.status(200).json({
            status: 'success',
            message: 'Registered user and logged in',
            token: results[1],
            user: results[0]
          });
        })
        .catch((err) => {
          res.status(500).json({
            status: 'error',
            error: err
          });
        });
    })
}

const user = (req, res, next) => {
  res.status(200).json(req.user)
}

module.exports = {
  login: login,
  logout: logout,
  register: register,
  user: user
}
