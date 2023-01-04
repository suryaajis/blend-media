'use strict';
const bcrypt = require("bcrypt");
const makePassword = (pw) => {
  return bcrypt.hashSync(pw, 10);
};

let list = [
  {
    name: "admin",
    email: "admin@mail.com",
    password: "admin",
    role: "admin"
  },
  {
    name: "customer",
    email: "customer@mail.com",
    password: "customer",
    role: "buyer"
  },
  {
    name: "store",
    email: "store@mail.com",
    password: "store",
    role: "seller"
  },
]

list.forEach(el => {
  el.password = makePassword(el.password)
  el.createdAt = new Date()
  el.updatedAt = new Date()
})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", list)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
