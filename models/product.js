const mongoose = require('mongoose');
const ProductSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  action: {
    type: Number,
    require: true
  },
  time: {
    type: String,
    require: true
  }
});

module.exports = mongoose.model('Product', ProductSchema);