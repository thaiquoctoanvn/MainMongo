const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    id: Number,
    userName: String,
    fullName: String,
    email: String,
    birthday: String,
    avatar: String,
    cover: String,
    isVerified: Boolean
})

module.exports = mongoose.model('user', UserSchema);