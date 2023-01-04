const jwt = require("jsonwebtoken");

const secretJwt = 'meong'

const signToken = (payload) => {
  return jwt.sign(payload, secretJwt, {
    expiresIn: "24h"
  });
};

const verifyToken = (token) => {
  return jwt.verify(token, secretJwt);
};

module.exports = {
  signToken,
  verifyToken,
};