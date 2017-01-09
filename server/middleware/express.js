const config = require('./config');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');
const pg = require('pg');
const connectpg = require('connect-pg-simple');

function configSession(app) {
  var pgSession = connectpg(session);
  app.use(session({
    cookie: {
      expires : new Date(Date.now() + (24*60*60*1000)), //24 Hours
      httpOnly:true
      //secure: true
    },
    secret: config.session.secret,
    store: new pgSession({
      pg : pg,
      conString : config.postgres.connectionString,
      tableName : 'session',
    }),
    resave: false,
    saveUninitialized: true
  }));

  app.use(passport.initialize());
  app.use(passport.session());

  return app;
}

function configExpress(app) {

  app.use(morgan('dev')); // log every request to the console
  app.use(cookieParser()); // read cookies (needed for auth)
  app.use(bodyParser.json()); // get information = require( html forms
  app.use(flash());

  //app = configSession(app);
  return app;
}

module.exports = configExpress;
