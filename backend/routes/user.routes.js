const { signup,login } = require('../controllers/user.controller')
const {addToCart,getCartItems} = require('../controllers/cart.controller')
const {authMiddleware} = require('../middleware/auth-interceptor')
const express = require('express')
const { getProducts, getProductById } = require("../controllers/product.controller")
const router = express.Router()

router.post('/signup', signup)
router.post('/login', login)
router.post("/cart/add", authMiddleware, addToCart);
router.get("/cart",authMiddleware, getCartItems);
router.get("/products", authMiddleware,getProducts);
router.get("/products/:productKey", getProductById);

module.exports = { router }