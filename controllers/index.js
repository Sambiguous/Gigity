var express = require("express");
var fs = require('fs');

var router = express.Router();
var PATH = './public/'

var orm = require('../models/orm.js')

//CUSTOM MODELS
router.use('/freelancers', require('./freelancerController'))
router.use('/employers', require('./employerController'))


//HOMEPAGE ROUTE
router.get("/", function(req, res) {
    if(req.cookies.type){ //if cookies are found, send user to relevant landing page
        let url = req.cookies.type === 'F' ? '/freelancers' : '/employers';

        res.redirect(url);

    } else{ //if no cookies are found, send user to homepage
        fs.readFile(PATH + 'home.html', 'utf-8', function(err, data){
            if(err) throw err;
            res.send(data)
        });
    };
});

//LOGIN ROUTE
router.post("/login", function(req, res){
    console.log("req.body", req.body)

    orm.select('users', {user_email: req.body.email}, function(result){
        if(result[0]){
            if(req.body.pass === result[0].user_password){
                //determine if employer or freelancer and set redirect url
                let url = result[0].user_type === 'F' ? '/freelancers' : '/employers'

                console.log(result[0])

                res.cookie('type', result[0].user_type, {maxAge: 1000 * 60 * 60});
                res.cookie('id', result[0].user_id, { maxAge: 1000 * 60 * 60});

                res.send({
                    status: "success",
                    url: url
                })
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
