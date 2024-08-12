const Payment = require('../Models/paymentModel');
const Bike = require('../Models/bikeModel'); // Assuming you have a Bike model

// Payment
const paymentBike = async (req, res) => {
  try {
    // If user authentication is needed, ensure the user is authenticated
    const userId = req.user ? req.user.id : null; // Assuming you have auth middleware that sets req.user

    const { name, number, expiration, cvv, bikeId } = req.body;

    // Fetch the bike details based on the bikeId passed in the request
    const bike = await Bike.findById(bikeId);
    if (!bike) {
      return res.status(404).json({ msg: 'Bike not found' });
    }

    // Create a new payment entry
    const paymentData = {
      name,
      number,
      expiration,
      cvv,
      // Store bikeId to reference which bike the payment was made for
      bike: bike._id,
      user: userId, // If user is authenticated
    };

    const payment = new Payment(paymentData);
    await payment.save();

    res.status(201).json({
      msg: 'Payment done successfully',
      payment: payment,
      success: true,
    });
  } catch (error) {
    console.error('Payment error:', error);
    res.status(500).json({ msg: 'Internal Server Error' });
  }
};

module.exports = {
  paymentBike,
};
