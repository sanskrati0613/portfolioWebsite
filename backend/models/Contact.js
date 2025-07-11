const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  from_name: String,
  from_email: String,
  message: String,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Contact', contactSchema);
