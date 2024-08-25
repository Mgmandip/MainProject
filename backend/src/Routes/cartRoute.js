const express = require('express');
const router = express.Router();
const authMiddleware = require('../Middleware/authMiddleware');
const Cart = require('../Models/cartModel');
const {
  addToCart,
  getCart,
  removeFromCart
//   removeFromCart,
//   updateQuantity
} = require('../Controller/cartController');

/**
 * @description Add a bike to the cart
 * @route POST /api/cart/add
 * @access Private
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} response - The response object containing the updated cart
 */
router.post('/add', authMiddleware, addToCart);

/**
 * @description Get the user's cart
 * @route GET /api/cart
 * @access Private
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} response - The response object containing the user's cart
 */
router.get('/', authMiddleware, getCart);


/**
 * @description Update the quantity of a bike in the cart
 * @route PATCH /api/cart/update
 * @access Private
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} response - The response object confirming quantity update
 */
// router.patch('/update', authMiddleware, updateQuantity);



router.get('/', authMiddleware, async (req, res) => {
  try {
    // Use req.user.id to find the cart for the logged-in user
    const cart = await Cart.findOne({ user: req.user.id }).populate('bikes.bike'); // Assuming the cart schema has a 'bikes' field with references to Bike
    if (!cart) {
      return res.status(404).json({ msg: 'Cart is empty' });
    }
    res.json(cart);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;


/**
 * @description Remove a bike from the cart
 * @route DELETE /api/cart/remove/:bikeId
 * @access Private
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} response - The response object confirming removal
 */
router.delete('/remove/:bikeId', authMiddleware, removeFromCart);
