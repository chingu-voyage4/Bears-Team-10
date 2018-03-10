const express = require('express'),
  router = express.Router(),
  Auth = require('../controllers/authController');

// ********** GITHUB **********
router.get('/github', Auth.githubLogIn);
router.get('/github/callback',
  Auth.githubCallback, Auth.githubSendToken
);

// ********** GOOGLE **********
router.get('/google', Auth.googleLogIn);
router.get('/google/callback',
  Auth.googleCallback, Auth.googleSendToken);

// ********** FACEBOOK **********
router.get('/facebook', Auth.facebookLogIn);
router.get('/facebook/callback',
  Auth.facebookCallback, Auth.facebookSendToken);

// ********** AUTH USER ROUTES **********
router.get('/current-user', Auth.requireAuth,
  (req, res, next) => {
    console.log(req.user);
    res.send(req.user);
  }
);
router.get('/logout', Auth.requireAuth,
  (req, res, next) => {
    req.logout();
    res.redirect('/');
  }
);

// API ROUTES
module.exports = router;