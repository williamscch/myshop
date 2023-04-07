const { PRODUCT_TABLE } = require('../models/product.model');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(PRODUCT_TABLE, [
      {
        name: 'Franela de Panda',
        description: 'Franela de algodon de panda talla S',
        image: 'https://m.media-amazon.com/images/I/A1jKzO+1adL._AC_CLa%7C2140%2C2000%7C81Ms0fikBTL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_UY1000_.png',
        price: 20,
        category_id: 1,
        created_at: Sequelize.fn('NOW')
      }
    ]);
    await queryInterface.bulkInsert(PRODUCT_TABLE, [
      {
        name: 'Camisa de Cuadros',
        description: 'Franela de nylon de cuadros talla L',
        image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/819wcaoF7FL._AC_UY1000_.jpg',
        price: 50,
        category_id: 1,
        created_at: Sequelize.fn('NOW')
      }
    ]);
    await queryInterface.bulkInsert(PRODUCT_TABLE, [
      {
        name: 'Sweater',
        description: 'Prenda manga larga de algodon talla S',
        image: 'https://cdni.llbean.net/is/image/wim/505183_1155_41?hei=1095&wid=950&resMode=sharp2&defaultImage=llbprod/A0211793_2',
        price: 32,
        created_at: Sequelize.fn('NOW'),
        category_id: 1
      }
    ]);
    await queryInterface.bulkInsert(PRODUCT_TABLE, [
      {
        name: 'Jogger',
        description: 'Jogger pants verdes talla 32',
        image: 'https://assets.theplace.com/image/upload/t_pdp_img_m,f_auto,q_auto/v1/ecom/assets/products/tcp/3013690/3013690_698.jpg',
        price: 65,
        created_at: Sequelize.fn('NOW'),
        category_id: 2
      }
    ]);
    await queryInterface.bulkInsert(PRODUCT_TABLE, [
      {
        name: 'Jeans',
        description: 'Jeans Vaqueros talla 34',
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Jeans_for_men.jpg',
        price: 57,
        created_at: Sequelize.fn('NOW'),
        category_id: 2
      }
    ]);
    await queryInterface.bulkInsert(PRODUCT_TABLE, [
      {
        name: 'Shorts',
        description: 'Bermuda corta de vestir talla 28',
        image: 'https://images-na.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/615q3PMDSyL._AC_UL1131_.jpg',
        price: 24,
        created_at: Sequelize.fn('NOW'),
        category_id: 2
      }
    ]);
    await queryInterface.bulkInsert(PRODUCT_TABLE, [
      {
        name: 'Tennis',
        description: 'Tennis clasicos negros',
        image: 'https://media.gq.com.mx/photos/60f9ea7a3b54691d4e5cbc41/1:1/w_3000,h_3000,c_limit/tenis-negros-para-hombre-gucci.jpeg',
        price: 80,
        created_at: Sequelize.fn('NOW'),
        category_id: 3
      }
    ]);
    await queryInterface.bulkInsert(PRODUCT_TABLE, [
      {
        name: 'Running Shoes',
        description: 'Botas para correr 43',
        image: 'https://cdn.thewirecutter.com/wp-content/media/2021/10/running-shoes-2048px-3097.jpg',
        price: 60,
        created_at: Sequelize.fn('NOW'),
        category_id: 3
      }
    ]);
    await queryInterface.bulkInsert(PRODUCT_TABLE, [
      {
        name: 'Sandalias',
        description: 'Sandalias comodas 42',
        image: 'https://cf.shopee.com.co/file/40814e57d018f30fc4d488eb647eadbb',
        price: 21,
        created_at: Sequelize.fn('NOW'),
        category_id: 3
      }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete(PRODUCT_TABLE, null, {});
  }
};
