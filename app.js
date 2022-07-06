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

app.listen(9000, function(){
    console.log("Server started on port 3000");
})

app.get("/about", function(req, res){
    res.render("about");
})
app.get("/tuner", function(req, res){
    res.render("tuner");
})
app.get("/metronome", function(req, res){
    res.render("metronome");
})


app.get("/exercises", function(req, res){
    res.render("exercises");
})

app.get("/exercises/chords", function(req, res){
    res.render("chords");
})
app.get("/exercises/scales", function(req, res){
    res.render("scales");
})

app.get("/exercises/notes", function(req, res){
    res.render("notes");
})

app.get("/signup", function(req, res){
    res.render("signup");
})

app.get("/login", function(req, res){
    res.render("login");
})

app.get("/community", function(req, res){
    res.render("community");
})

app.get("/tools", function(req, res){
    res.render("tools");
})