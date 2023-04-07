/* eslint-disable camelcase */
const boom = require('@hapi/boom');
const { Op } = require('sequelize');

const { models } = require('../libs/sequelize');

class ProductsService {
  async create(data) {
    const newProduct = await models.Product.create(data);
    return newProduct;
  }

  async find(query) {
    const filter = {
      include: ['category'],
      where: {}
    };

    const { categoryId } = query;
    if (categoryId) {
      filter.where.categoryId = categoryId;
    }

    const { name } = query;
    if (name) {
      filter.where.name = {
        [Op.iLike]: `%${name}%`
      };
    }

    const { price_max } = query;
    if (price_max) {
      filter.where.price = {
        [Op.lte]: price_max
      };
    }
    const products = await models.Product.findAll(filter);
    return products;
  }

  async findOne(id) {
    const product = await models.Product.findByPk(id);
    if (!product) {
      throw boom.notFound('Product not found');
    }
    return product;
  }

  async update(id, changes) {
    const product = await this.findOne(id);
    const response = await product.update(changes);
    return response;
  }

  async delete(id) {
    const product = await this.findOne(id);
    await product.destroy();
    return { id };
  }
}

module.exports = ProductsService;
