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
    
    if(req.cookies.type === 'F'){//ensure user has appropriate cookies

        freelancers.getData(req.cookies.id, function(result){

            res.render('../views/freelancer-view.handlebars', result)
        });

     } else{//if invalid or no cookies are found, clear any cookies and redirect user to homepage.
        res.clearCookie('type');
        res.clearCookie('id');
        res.redirect('/')
    };
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

// Export routes for server.js to use.
module.exports = router;
