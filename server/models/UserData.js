const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    minecraftUUID: { type: String },
    avatar: { type: String },
    UserCart: { type: [Object], default: [] },
});

module.exports = mongoose.model('UserData', UserSchema);
