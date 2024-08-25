const express = require('express');
const router = express.Router();
const { createContact, getContact } = require('../Controller/contactController'); // Adjust the path as needed
const authenticate = require('../Middleware/authMiddleware'); // Adjust the path as needed

router.post('/', authenticate, createContact); // When payment is successful, both checkout and order are created
router.get('/get', authenticate, getContact);

module.exports = router;
