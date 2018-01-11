var express = require("express");
var fs = require('fs');

var router = express.Router();
var PATH = './public/'

// Import freelancer model to access its orm functions
var freelancers = require("../models/freelancers.js");

//Create all our routes and set up logic within those routes where required.

//==============================
//FREELANCER LANDING PAGE ROUTE
//==============================
router.get("/", function(req, res) {
    if(req.cookies.type === 'F'){
        fs.readFile(PATH + 'freelancer-view.html', 'utf-8', function(err, data){
            if(err) throw err;
    
            res.send(data);
        })
    } else{
        res.clearCookie('type');
        res.clearCookie('id');
        res.redirect('/')
    }
});

//========================
//FREELANCER SIGNUP ROUTE
//========================
router.post("/signup", function(req, res) {
    console.log(req.body);

    res.render('../views/freelancer-view.handlebars', {
        first_name: "test",
        last_name: "test",
        skills: ["skill1", "skill2"],
        rate: 45.00,
        email: "email@email",
        photo: 'https://static.pexels.com/photos/324658/pexels-photo-324658.jpeg',
        reviews: [{review: "text"}, {review: "text"}]
    });

});

// router.put("/", function(req, res) {

// });

// router.delete("/", function(req, res) {

// });

// Export routes for server.js to use.
module.exports = router;
