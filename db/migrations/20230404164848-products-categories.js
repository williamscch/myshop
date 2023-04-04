"use strict";

const { CategorySchema, CATEGORY_TABLE } = require("../models/category.model");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(CATEGORY_TABLE, CategorySchema);
  },
};
