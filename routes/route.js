const express = require("express");
const getProducts = require("../controller/product-controller");

const router = express.Router();
const { userSignup, userLogin } = require("../controller/userController");

router.post("/signup", userSignup);
router.post("/login", userLogin);

router.get("/products", getProducts);
module.exports = router;
