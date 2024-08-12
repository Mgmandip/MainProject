const Cart = require('../Models/cartModel');
const Bike = require('../Models/bikeModel');
// const User = require('../Models/userModel');
// const domain = "http://localhost:5000";

// Helper function to send error responses
const sendErrorResponse = (res, error) => {
  console.log(error);
  res.status(500).json({ msg: error.message });
};

// Add bike to cart
const addToCart = async (req, res) => {
  try {
    const userId = req.user.id; // If user is Authenticated
    const { bikeId } = req.body;

    // Check if the bike exists
    const bike = await Bike.findById(bikeId);
    if (!bike) {
      return res.status(404).json({ msg: 'Bike not found' });
    }

    // Find or create a cart for the user
    let cart = await Cart.findOne({ user: userId });
    if (!cart) {
      cart = new Cart({ user: userId, bikes: [], name: [] });
    }

    // Check if the bike is already in the cart
    const existingBike = cart.bikes.find(item => item.bike.toString() === bikeId);
    if (existingBike) {
      // Update quantity if bike already exists
      existingBike.quantity += 1;
    } else {
      // Add new bike to cart
      cart.bikes.push({ bike: bikeId, quantity: 1 });
    }

    await cart.save();
    res.status(200).json({ msg: 'Bike added to cart', cart });
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

// Get cart details for a user
const getCart = async (req, res) => {
    try {
      const userId = req.user._id; // Assuming you get the user ID from the request (e.g., via middleware)
      const cart = await Cart.findOne(req.params.id).populate('bikes.bike');
  
      if (!cart) {
        return res.status(404).json({ msg: 'Cart not found' });
      }
  
      res.status(200).json(cart);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  };
  

// // Remove bike from cart (optional)
// const removeFromCart = async (req, res) => {
//   try {
//     const userId = req.user.id; // Assuming user is authenticated
//     const { bikeId } = req.body;

//     const cart = await Cart.findOne({ user: userId });
//     if (!cart) {
//       return res.status(404).json({ msg: 'Cart not found' });
//     }

//     // Remove bike from cart
//     cart.bikes = cart.bikes.filter(item => item.bike.toString() !== bikeId);
//     await cart.save();

//     res.status(200).json({ msg: 'Bike removed from cart', cart });
//   } catch (error) {
//     sendErrorResponse(res, error);
//   }
// };

// // Update bike quantity in cart (optional)
// const updateQuantity = async (req, res) => {
//   try {
//     const userId = req.user.id; // Assuming user is authenticated
//     const { bikeId, quantity } = req.body;

//     const cart = await Cart.findOne({ user: userId });
//     if (!cart) {
//       return res.status(404).json({ msg: 'Cart not found' });
//     }

//     const bike = cart.bikes.find(item => item.bike.toString() === bikeId);
//     if (!bike) {
//       return res.status(404).json({ msg: 'Bike not found in cart' });
//     }

//     bike.quantity = quantity;
//     await cart.save();

//     res.status(200).json({ msg: 'Quantity updated', cart });
//   } catch (error) {
//     sendErrorResponse(res, error);
//   }
// };

module.exports = {
  addToCart,
  getCart,
//   removeFromCart,
//   updateQuantity
};
