const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  key: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  price: { type: String, required: true },
  image: { type: String, required: true },
});

const Product = mongoose.model("Product", productSchema);

module.exports = { Product };
