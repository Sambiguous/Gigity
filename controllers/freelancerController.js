var express = require("express");
var fs = require('fs');

var router = express.Router();
var PATH = './public/'

// Import the model (freelancers.js) to use its database functions.
var freelancers = require("../models/freelancers.js");

//Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    //code to read cookies goes here

    fs.readFile(PATH + "freelancer-view.html", "utf-8", function(err, data){
        if(err) throw err;

        res.send(data);
    })

});

// router.post("/:id", function(req, res) {

// });

// router.put("/", function(req, res) {

// });

// router.delete("/", function(req, res) {

// });

// Export routes for server.js to use.
module.exports = router;
