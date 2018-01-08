var express = require("express");
var fs = require('fs');

var router = express.Router();
var PATH = './public/'


var orm = require('../models/orm.js')


router.use('/freelancer', require('./freelancerController'))
router.use('/employer', require('./employerController'))


//HOMEPAGE
router.get("/", function(req, res) {

    fs.readFile(PATH + 'home.html', 'utf-8', function(err, data){
        if(err) throw err;
        res.send(data)
    })
});

//LOGIN
router.post("/login", function(req, res){

    orm.select('users', {username: req.body.email}, function(result){
        if(result[0]){
            if(req.body.pass === result[0].userpassword){
                //validation success stuff goes here
                res.send("login success");
            } else{
                res.send("login failed");
            }
        } else{
            res.send("login failed");
        }      
    });
});

// router.put("/", function(req, res) {

// });

// router.delete("/", function(req, res) {

// });

// Export routes for server.js to use.


module.exports = router;
