const userModel = require('../user/user-model');
const User = new userModel();
const jwt = require('jsonwebtoken');
const config = require('../config');

const authenticate = (req, res, next) => {
  console.log(req.headers);
  if (!(req.headers && req.headers.authorization)) {
    return res.status(400).json({
      status: 'Please log in'
    });
  }
  // decode the token
  var header = req.headers.authorization.split('\.');
  console.log(header);
  var token = header[1];
  jwt.verify(req.headers.authorization, config.token.secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        status: 'Token has expired'
      });
    }
    else {
      // check if the user still exists in the db
      return User.one(parseInt(decoded.sub))
      .then((user) => {
        req.user = user;
        return next();
      })
      .catch((err) => {
        res.status(500).json({
          status: 'error'
        });
      });
    }
  });
}

module.exports = authenticate;
