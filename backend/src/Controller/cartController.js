// const Cart = require('../Models/cartModel');
// const Bike = require('../Models/bikeModel');
// // const User = require('../Models/userModel');
// // const domain = "http://localhost:5000";

// // Helper function to send error responses
// const sendErrorResponse = (res, error) => {
//   console.log(error);
//   res.status(500).json({ msg: error.message });
// };

// // Add bike to cart
// // const addToCart = async (req, res) => {
// //   try {
// //     const userId = req.user.id; // If user is Authenticated
// //     const { bikeId } = req.body;

// //     // Check if the bike exists
// //     const bike = await Bike.findById(bikeId);
// //     if (!bike) {
// //       return res.status(404).json({ msg: 'Bike not found' });
// //     }

// //     // Find or create a cart for the user
// //     let cart = await Cart.findOne({ user: userId });
// //     if (!cart) {
// //       cart = new Cart({ user: userId, bikes: [], name: [] });
// //     }

// //     // Check if the bike is already in the cart
// //     const existingBike = cart.bikes.find(item => item.bike.toString() === bikeId);
// //     if (existingBike) {
// //       // Update quantity if bike already exists
// //       existingBike.quantity += 1;
// //     } else {
// //       // Add new bike to cart
// //       cart.bikes.push({ bike: bikeId, quantity: 1 });
// //     }

// //     await cart.save();
// //     res.status(200).json({ msg: 'Bike added to cart', cart });
// //   } catch (error) {
// //     sendErrorResponse(res, error);
// //   }
// // };

// const addToCart = async (req, res) => {
//   try {
//     const userId = req.user.id; // Get the authenticated user ID
//     const { bikeId } = req.body;

//     // Check if the bike exists
//     const bike = await Bike.findById(bikeId);
//     if (!bike) {
//       return res.status(404).json({ msg: 'Bike not found' });
//     }

//     // Find the cart for the user
//     let cart = await Cart.findOne({ user: userId });
//     if (!cart) {
//       cart = new Cart({ user: userId, bikes: [] });
//     }

//     // Check if the bike is already in the cart
//     const existingBike = cart.bikes.find(item => item.bike.toString() === bikeId);
//     if (existingBike) {
//       // Update quantity if bike already exists
//       existingBike.quantity += 1;
//     } else {
//       // Add new bike to the cart
//       cart.bikes.push({ bike: bikeId, quantity: 1 });
//     }

//     await cart.save();
//     res.status(200).json({ msg: 'Bike added to cart', cart });
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).json({ msg: error.message });
//   }
// };


// // Get cart details for a user
// // const getCart = async (req, res) => {
// //     try {
// //       const userId = req.user._id; // Assuming you get the user ID from the request (e.g., via middleware)
// //       const cart = await Cart.findOne(req.params.id).populate('bikes.bike');
  
// //       if (!cart) {
// //         return res.status(404).json({ msg: 'Cart not found' });
// //       }
  
// //       res.status(200).json(cart);
// //     } catch (error) {
// //       res.status(500).json({ msg: error.message });
// //     }
// //   };

// const getCart = async (req, res) => {
//   try {
//     const userId = req.user.id; // Assuming you get the user ID from the request (e.g., via middleware)
//     const cart = await Cart.findOne({ user: userId }).populate('bikes.bike'); // Populate the bike details
  
//     if (!cart) {
//       return res.status(404).json({ msg: 'Cart is empty' });
//     }

//     res.status(200).json(cart);
//   } catch (error) {
//     res.status(500).json({ msg: error.message });
//   }
// };

  

// // // Remove bike from cart (optional)
// // const removeFromCart = async (req, res) => {
// //   try {
// //     const userId = req.user.id; // Assuming user is authenticated
// //     const { bikeId } = req.body;

// //     const cart = await Cart.findOne({ user: userId });
// //     if (!cart) {
// //       return res.status(404).json({ msg: 'Cart not found' });
// //     }

// //     // Remove bike from cart
// //     cart.bikes = cart.bikes.filter(item => item.bike.toString() !== bikeId);
// //     await cart.save();

// //     res.status(200).json({ msg: 'Bike removed from cart', cart });
// //   } catch (error) {
// //     sendErrorResponse(res, error);
// //   }
// // };

// // // Update bike quantity in cart (optional)
// // const updateQuantity = async (req, res) => {
// //   try {
// //     const userId = req.user.id; // Assuming user is authenticated
// //     const { bikeId, quantity } = req.body;

// //     const cart = await Cart.findOne({ user: userId });
// //     if (!cart) {
// //       return res.status(404).json({ msg: 'Cart not found' });
// //     }

// //     const bike = cart.bikes.find(item => item.bike.toString() === bikeId);
// //     if (!bike) {
// //       return res.status(404).json({ msg: 'Bike not found in cart' });
// //     }

// //     bike.quantity = quantity;
// //     await cart.save();

// //     res.status(200).json({ msg: 'Quantity updated', cart });
// //   } catch (error) {
// //     sendErrorResponse(res, error);
// //   }
// // };

// module.exports = {
//   addToCart,
//   getCart,
// //   removeFromCart,
// //   updateQuantity
// };


const Cart = require('../Models/cartModel');
const Bike = require('../Models/bikeModel');

exports.addToCart = async (req, res) => {
  try {
    const { bikeId } = req.body;
    const userId = req.user.id; // Assuming middleware sets req.user

    // Check if the bike exists
    const bike = await Bike.findById(bikeId);
    if (!bike) {
      return res.status(404).json({ success: false, message: 'Bike not found' });
    }

    let cart = await Cart.findOne({ user: userId });

    if (cart) {
      // Cart exists for user
      let itemIndex = cart.bikes.findIndex(p => p.bike.toString() === bikeId);

      if (itemIndex > -1) {
        // Bike exists in the cart, update the quantity
        cart.bikes[itemIndex].quantity += 1;
      } else {
        // Bike does not exist in cart, add new item
        cart.bikes.push({ bike: bikeId, quantity: 1 });
      }

      cart = await cart.save();
      return res.status(201).json({ success: true, cart });
    } else {
      // No cart for user, create new cart
      const newCart = await Cart.create({
        user: userId,
        bikes: [{ bike: bikeId, quantity: 1 }]
      });

      return res.status(201).json({ success: true, cart: newCart });
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
    res.status(500).json({ success: false, message: 'Failed to add bike to cart. Please try again.' });
  }
};

exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user.id }).populate('bikes.bike');
    if (!cart) {
      return res.status(404).json({ success: false, message: 'Cart not found' });
    }
    res.status(200).json({ success: true, cart });
  } catch (error) {
    console.error('Error fetching cart:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch cart. Please try again.' });
  }
};

exports.updateCart = async (req, res) => {
  try {
    const { bikes } = req.body;
    const userId = req.user.id;

    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      return res.status(404).json({ success: false, message: 'Cart not found' });
    }

    // Update each bike in the cart
    for (let bikeItem of bikes) {
      let itemIndex = cart.bikes.findIndex(p => p.bike.toString() === bikeItem.bike._id);
      if (itemIndex > -1) {
        // Update existing item
        cart.bikes[itemIndex].quantity = bikeItem.quantity;
        cart.bikes[itemIndex].quality = bikeItem.quality;
        cart.bikes[itemIndex].totalPrice = bikeItem.totalPrice;
      }
    }

    cart = await cart.save();
    return res.status(200).json({ success: true, cart });
  } catch (error) {
    console.error('Error updating cart:', error);
    res.status(500).json({ success: false, message: 'Failed to update cart. Please try again.' });
  }
};


exports.removeFromCart = async (req, res) => {
  try {
    const { bikeId } = req.params;
    const userId = req.user.id;

    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      return res.status(404).json({ success: false, message: 'Cart not found' });
    }

    const itemIndex = cart.bikes.findIndex(p => p.bike.toString() === bikeId);
    if (itemIndex > -1) {
      // Remove the bike from the cart
      cart.bikes.splice(itemIndex, 1);
      cart = await cart.save();
      return res.status(200).json({ success: true, cart });
    } else {
      return res.status(404).json({ success: false, message: 'Bike not found in cart' });
    }
  } catch (error) {
    console.error('Error removing bike from cart:', error);
    res.status(500).json({ success: false, message: 'Failed to remove bike from cart. Please try again.' });
  }
};
