'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    product_name: DataTypes.STRING,
    product_price: DataTypes.INTEGER,
    brand: DataTypes.STRING,
    product_image_url: DataTypes.TEXT,
    product_info: DataTypes.STRING,
    real_pdp_url: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};