const { Cart } = require("../models");

class CartController {
  static async readUserCart(req, res, next) {
    try {
      const userId = +req.user.id;

      const response = await Cart.findAll({
        where: { user_id: userId },
        include: ["Product"],
      });

      res.status(200).json(response);
    } catch (err) {
      next(err);
    }
  }

  static async addUserCart(req, res, next) {
    try {
      const response = await Cart.create({
        quantity: req.body.quantity,
        user_id: req.user.id,
        product_id: req.body.product_id,
      });

      res.status(201).json(response);
    } catch (err) {
      next(err);
    }
  }

  static async updateQuantity(req, res, next) {
    try {
      const id = +req.params.id;

      const foundCar = await Cart.findByPk(id);

      if (!foundCar) {
        throw { name: "NotFound" };
      }

      const response = await Cart.update(
        { quantity: req.body.quantity },
        {
          where: { id },
          returning: true,
        }
      );

      res.status(200).json(response);
    } catch (err) {
      next(err);
    }
  }

  static async deleteUserCart(req, res, next) {
    try {
      const id = +req.params.id;

      const foundCart = await Cart.findByPk(id);

      if (!foundCart) {
        throw { name: "NotFound" };
      }

      await Cart.destroy({
        where: { id },
      });

      res.status(200).json({ message: `Cart with id ${id} has been deleted` });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = CartController;
