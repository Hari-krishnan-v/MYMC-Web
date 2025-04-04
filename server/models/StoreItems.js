const mongoose = require('mongoose');

const storeItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: Array,
    price: { type: Number, required: true },
    category: {
        type: String,
        enum: ['Claim Blocks', 'Money', 'Kits', 'Homes'],
        required: true,
    },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('StoreItem', storeItemSchema);