var express = require("express");

var router = express.Router();

// Import the model (freelancers.js) to use its database functions.
var cat = require("../models/freelancers.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {

});

router.post("/", function(req, res) {

});

router.put("/", function(req, res) {

});

router.delete("/", function(req, res) {

});

// Export routes for server.js to use.
module.exports = router;
