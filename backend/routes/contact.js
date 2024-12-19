const express = require('express');
const Message = require('../models/Message');
const router = express.Router();

// Store a message
router.post('/', async (req, res) => {
    const { name, email, subject, message } = req.body;
  
    if (!name || !email || !subject || !message) {
      console.error('Validation error: All fields are required.');
      return res.status(400).json({ error: 'All fields are required.' });
    }
  
    try {
      const newMessage = new Message({ name, email, subject, message });
      await newMessage.save();
      res.status(200).json({ message: 'Message stored successfully!' });
    } catch (error) {
      console.error('Error saving message to the database:', error); // Log error details
      res.status(500).json({ error: 'Failed to save the message. Please try again later.' });
    }
  });

// Retrieve all messages
router.get('/', async (req, res) => {
  try {
    const messages = await Message.find().sort({ date: -1 }); // Latest messages first
    res.status(200).json(messages);
  } catch (error) {
    console.error('Error retrieving messages:', error);
    res.status(500).json({ error: 'Failed to retrieve messages. Please try again later.' });
  }
});

module.exports = router;