require('dotenv').config();

const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  morgan = require('morgan'),
  passport = require('passport'),
  passportSetUp = require('./services/passport'),
  cors = require('cors');
  dbConnection = require('./db'),
  session = require('express-session'),
  port = process.env.PORT ? process.env.PORT : 5000;

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: process.env.EXPRESS_SESSION_SECRET
}));
app.use(passport.initialize());
app.use(passport.session());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.use('/api', require('./api/rootRoutes'));
app.use('/auth', require('./api/authRoutes'));

app.listen(port, () => {
  console.log(`Express Server Listening on Port ${port}!`);
});