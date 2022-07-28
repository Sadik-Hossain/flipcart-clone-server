const express = require("express");
const {
  getProducts,
  getProductById,
} = require("../controller/product-controller");

const router = express.Router();
const { userSignup, userLogin } = require("../controller/userController");

router.post("/signup", userSignup);
router.post("/login", userLogin);

router.get("/products", getProducts);
router.get("/product/:id", getProductById);
module.exports = router;
