const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    minecraftUUID: { type: String },
    avatar: { type: String },
    UserCart: { type: [Object], default: [] },
    luckyDraw: { type: Boolean, default: false },
    luckyDrawMonth: { type: String, default: null },
    luckyDrawTicket: { type: Number , default:null},
    OrderHistory: { type: [Object], default: [] },
    isLuckyDrawWinner: { type: Boolean, default: false },
});

module.exports = mongoose.model('UserData', UserSchema);
