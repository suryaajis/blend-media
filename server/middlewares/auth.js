const { User } = require("../models/index");
const { verifyToken } = require("../helpers/jwt");

const authN = async (req, res, next) => {
  try {
    const { access_token } = req.headers;
    const payload = verifyToken(access_token);

    const foundUser = await User.findOne({
      where: {
        email: payload.email,
      },
    });

    if (!foundUser) {
      throw { name: "Unauthentication" };
    }

    req.user = {
      id: foundUser.id,
      name: foundUser.name,
      email: foundUser.email,
    };

    next();
  } catch (err) {
    next(err);
  }
};

const authZ = async (req, res, next) => {
  try {
    const role = req.user.role;
    if (role === "admin") {
      next();
    } else {
      throw { name: "Forbidden" };
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { authN, authZ };
