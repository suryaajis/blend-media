const { Favorite } = require("../models");

class FavController {
  static async readUserFavorite(req, res, next) {
    try {
      const userId = +req.user.id;

      const response = await Favorite.findAll({
        where: { user_id: userId },
        include: ["Product"],
      });

      res.status(200).json(response);
    } catch (err) {
      next(err);
    }
  }

  static async addUserFavorite(req, res, next) {
    try {
      const sameFavorite = await Favorite.findOne({
        where: { product_id: req.body.product_id },
      });

      if (sameFavorite) {
        throw { name: "SameItem" };
      }

      const response = await Favorite.create({
        user_id: req.user.id,
        product_id: req.body.product_id,
      });

      res.status(201).json(response);
    } catch (err) {
      next(err);
    }
  }

  static async deleteUserFavorite(req, res, next) {
    try {
      const id = +req.params.id;

      const foundFav = await Favorite.findByPk(id);

      if (!foundFav) {
        throw { name: "NotFound" };
      }

      await Favorite.destroy({
        where: { id },
      });

      res
        .status(200)
        .json({ message: `Favorite with id ${id} has been deleted` });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = FavController;
