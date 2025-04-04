// server/models/UserData.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    UserCart: {
        type: Array,
        default: [],
    },
});

module.exports = mongoose.model('UserData', UserSchema);