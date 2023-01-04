const { User } = require("../models");

class UserController {
  static async register(req, res, next) {
    try {
      const { name, email, password, role } = req.body;

      const response = await User.create({
        name,
        email,
        password,
        role,
      });

      res.status(201).json(response);
    } catch (err) {
      next(err);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;

      const foundUser = await User.findOne({
        where: { email },
      });

      if (!foundUser) {
        throw { name: "InvalidInput" };
      }

      if (!comparePassword(password, foundUser.password)) {
        throw { name: "InvalidInput" };
      }

      const payload = {
        id: foundUser.id,
        name: foundUser.name,
        email: foundUser.email,
        role: foundUser.role,
      };
      const token = signToken(payload);

      res.status(200).json({ access_token: token });
    } catch (err) {
      next(err);
    }
  }

  static async readUserLogin(req, res, next) {
    try {
      const id = +req.params.id;

      const response = await User.findOne({
        where: { id },
      });

      if (!response) {
        throw { name: "NotFound" };
      }

      res.status(200).json(response);
    } catch (err) {
      next(err);
    }
  }

  static async editUser(req, res, next) {
    try {
      const id = +req.params.id;
      const obj = { name: req.body.name, email: req.body.email };

      const foundUser = User.findByPk(id);

      if (!foundUser) {
        throw { name: "NotFound" };
      }

      const response = await User.update(obj, {
        where: { id },
        returning: true,
      });

      res.status(200).json(response);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserController;
