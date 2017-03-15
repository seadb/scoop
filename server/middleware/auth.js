const userModel = require('../user/user-model');
const User = new userModel();
const jwt = require('jsonwebtoken');
const config = require('../config');

const authenticate = (req, res, next) => {
  if (!(req.headers && req.headers.authorization)) {
    return res.status(400).json({
      message: 'Please log in'
    });
  }
  // decode the token
  //var header = req.headers.authorization.split('\.');
  //var token = header[1];
  jwt.verify(req.headers.authorization, config.token.secret, (err, decoded) => {
    if (err) {
      console.log(err)
      return res.status(401).json({
        message: 'Token has expired'
      });
    }
    else {
      // check if the user still exists in the db
      return User.one(parseInt(decoded.sub))
      .then(results => {
        req.user = results[0];
        req.user.friends = results[1];
        return next();
      })
    }
  });
}

module.exports = authenticate;
