var express = require("express");
var fs = require('fs');

var router = express.Router();
var PATH = './public/'

// Import freelancer model to access its orm functions
var freelancers = require("../models/freelancers.js");


//==============================
//FREELANCER LANDING PAGE ROUTE
//==============================
router.get("/", function(req, res) {

    if(req.cookies.type === 'F'){
        console.log('freelancercontroller.js: cookies found. querying database with id:', req.cookies.id);

        freelancers.getData(req.cookies.id, function(result){
            console.log('successful response from database:', result);

            res.render('../views/freelancer-view.handlebars', result)
        });

        // res.render('../views/freelancer-view.handlebars', {
        //     first_name: "test",
        //     last_name: "test",
        //     skills: ["skill1", "skill2"],
        //     rate: 45.00,
        //     email: "email@email",
        //     photo: 'https://static.pexels.com/photos/324658/pexels-photo-324658.jpeg',
        //     hasReviews: true,
        //     reviews: [{review: "text"}, {review: "text"}]
        // });

     } else{
        res.clearCookie('type');
        res.clearCookie('id');
        res.redirect('/')
    } 
});

//=========================
//FREELANCER SIGN-UP ROUTE
//=========================
router.post("/signup", function(req, res) {
    let data = req.body
    
    //clean up object for use by the controller
    data.skills = data['skills[]']
    delete data['skills[]']

    freelancers.createNew(data, function(result){

        //set cookie with relevent data

        res.cookie('type', result.type);
        res.cookie('id', result.user_id);;

        res.send({
            status: 'success',
            url: '/freelancers'
        });
    });
});



// router.put("/", function(req, res) {

// });

// router.delete("/", function(req, res) {

// });

// Export routes for server.js to use.
module.exports = router;
