const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
const { forEach } = require("lodash");
 var _ = require('lodash');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');
const mongoose = require("mongoose");
const encryption = require("mongoose-encryption");
mongoose.connect("mongodb://localhost:27017/userDB");
app.get("/", function(req, res){
    res.render("home");
})
app.get("/", function(req, res){
    res.render("home");
})
app.listen(10000, function(){
    console.log("Server started on port 3000");
})

app.get("/about", function(req, res){
    res.render("about");
})