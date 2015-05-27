var mongoose = require('mongoose');

var user_collection = new mongoose.Schema({
  name: String,
  male: Boolean,
  updated_at: { type: Date, default: Date.now },
}, {collection: 'user'});

module.exports = mongoose.model('user', user_collection);