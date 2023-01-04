const bcrypt = require("bcrypt");

const hashPassword = (password) => {
  return bcrypt.hashSync(password, 8);
};

const comparePassword = (password, hash) => {
  return bcrypt.compareSync(password, hash);
};

module.exports = { hashPassword, comparePassword };