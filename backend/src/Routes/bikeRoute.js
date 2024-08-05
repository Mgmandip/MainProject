const express = require('express');
const router = express.Router();

const authMiddleware = require('../Middleware/authMiddleware');
const { authorizeRole } = require('../Middleware/authorizationMiddleware');
const { bikeImage } = require('../Middleware/uploadMiddleware');
const {
  createBike,
  updateBike,
  deleteBike,
  getBike,
  getBikes
} = require('../Controller/bikeController');

/**
 * @description Create a new bike
 * @route POST /api/bikes
 * @access Private/Admin
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} response - The response object containing the created bikes
 */
router.post('/', authMiddleware, authorizeRole('admin'), bikeImage.single('bikeImage'), createBike);

/**
 * @description Update an existing bike
 * @route PUT /api/bikes/:id
 * @access Private/Admin
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} response - The response object containing the updated bikes
 */
router.patch('/:id', authMiddleware, authorizeRole('admin'), bikeImage.single('bikeImage'), updateBike);

/**
 * @description Delete a bike
 * @route DELETE /api/bikes/:id
 * @access Private/Admin
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} response - The response object confirming deletion
 */
router.delete('/:id', authMiddleware, authorizeRole('admin'), deleteBike);

/**
 * @description Get a single bike by ID
 * @route GET /api/bikes/:id
 * @access Public
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} response - The response object containing the bike data
 */
router.get('/:id', getBike);

/**
 * @description Get all bikes
 * @route GET /api/bikes
 * @access Public
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} response - The response object containing an array of bikes
 */
router.get('/', getBikes);

module.exports = router;