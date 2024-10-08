// const mongoose = require('mongoose');

// const paymentSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   number: {
//     type: String,
//     required: true,
//   },
//   expiration: {
//     type: String,
//     required: true,
//   },
//   cvv: {
//     type: String,
//     required: true,
//   },
//   bike: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Bike',
//     required: true,
//   },
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: false, // Optional if user authentication is not implemented
//   },
// });

// const Payment = mongoose.model('Payment', paymentSchema);
// module.exports = Payment;


const mongoose = require('mongoose');

const checkoutSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  bike: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  number: {
    type: String,
    required: true,
 
  },
  expiration: {
    type: String,
    required: true
  },
  cvv: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['Pending', 'Shipped', 'Delivered'],
    default: 'Pending',
    required: true
  }
}, );

const Checkout = mongoose.model('Checkout', checkoutSchema);

module.exports = Checkout;