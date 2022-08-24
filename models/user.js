const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
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


module.exports = mongoose.model('User', UserSchema);