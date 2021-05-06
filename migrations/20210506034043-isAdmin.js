'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'Users',
      'isAdmin',
      {
        type: Sequelize.BOOLEAN,
        allowNull: false, 
        defaultValue: false
      });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColum('Users', 'isAdmin');
  }
};
