const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');
const keys = require('./config/keys');

const app = express();

mongoose.connect(keys.mongoConfig);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

app.use('/api', routes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT ? process.env.PORT : 5000;

app.listen(port, () => {
  console.log('Express Server Listening on Port 5000!');
});