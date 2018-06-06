var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/mha_campaign");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));


app.get("/", function(req, res){
   res.render("landing");
});

app.get("/about", function(req, res){
   res.render("about");
});

app.get("/blog", function(req, res){
   res.send("You have reached blog page.")
});

app.get("/contact", function(req, res){
   res.send("You have reached Contact Me page.")
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Website has started.");
});