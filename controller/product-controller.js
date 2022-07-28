const Product = require("../model/product-schema");
const getProducts = async (req, res) => {
  try {
    // conditional based data finding
    // Product.find({ id: "product1" });
    // find all data
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const pd = await Product.findOne({ id: id });
    res.status(200).json(pd);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getProducts, getProductById };
