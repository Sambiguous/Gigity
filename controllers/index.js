var fs = require('fs');
var express = require("express");
var router = express.Router();


// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    console.log("hit home route")
    fs.readFile("./public/home.html","utf-8", function(err, data){
        if(err) throw err;
        res.send(data)
    })
    //res.send("../public/home.js")

});

// router.post("/", function(req, res) {

// });

// router.put("/", function(req, res) {

// });

// router.delete("/", function(req, res) {

// });

// Export routes for server.js to use.



router.use('/freelancer', require('./freelancerController'))
router.use('/employer', require('./employerController'))



module.exports = router;
