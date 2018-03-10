const passport = require('passport'),
  JwtStrategy = require('passport-jwt').Strategy,
  ExtractJwt = require('passport-jwt').ExtractJwt,
  GithubStrategy = require('passport-github2').Strategy,
  GoogleStrategy = require('passport-google-oauth20').Strategy;
  FacebookStrategy = require('passport-facebook').Strategy,
  mongoose = require('mongoose'),
  User = require('../db/models/User');

//Turning a user model and turning it into a user ID provided by MongoDB
passport.serializeUser((user, done) => {
  // MongoDB generated user ID
  done(null, user.id);
});

// Turn the socialAuthID string back into a user model 
passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    });
});

passport.use(
  new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: process.env.JWT_SECRET
  }, (payload, done) => {
    User.findById(payload.sub)
      .then(existingUser => {
        if (existingUser) {
          done(null, existingUser);
        } else {
          done(null, false);
        }
      })
      .catch(err => {
        return done(err, false);
      });
  })
);

passport.use(
  new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL,
    proxy: true
  }, (accessToken, refreshToken, profile, done) => {
    User.findOne({ "google.id": profile.id })
      .then((existingUser) => {
        if (!existingUser) {
          new User({
            provider: 'google',
            google: {
              id: profile.id,
              displayName: profile.displayName,
              email: profile.emails[0].value,
              photoURL: profile.photos[0].value
            }
          }).save()
            .then(newUser => {
              done(null, newUser);
            });
        } else {
          done(null, existingUser);
        }
      });
  })
);

passport.use(
  new FacebookStrategy({
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: process.env.FACEBOOK_CALLBACK_URL,
    profileFields: ['id', 'name', 'emails', 'displayName', 'photos'],
    proxy: true
  }, (accessToken, refreshToken, profile, done) => {
    User.findOne({ "facebook.id": profile.id })
      .then((existingUser) => {
        if (!existingUser) {
          new User({
            provider: 'facebook',
            facebook: {
              id: profile.id,
              displayName: profile.displayName,
              email: profile.emails[0].value,
              photoURL: profile.photos[0].value
            }
          }).save()
            .then(newUser => {
              done(null, newUser);
            });
        } else {
          done(null, existingUser);
        }
      });
  })
);

passport.use(
  new GithubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.GITHUB_CALLBACK_URL,
    proxy: true
  }, (accessToken, refreshToken, profile, done) => {
    User.findOne({ "github.id": profile.id })
      .then((existingUser) => {
        if (!existingUser) {
          new User({
            provider: 'github',
            github: {
              id: profile.id,
              displayName: profile.displayName,
              email: profile.emails[0].value,
              photoURL: profile.photos[0].value
            }
          }).save()
            .then(newUser => {
              done(null, newUser);
            });
        } else {
          done(null, existingUser);
        }
      });
  })
);