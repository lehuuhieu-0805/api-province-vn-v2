const mongoose = require('mongoose');

const { Schema } = mongoose;

const address = new Schema({
  name: String,
});

module.exports = mongoose.model('address', address);