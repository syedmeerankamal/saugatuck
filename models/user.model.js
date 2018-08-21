const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    sessionId: String,
    email: String,
    isAdmin: Boolean,
    hashedPassword: String,
    profile: {
        firstName: String,
        lastName: String,
        displayName: String
    }
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);