var express = require("express");
var fs = require('fs');

var router = express.Router();
var PATH = './public/'

// Import the model (freelancers.js) to use its database functions.
var employers = require("../models/employers.js");

//Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {

    //res.send(PATH + employer-review.html)
    res.send("this is the employer page")

});

router.post("/", function(req, res) {

});

router.put("/", function(req, res) {

});

router.delete("/", function(req, res) {

});

// Export routes for server.js to use.
module.exports = router;
