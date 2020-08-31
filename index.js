var express = require("express");
var app = express();
let port = process.env.PORT || 3000;


require("./connnect_db.js");

app.listen(port, () => {
    console.log("Server running");
});