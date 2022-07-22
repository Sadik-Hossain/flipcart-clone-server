const products = require("./constants/data");
const Product = require("./model/product-schema");
const DefaultData = async () => {
  try {
    // await Product.deleteMany({});
    await Product.insertMany(products);
    console.log(`Data inserted successfully`);
  } catch (error) {
    console.log(error.message, "err while fetch data");
  }
};
module.exports = DefaultData;
