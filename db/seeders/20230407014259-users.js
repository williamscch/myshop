const { USER_TABLE } = require('../models/user.model');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(USER_TABLE, [
      {
        email: 'admin@email.com',
        password: '$2a$10$hcrQCXtVuvGevPxEq/1XSeVwN5zo0.i5gly1QtZwSwj.9FqGDx/6e',
        role: 'admin',
        created_at: Sequelize.fn('NOW')
      }
    ]);
    await queryInterface.bulkInsert(USER_TABLE, [
      {
        email: 'david@email.com',
        password: '$2a$10$iHU7waYSS0vDZjVtxuu9eeeIyZ0VgMxwm9ipBGwD28niHwejYdyPG',
        role: 'customer',
        created_at: Sequelize.fn('NOW')
      }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete(USER_TABLE, null, {});
  }
};
