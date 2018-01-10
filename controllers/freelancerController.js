var express = require("express");
var fs = require('fs');

var router = express.Router();
var PATH = './public/'

// Import the model (freelancers.js) to use its database functions.
var freelancers = require("../models/freelancers.js");

//Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    if(req.cookies.type === 'F'){
        fs.readFile(PATH + "freelancer-view.html", "utf-8", function(err, data){
            if(err) throw err;
    
            res.send(data);
        })
    } else{
        res.clearCookie('type');
        res.clearCookie('id');
        res.redirect('/')
    }
});

// router.post("/:id", function(req, res) {

// });

// router.put("/", function(req, res) {

// });

// router.delete("/", function(req, res) {

// });

// Export routes for server.js to use.
module.exports = router;
