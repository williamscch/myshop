const { USER_TABLE } = require('../models/user.model');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(USER_TABLE, [
      {
        email: 'admin@email.com',
        password: 'admin1234',
        role: 'admin',
        created_at: Sequelize.fn('NOW')
      }
    ]);
    await queryInterface.bulkInsert(USER_TABLE, [
      {
        email: 'david@email.com',
        password: 'user1234',
        role: 'customer',
        created_at: Sequelize.fn('NOW')
      }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete(USER_TABLE, null, {});
  }
};
