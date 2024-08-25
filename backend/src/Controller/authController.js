// src/Controller/authController.js

const User = require('../Models/authUserModel');
const Checkout = require('../Models/paymentModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const userProfile = require('../Models/userProfile');

dotenv.config();


// Register
exports.register = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    user = new User({
      name,
      email,
      password,
      role 
    });
    await user.save();

    // Create Profile for the new User with empty default values
    const newProfile = new userProfile({
      user: user.id,
      name,
      address: '', // Empty string for address
      dateOfBirth: null, // null for dateOfBirth
      phoneNumber: '', // Empty string for phoneNumber
      country: '', // Empty string for country
      city: '', // Empty string for city
      zipCode: '' // Empty string for zipCode
    });
    await newProfile.save();

    const payload = { user: { id: user.id } };

    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
      if (err) throw err;
      res.json({ msg: "Registered Successfully", token, userDetails: user, role: user.role });
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};


// Login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const payload = {
      user: {
        id: user.id,
        role: user.role,
      } 
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '1h' },
       (err, token) => {
          if (err) throw err;
          res.json({msg:"Logged in Sucessfully", token, userDetails:user, role: user.role });
        }
      );
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};

// Get all users (Admin Only)
exports.users = async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users from the database
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Get all payment (Admin Only)
exports.payments = async (req, res) => {
  try {
    const payments = await Checkout.find(); // Fetch all payment from the database
    res.status(200).json(payments);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};




