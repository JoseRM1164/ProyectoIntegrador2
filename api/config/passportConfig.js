const userAUTH = require('../models/userAUTH');
const bcrypt = require('bcryptjs');
const localStrategy = require('passport-local').Strategy;
const passport = require('passport');

let verifyCallBack = (username, password, done) => {
  userAUTH.findOne({username: username}, (err, user) => {
    if (err) throw err
    if (!user) return done(null, false)
    bcrypt.compare(password, user.passwordHash, (err, res) => {
      if (err) throw err
      if (res === true) {
        return done(null, user)
      } else {
        return done(null, false)
      }
    });
  });
}

let localStrat = new localStrategy(verifyCallBack);

passport.use(localStrat);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((userId, done) => {
  userAUTH.findOne({_id: userId}, (err, user) => {
    done(err, user);
  });
});
