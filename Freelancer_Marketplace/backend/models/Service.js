const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
    freelancer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    title: String,
    description: String,
    price: Number,
    deliveryTime: String,
    category: String,
    ratings: [{ client: String, rating: Number, comment: String }],
});

module.exports = mongoose.model('Service', ServiceSchema);
