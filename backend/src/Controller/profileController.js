const domain = "http://localhost:5000";
const UserProfiles = require("../Models/userProfile");

// Helper function to send error responses
const sendErrorResponse = (res, error) => {
  res.status(500).json({ msg: error.message });
};

// Update user profile as it is created during registration
// src/Controller/profileController.js

const updateUserProfile = async (req, res) => {
  try {
    const { name, address, dateOfBirth, phoneNumber, country, city, zipCode } = req.body;

    const updatedProfile = await UserProfiles.findOneAndUpdate(
      { user: req.user.id }, 
      { 
        name, 
        address, 
        dateOfBirth, 
        phoneNumber, 
        country, 
        city, 
        zipCode 
      }, 
      { new: true, runValidators: true }
    );

    if (!updatedProfile) {
      return res.status(404).json({ msg: "Profile not found" });
    }

    res.status(200).json({ profile: updatedProfile });
  } catch (error) {
    res.status(500).json({ msg: "Failed to update profile", error: error.message });
  }
};


// Get user profile
const getUserProfile = async (req, res) => {
  try {
    const profile = await UserProfiles.findOne({ user: req.user.id }).populate(
      "user",
      ["name", "email"]
    );
    if (!profile) {
      return res.status(404).json({ msg: "Profile not found" });
    }
    res.status(200).json({ profile });
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

// Get all user profiles
const getAllUserProfiles = async (req, res) => {
  try {
    const profiles = await UserProfiles.find().populate("user", [
      "name",
      "email",
    ]);
    res.status(200).json({ profiles });
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

// Get user profile by ID
const getUserProfileById = async (req, res) => {
  try {
    const profile = await UserProfiles.findOne({
      user: req.params.id,
    }).populate("user", ["name", "email"]);
    if (!profile) {
      return res.status(404).json({ msg: "Profile not found" });
    }
    res.status(200).json({ profile });
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

// Delete user profile
const deleteUserProfile = async (req, res) => {
  try {
    const profile = await UserProfiles.findOneAndDelete({ user: req.user.id });
    if (!profile) {
      return res.status(404).json({ msg: "Profile not found" });
    }
    res.status(200).json({ msg: "Profile deleted successfully" });
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

// // Get all users (Admin Only)
// const getUsers = async (req, res) => {
//   try {
//     const users = await UserProfiles.find(); // Fetch all users from the database
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(500).json({ msg: error.message });
//   }
// };

//  exporting the controller functions
module.exports = {
  updateUserProfile,
  getUserProfile,
  getAllUserProfiles,
  getUserProfileById,
  deleteUserProfile,
  // getUsers
};