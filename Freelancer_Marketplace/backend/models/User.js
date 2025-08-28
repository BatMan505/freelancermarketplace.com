const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    role: { type: String, enum: ['freelancer', 'client'], required: true },
    skills: [String],
    rating: { type: Number, default: 0 },
});

module.exports = mongoose.model('User', UserSchema);
