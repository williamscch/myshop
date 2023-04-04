const { Model, DataTypes, Sequelize } = require("sequelize");

const PRODUCT_TABLE = "products";

const ProductSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      category: {
        type: Sequelize.STRING,
        allowNull: false,
      },
};

class Product extends Model {
    static associate() {
      // associate
    }
  
    static config(sequelize) {
      return {
        sequelize,
        tableName: PRODUCT_TABLE,
        modelName: "Product",
        timestamps: false,
      };
    }
  }

  module.exports = { PRODUCT_TABLE, ProductSchema, Product };
  