const mongoose = require("mongoose");

const productSchma = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true, //`id` must be unique, otherwise, throw error.If you try to create two item with the same id, you'll get a duplicate key error.
  },
  url: String,
  detailUrl: String,
  title: Object,
  price: Object,
  quantity: Number,
  description: String,
  discount: String,
  tagline: String,
});

//* create model with schema
const Product = mongoose.model("product", productSchma);
module.exports = Product;
