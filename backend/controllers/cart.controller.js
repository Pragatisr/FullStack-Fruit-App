const { Cart } = require("../model/cart.schema");

// Add item to cart
const addToCart = async (req, res) => {
  try {
    const { name, price, quantity } = req.body;
    const userId = req.user.id;
    if (!name || !price) {
      return res.status(400).json({ error: "Missing product fields" });
    }
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({
        userId,
        items: [{ name, price, quantity }],
      });
    } else {
      cart.items = cart.items.filter(Boolean);
      const existingItem = cart.items.find((item) => item.name === name);
      if (existingItem) {
        existingItem.quantity += quantity || 1;
      } else {
        cart.items.push({ name, price, quantity });
      }
    }

    await cart.save();
    res.json(cart);
  } catch (err) {
    console.error("Error", err);
    res.status(500).json({ error: "Something went wrong" });
  }
};


// Get cart items for a user
const getCartItems = async (req, res) => {
  try {
    const userId = req.user.id;
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.json({ userId, items: [] });
    }

    res.json(cart);
  } catch (err) {
    console.error("Error", err);
    res.status(500).json({ error: "Something went wrong" });
  }
};

module.exports = { addToCart, getCartItems };
