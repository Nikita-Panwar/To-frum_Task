const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    quantity: { type: Number, default: 1 },
    description: String
}, { timestamps: true });

module.exports = mongoose.model('Item', itemSchema);
