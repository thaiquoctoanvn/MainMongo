const express = require('express');
const mongoose = require('mongoose');
const app = express();

//database
mongoose.connect(
    'mongodb+srv://app-chat-db:password@cluster0.5juzv.azure.mongodb.net/chat-db?retryWrites=true&w=majority',
    {useNewUrlParser: true }
).then( () => console.log("Connected to database"));

//middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//controllers
var welcom = require('./WelcomeControll');
var user = require('./UserControll');

//router
app.use('', welcom);
app.use('/api/user', user);

//start server
app.listen(process.env.PORT || 8000, () => console.log("Server is running on port 8000"));
