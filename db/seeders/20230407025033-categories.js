const { CATEGORY_TABLE } = require('../models/category.model');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(CATEGORY_TABLE, [
      {
        name: 'Tops',
        created_at: Sequelize.fn('NOW')
      }
    ]);
    await queryInterface.bulkInsert(CATEGORY_TABLE, [
      {
        name: 'Pants',
        created_at: Sequelize.fn('NOW')
      }
    ]);
    await queryInterface.bulkInsert(CATEGORY_TABLE, [
      {
        name: 'Shoes',
        created_at: Sequelize.fn('NOW')
      }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete(CATEGORY_TABLE, null, {});
  }
};
