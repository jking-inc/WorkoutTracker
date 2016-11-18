'use strict';

var express = require("express");
var router = require('./api');
//var path =  __dirname + '/public/templates';
var app = express();
//console.log(path);
//var path =  __dirname + '/public/templates';

// Require The database
require('./database');
// Require data
require('./seed');

app.use('/', express.static('public'))

app.use('/api', router);

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

/*
router.get("/",function(req,res){
  res.sendFile(path + "/index.html");
  //res.sendFile("/index.html");
});
*/
/*
router.get("/about",function(req,res){
  res.sendFile(path + "/about.html");
});

router.get("/contact",function(req,res){
  res.sendFile(path + "/contact.html");
});
*/
app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(3000,function(){
  console.log("Server is running on Port 3000");
});
