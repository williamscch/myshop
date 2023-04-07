/* eslint-disable camelcase */
const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().max(20);
const price = Joi.number().integer().min(1);
const description = Joi.string().min(5);
const image = Joi.string().uri();
const categoryId = Joi.number().integer();
const price_min = Joi.number().integer();
const price_max = Joi.number().integer();

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  description: description.required(),
  image: image.required(),
  categoryId: categoryId.required()
});

const updateProductSchema = Joi.object({
  name,
  price,
  image,
  description,
  categoryId
});

const getProductSchema = Joi.object({
  id: id.required()
});

const queryProductSchema = Joi.object({
  categoryId,
  name,
  price_min,
  price_max: Joi.when('price_min', {
    is: Joi.exist(),
    then: price_max.required()
  })
});

module.exports = {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
  queryProductSchema
};
