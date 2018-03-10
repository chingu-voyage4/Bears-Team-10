const JWT = require('jsonwebtoken');

exports.generateToken = (user) => {
  return JWT.sign({
    iss: 'MERN Template Token',
    sub: user.id,
    iat: new Date().getTime(),
    exp: new Date().setDate(new Date().getDate() + 1)
  }, process.env.JWT_SECRET);
}