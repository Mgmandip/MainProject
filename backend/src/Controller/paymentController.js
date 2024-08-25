// const Payment = require('../Models/paymentModel');
// const Bike = require('../Models/bikeModel'); // Assuming you have a Bike model

// // Payment
// const paymentBike = async (req, res) => {
//   try {
//     // If user authentication is needed, ensure the user is authenticated
//     const userId = req.user ? req.user.id : null; // Assuming you have auth middleware that sets req.user

//     const { name, number, expiration, cvv, bikeId } = req.body;

//     // Fetch the bike details based on the bikeId passed in the request
//     const bike = await Bike.findById(bikeId);
//     if (!bike) {
//       return res.status(404).json({ msg: 'Bike not found' });
//     }

//     // Create a new payment entry
//     const paymentData = {
//       name,
//       number,
//       expiration,
//       cvv,
//       // Store bikeId to reference which bike the payment was made for
//       bike: bike._id,
//       user: userId, // If user is authenticated
//     };

//     const payment = new Payment(paymentData);
//     await payment.save();

//     res.status(201).json({
//       msg: 'Payment done successfully',
//       payment: payment,
//       success: true,
//     });
//   } catch (error) {
//     console.error('Payment error:', error);
//     res.status(500).json({ msg: 'Internal Server Error' });
//   }
// };

// module.exports = {
//   paymentBike,
// };


// const paymentBike = async (req, res) => {
//   try {
//     // Ensure the user is authenticated
//     const userId = req.user.id;  // User is now available because of the middleware

//     const { name, number, expiration, cvv, bikeId } = req.body;

//     // Fetch the bike details based on the bikeId passed in the request
//     const bike = await Bike.findById(bikeId);
//     if (!bike) {
//       return res.status(404).json({ msg: 'Bike not found' });
//     }

//     // Create a new payment entry
//     const paymentData = {
//       name,
//       number,
//       expiration,
//       cvv,
//       bike: bike._id,
//       user: userId,  // Attach user ID to the payment
//     };

//     const payment = new Payment(paymentData);
//     await payment.save();

//     res.status(201).json({
//       msg: 'Payment done successfully',
//       payment: payment,
//       success: true,
//     });
//   } catch (error) {
//     console.error('Payment error:', error);
//     res.status(500).json({ msg: 'Internal Server Error' });
//   }
// };


// module.exports = {
//   paymentBike,
// };



// // controllers/checkoutController.js
// const Checkout = require('../Models/paymentModel');
// const Product = require('../Models/bikeModel');
// const User = require('../Models/authUserModel');

// const createCheckout = async (req, res) => {
//   try {
//     // Extract data from the request body
//     const { bike, name, number, expiration, cvv } = req.body;
//     const userId = req.user.id;

//     // Create a new checkout entry
//     const checkout = new Checkout({
//       user: userId,
//       bike,
//       name,
//       number,
//       expiration,
//       cvv
//     });

//     // Save the checkout entry to the database
//     await checkout.save();

//     // Respond with the created checkout
//     res.status(201).json({
//       message: 'Checkout created successfully',
//       checkout
//     });
//   } catch (error) {
//     // Handle any errors
//     console.error('Error creating checkout:', error);
//     res.status(500).json({
//       message: 'Error creating checkout',
//       error: error.message
//     });
//   }
// };




// // Fetch all checkouts with populated bike details
// const getAllCheckouts = async (req, res) => {
//   try {
//     // Fetch all checkout records and populate the 'bike' field with bike details
//     const checkouts = await Checkout.find().populate('bike'); // This will populate the bike details

//     // Respond with the fetched checkouts
//     res.status(200).json(checkouts);
//   } catch (error) {
//     console.error('Error fetching checkouts:', error);
//     res.status(500).json({
//       message: 'Error fetching checkouts',
//       error: error.message
//     });
//   }
// };

// // const payment = async (req, res) => {
// //   try {
// //     // Log to verify the request is reaching this point
// //     console.log('Fetching all payments...');
    
// //     const payments = await Checkout.find()
// //       .populate('user', 'name email') // Populate user details
// //       .populate('bike', 'model price'); // Populate bike details
    
// //     // Log the fetched payments for debugging
// //     console.log('Payments fetched:', payments);
    
// //     res.status(200).json(payments);
// //   } catch (error) {
// //     console.error('Error fetching payments:', error);
// //     res.status(500).json({ msg: error.message });
// //   }
// // };



// module.exports = {
//   createCheckout,
//   getAllCheckouts
//   // payment
// };




// // controllers/checkoutController.js
// const Checkout = require('../Models/paymentModel');
// const Product = require('../Models/bikeModel');
// const User = require('../Models/authUserModel');

// const createCheckout = async (req, res) => {
//   try {
//     // Extract data from the request body
//     const { bike, name, number, expiration, cvv } = req.body;
//     const userId = req.user.id;

//     // Create a new checkout entry
//     const checkout = new Checkout({
//       user: userId,
//       bike,
//       name,
//       number,
//       expiration,
//       cvv,
//       status
//     });

//     // Save the checkout entry to the database
//     await checkout.save();

//     // Respond with the created checkout
//     res.status(201).json({
//       message: 'Checkout created successfully',
//       checkout
//     });
//   } catch (error) {
//     // Handle any errors
//     console.error('Error creating checkout:', error);
//     res.status(500).json({
//       message: 'Error creating checkout',
//       error: error.message
//     });
//   }
// };


// // Get all users (Admin Only)
// exports.payment = async (req, res) => {
//   try {
//     const payments = await Checkout.find(); // Fetch all users from the database
//     res.status(200).json(payments);
//   } catch (error) {
//     res.status(500).json({ msg: error.message });
//   }
// };




// module.exports = {
//   createCheckout,
// };
















// // // controllers/checkoutController.js
// const Checkout = require('../Models/paymentModel');
// const Product = require('../Models/bikeModel');
// const User = require('../Models/authUserModel');

// const createCheckout = async (req, res) => {
//   try {
//     const { bike, name, number, expiration, cvv } = req.body;
//     const userId = req.user.id;

//     const checkout = new Checkout({
//       user: userId,
//       bike,
//       name,
//       number,
//       expiration,
//       cvv,
//     });

//     await checkout.save();

//     res.status(201).json({
//       message: 'Checkout created successfully',
//       checkout,
//     });
//   } catch (error) {
//     console.error('Error creating checkout:', error);
//     res.status(500).json({
//       message: 'Error creating checkout',
//       error: error.message,
//     });
//   }
// };

// // // Get all payments (Admin Only)
// // const payment = async (req, res) => {
// //   try {
// //     // Populate the user and bike fields
// //     const payments = await Checkout.find().populate('user').populate('bike', 'name price');
// //     res.status(200).json(payments);
// //   } catch (error) {
// //     res.status(500).json({ msg: error.message });
// //   }
// // };

// module.exports = {
//   createCheckout,
//   // payment
// };





const Checkout = require('../Models/paymentModel');
const Order = require('../Models/orderModel'); // Import the Order model

// Create a checkout and corresponding order
const createCheckout = async (req, res) => {
  try {
    const { bike, name, number, expiration, cvv } = req.body;
    const userId = req.user.id;

    // Create a new Checkout entry (payment)
    const checkout = new Checkout({
      user: userId,
      bike,
      name,
      number,
      expiration,
      cvv,
    });

    await checkout.save(); // Save checkout details in the payment database

    // After successful checkout, create a new Order
    const order = new Order({
      user: userId,
      bike: bike, // The bike purchased
      status: 'Pending', // Initial status of the order
    });

    await order.save(); // Save the order in the Order database

    res.status(201).json({
      message: 'Checkout and Order created successfully',
      checkout,
      order, // Include order details in the response
    });
  } catch (error) {
    // console.error('Error processing checkout and creating order:', error);
    // res.status(500).json({
    //   message: 'Error processing checkout',
    //   error: error.message,
    // });
  }
};

module.exports = {
  createCheckout
};
