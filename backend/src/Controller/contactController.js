const Contact = require('../Models/contactModel');

const createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const userId = req.user.id;

    console.log('Received contact form data:', req.body); // Log the incoming request body

    const contact = new Contact({
      user: userId,
      name,
      email,
      message
    });

    await contact.save(); // Save contact message in the database

    res.status(201).json({
      message: 'Message sent successfully',
      contact,
    });
  } catch (error) {
    console.error('Error processing contact form:', error); // Log the error
    res.status(500).json({
      message: 'Error processing contact form',
      error: error.message,
    });
  }
};


const getContact = async (req, res) => {
    try {
      const contact = await Contact.find().populate('user');
      res.status(200).json(contact);
    } catch (error) {
      console.error('Error fetching inquiry:', error);
      res.status(500).json({ error: 'Error fetching inquiry' });
    }
  };

module.exports = {
    createContact,
    getContact
};
