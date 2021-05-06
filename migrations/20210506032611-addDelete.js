'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'Users',
      'deleted',
      {
        type: Sequelize.BOOLEAN,
        allowNull: true
      });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColum('Users', 'deleted');
  }
};
