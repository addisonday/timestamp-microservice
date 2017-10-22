'use strict';

// set up ========================
var express    = require('express'),
    app        = express(),               // create our app w/ express
    bodyParser = require('body-parser'), // pull information from HTML POST (express4)
    path       = require('path');

// configuration =================
app.use(express.static(path.join(__dirname, 'public'))); // Serve files in public folder
app.use(bodyParser.json()); // parse application/json



// listen (start app with node server.js) ======================================
app.listen(3000, function (err){
  if(err){
    console.log(err);
  }else {
    console.log("Running of port 3000");
  }
})