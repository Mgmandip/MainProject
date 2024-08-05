const Bike = require("../Models/bikeModel");
const domain = "http://localhost:5000";

// Helper function to send error responses
const sendErrorResponse = (res, error) => {
  console.log(error);
  res.status(500).json({ msg: error.message });
};

// Create a new product (Admin Only)
const createBike = async (req, res) => {
  try {
    const {
      name,
      price,
      bikeImage,
      displacement,
      horsepower,
      dryweight,
      seatheight,
      saftey,
    } = req.body;
    let bikeData = {
      name,
      price,
      bikeImage,
      displacement,
      horsepower,
      dryweight,
      seatheight,
      saftey,
    };

    if (req.file) {
      const bikeImage = `${domain}/uploads/bikes/${req.file.filename}`;
      bikeData.bikeImage = bikeImage;
    }

    const bike = new Bike(bikeData); // Corrected this line
    await bike.save();

    res.status(201).json({
      msg: "Bike added successfully",
      bike: bike,
      success: true,
    });
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

// Update a product (Admin Only)
const updateBike = async (req, res) => {
  try {
    const {
      name,
      price,
      bikeImage,
      displacement,
      horsepower,
      dryweight,
      seatheight,
      saftey,
    } = req.body;
    let updateData = {
      name,
      price,
      bikeImage,
      displacement,
      horsepower,
      dryweight,
      seatheight,
      saftey,
    };

    if (req.file) {
      const bikeImage = `${domain}/uploads/bikes/${req.file.filename}`;
      updateData.bikeImage = bikeImage;
    }

    const bike = await Bike.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });

    if (!bike) {
      return res.status(404).json({ msg: "Product not found" });
    }

    res.status(200).json({
      msg: "Bike's information updated successfully",
      bike: bike,
      success: true,
    });
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

// Get all products (Public) 
const getBikes = async (req, res) => {
  try {
    const { search, sort } = req.query;
    let query = {};
    if (search) {
      query.name = { $regex: search, $options: "i" };
    }

    let bikes = await Bike.find(query);

    if (sort) {
      const sortOrder = sort === "asc" ? 1 : -1;
      bikes = bikes.sort((a, b) => (a.price - b.price) * sortOrder);
    }

    res.status(200).json(bikes);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Get all products (Public) ////////------------Search
const searchBikes = async (req, res) => {
  const { search, sort } = req.query;
  let query = {};
  if (search) {
    query.name = { $regex: search, $options: "i" };
  }

  let bikes = await Bike.find(query);

  if (sort) {
    const sortOrder = sort === "asc" ? 1 : -1;
    bikes = bikes.sort((a, b) => (a.price - b.price) * sortOrder);
  }

  res.json(bikes);
};

// Get all products (Public) and filter by category
const getBikesByCategory = async (req, res) => {
  try {
    const bikes = await Bike.find({ category: req.params.categoryId });
    res.status(200).json(bikes);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

// Get a single product by ID (Public)
const getBike = async (req, res) => {
  try {
    const bike = await Bike.findById(req.params.id);

    if (!bike) {
      return res.status(404).json({ msg: "Bike not found" });
    }

    res.status(200).json(bike);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

// Delete a product (Admin Only)
const deleteBike = async (req, res) => {
  try {
    const bike = await Bike.findByIdAndDelete(req.params.id);

    if (!bike) {
      return res.status(404).json({ msg: "Bike not found" });
    }

    res
      .status(200)
      .json({ msg: "Bike deleted successfully", success: true });
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

module.exports = {
  createBike,
  updateBike,
  getBikes,
  searchBikes,
  getBike,
  deleteBike,
};
