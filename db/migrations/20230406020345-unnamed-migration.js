const { CUSTOMER_TABLE } = require('../models/customer.model');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.removeColumn(CUSTOMER_TABLE, 'phone');
  },

  async down(queryInterface) {
    await queryInterface.addColumn(CUSTOMER_TABLE, 'phone');
  }
};
