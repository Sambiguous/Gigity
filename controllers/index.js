var express = require("express");
var fs = require('fs');

var router = express.Router();
var PATH = './public/'


//
router.get("/", function(req, res) {

    fs.readFile(PATH + 'home.html', 'utf-8', function(err, data){
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
