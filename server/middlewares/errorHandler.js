const errorHandler = (err, req, res, next) => {
  let code = 500;
  let msg = "Internal server error";

  console.log(err)
  if (err.name === "SequelizeValidationError") {
    code = 400;
    msg = err.errors[0].message;
  } else if (err.name === "SequelizeUniqueConstraintError") {
    code = 400;
    msg = err.errors[0].message;
  } else if (err.name === "InvalidInput") {
    code = 401
    msg = "Invalid email/password"
  } else if (err.name === "JsonWebTokenError") {
    code = 401
    msg = "Invalid token"
  } else if (err.name === "Unauthentication") {
    code = 401
    msg = "Login first"
  } else if (err.name === "WrongEmail") {
    code = 401
    msg = "Wrong email, please use correct email"
  } else if (err.name === "SameItem") {
    code = 400
    msg = "Item already available"
  } else if (err.name === "NotFound") {
    code = 400
    msg = "Data not found"
  } else if (err.name === "UserNotFound") {
    code = 400
    msg = "User not found"
  } 

  res.status(code).json({ message: msg });
};

module.exports = errorHandler;