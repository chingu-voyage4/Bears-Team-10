const express = require('express'),
      passport = require('passport'),
      token = require('../controllers/tokenController'),
      User = require('../db/models/User');

require('../services/passport');

exports.requireAuth = passport.authenticate('jwt', { session: false });

exports.githubLogIn = passport.authenticate('github');
exports.githubCallback = passport.authenticate('github', { failureRedirect: '/error' });
exports.githubSendToken = (req, res, next) => {
  const accessToken = token.generateToken(req.user);
  res.redirect(`/token?token=${accessToken}`);
}

exports.googleLogIn = passport.authenticate('google', { scope: ['profile', 'email'] });
exports.googleCallback = passport.authenticate('google', { failureRedirect: '/error' });
exports.googleSendToken = (req, res, next) => {
  const accessToken = token.generateToken(req.user);
  res.redirect(`/token?token=${accessToken}`);
}

exports.facebookLogIn = passport.authenticate('facebook');
exports.facebookCallback = passport.authenticate('facebook', { failureRedirect: '/error' });
exports.facebookSendToken = (req, res, next) => {
  const accessToken = token.generateToken(req.user);
  res.redirect(`/token?token=${accessToken}`);
}
