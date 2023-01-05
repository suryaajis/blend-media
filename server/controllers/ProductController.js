const { Op } = require("sequelize");
const { Product } = require("../models");

class ProductController {
  static async readAllProducts(req, res, next) {
    try {
      const { page, search } = req.query;
      const size = 12;

      let options = {
        where: {},
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
        order: [["id", "ASC"]],
      };

      console.log(search, "search")
      if (search) {
        options.where.product_name = { [Op.iLike]: `%${search}%` };
      }

      if (+page === 0) {
        throw { name: "NotFound" };
      }

      let response;
      let result;
      if (page) {
        options.limit = size;
        options.offset = (+page - 1) * size;
        response = await Product.findAndCountAll(options);
        result = {
          totalProducts: response.count,
          product: response.rows,
          totalPage: Math.ceil(response.count / size),
          currentPage: +page,
        };
      } else {
        response = await Product.findAll(options);
        result = response;
      }

      res.status(200).json(result);
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
