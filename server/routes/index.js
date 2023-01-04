const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");
const ProductController = require("../controllers/ProductController");
const FavController = require("../controllers/FavController");
const CartController = require("../controllers/OrderController");
const { authN, authZ } = require("../middlewares/auth");

router.post("/register", UserController.register);
router.post("/login", UserController.login);

router.use(authN);

// User
router.get("/user-login", UserController.readUserLogin);
router.put("/user/:id", UserController.editUser);

// Product
router.get("/product", ProductController.readAllProducts);
router.get("/product/:id", ProductController.detailProduct);
router.post("/product", authZ, ProductController.addProduct)
router.put("/product/:id", authZ, ProductController.editProduct)
router.delete("/product/:id", authZ, ProductController.deleteProduct)

// Favorite
router.get("/favorite", FavController.readUserFavorite)
router.post("/favorite", FavController.addUserFavorite)
router.delete("/favorite/:id", FavController.deleteUserFavorite)

// Cart
router.get("/cart", CartController.readUserCart)
router.post("/cart", CartController.addUserCart)
router.patch("/cart/:id", CartController.updateQuantity)
router.delete("/cart/:id", CartController.deleteUserCart)

module.exports = router;
