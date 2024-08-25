// const mongoose = require('mongoose');

// const cartSchema = new mongoose.Schema({
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//   },
//   bikes: [
//     {
//       bike: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Bike',
//         unique: true,
//       },
//       quantity: {
//         type: Number,
//         default: 1,
//       }
//     }
//   ]
// });

// const Cart = mongoose.model('Cart', cartSchema);

// module.exports = Cart;

const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    
  },
  bikes: [
    {
      bike: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Bike',
        required: true,
      },
      quantity: {
        type: Number,
        default: 1,
      },
    },
  ],
});

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;



