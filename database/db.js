const mongoose = require("mongoose");
const Connection = async (db) => {
  const URL = db;
  try {
    await mongoose.connect(URL);
    console.log(`DB connected`);
  } catch (e) {
    console.log(e, `error while connecting to db`);
  }
};
module.exports = Connection;
