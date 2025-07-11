const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  from_name: String,
  from_email: String,
  message: String,
}, {
  timestamps: true,
});

module.exports = mongoose.model('Message', messageSchema);