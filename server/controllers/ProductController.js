const { Product } = require("../models");

class ProductController {
  static async readAllProducts(req, res, next) {
    try {
      const response = await Product.findAll({
        attributes: ["id", "product_id", "product_name", "product_image_url"],
      });

      res.status(200).json(response);
    } catch (err) {
      next(err);
    }
  }

  static async detailProduct(req, res, next) {
    try {
      const id = +req.params.id;

      const response = await Product.findOne({
        where: { id },
      });

      res.status(200).json(response);
    } catch (err) {
      next(err);
    }
  }

  static async addProduct(req, res, next) {
    try {
      const obj = {
        product_id: req.body.product_id,
        product_name: req.body.product_name,
        product_price: req.body.product_price,
        brand: req.body.brand,
        product_image_url: req.body.product_image_url,
        product_info: req.body.product_info,
        real_pdp_url: req.body.real_pdp_url,
      };

      const response = await Product.create(obj);

      res.status(201).json(response);
    } catch (err) {
      next(err);
    }
  }

  static async editProduct(req, res, next) {
    try {
      const id = +req.params.id;
      const obj = {
        // product_id:req.body.product_id,
        product_name: req.body.product_name,
        product_price: req.body.product_price,
        brand: req.body.brand,
        product_image_url: req.body.product_image_url,
        product_info: req.body.product_info,
        real_pdp_url: req.body.real_pdp_url,
      };

      const response = await Product.update(obj, {
        where: { id },
        returning: true,
      });

      res.status(200).json(response);
    } catch (err) {
      next(err);
    }
  }

  static async deleteProduct(req, res, next) {
    try {
      const id = +req.params.id;

      const foundProduct = await Product.findByPk(id);

      if (!foundProduct) {
        throw { name: "NotFound" };
      }

      await Product.destroy({
        where: { id },
      });

      res
        .status(200)
        .json({ message: `Product with id ${id} has been deleted` });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = ProductController;
