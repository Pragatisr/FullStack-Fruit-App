const { Product } = require("../model/product.schema");


// Get all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error });
  }
};

// Get single product by key
const getProductById = async (req, res) => {
  try {
    const product = await Product.findOne({ key: req.params.key });
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Error fetching product", error });
  }
};

module.exports = { getProducts, getProductById };
