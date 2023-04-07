const { CUSTOMER_TABLE } = require('../models/customer.model');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(CUSTOMER_TABLE, [
      {
        name: 'David',
        last_name: 'Colmenares',
        user_id: 2,
        created_at: Sequelize.fn('NOW')
      }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete(CUSTOMER_TABLE, null, {});
  }
};
