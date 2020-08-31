
//1. require mongoose
const mongoose = require('mongoose');
//2. connect
mongoose.connect('mongodb+srv://app-chat-db:app-chat-db@cluster0.5juzv.azure.mongodb.net/chat-db?retryWrites=true&w=majority', { useUnifiedTopology: true })
//3. create Schema
const userSchema = new mongoose.Schema({
    id: Number,
    userName: String,
    fullName: String,
    email: String,
    birthday: String,
    avatar: String,
    cover: String,
    isVerified: Boolean
});
//4. create Model
const user = mongoose.model('user', userSchema)
//5. CRUD
// user.create({
//     id: 2,
//     userName: "toan",
//     fullName: "Thai Quoc Toan",
//     email: "17521141@gm.uit.edu.vn",
//     birthday: "31/8/2020",
//     avatar: "aaaa",
//     cover: "bbbb",
//     isVerified: false
// });
user.find().exec((err, users) => {
    console.log(users);
});