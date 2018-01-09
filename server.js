var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

//test

var PORT = process.env.PORT || 3005;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Import routes and give the server access to them.
var routes = require("./controllers/index.js");

app.use(routes);

app.listen(PORT, function(){
    console.log("app listening on port", PORT)
});
