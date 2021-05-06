'use strict';

const bcrypt = require('bcrypt');
const settings = require('../config/settings');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "User1",
          password: bcrypt.hashSync('password1', settings.saltRounds),
          email: "user1@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: "User2",
          password: bcrypt.hashSync('password2', settings.saltRounds),
          email: "user2@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    );
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("Users", null, {});
  }
};
