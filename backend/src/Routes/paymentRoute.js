// // const express = require('express');
// // const router = express.Router();
// // const { payment } = require('../Controller/paymentController');

// // router.post('/payment', payment);

// // module.exports = router;


// const express = require('express');
// const router = express.Router();
// const authMiddleware = require('../Middleware/authMiddleware');
// const {
//   addCheckout,
// //   getCheckout,
// //   removeFromCart,
// //   updateQuantity
// } = require('../Controller/paymentController');

// /**
//  * @description Add a bike to the cart
//  * @route POST /api/cart/add
//  * @access Private
//  * @param {Object} req - Express request object
//  * @param {Object} res - Express response object
//  * @returns {Object} response - The response object containing the updated cart
//  */
// router.post('/add', authMiddleware, addCheckout);

// /**
//  * @description Get the user's cart
//  * @route GET /api/cart
//  * @access Private
//  * @param {Object} req - Express request object
//  * @param {Object} res - Express response object
//  * @returns {Object} response - The response object containing the user's cart
//  */
// // router.get('/', authMiddleware, getCheckout);

// module.exports = router;


const express = require('express');
const router = express.Router();
const authMiddleware = require('../Middleware/authMiddleware');
const { paymentBike } = require('../Controller/paymentController');

// Route for making a payment
router.post('/payment', authMiddleware, paymentBike);

module.exports = router;
