var express = require("express");
var fs = require('fs');

var router = express.Router();
var PATH = './public/'

// Import the model (freelancers.js) to use its database functions.
var employers = require("../models/employers.js");
var freelancers = require("../models/freelancers.js");

//Create all our routes and set up logic within those routes where required.
var currentEmployer;
router.get("/", function(req, res) {
    if(req.cookies.type === 'E'){

        employers.selectAll(function(data){
            if(data === "Database Error"){
                res.send({
                    status: "Internal Database Error"
                });
            }else{
                var freelancerBoard = data
            
                res.render("../views/freelancer-board.handlebars",{freelancers:freelancerBoard}); 
            };
        });
    } else{
        res.clearCookie('type');
        res.clearCookie('id');
        res.redirect('/')
    }
});



router.get("/freelancer/:id", function(req, res){
    var id = req.params.id
    freelancers.getData(id,function(data){
        if(data === "Database Error"){
            res.send({
                status: "Internal Database Error"
            });
        }else{
            console.log("employer controller line 45:", data);
          res.render("../views/freelancer-account.handlebars", data);
        };
    });
});

router.post("/freelancer/messages/:id", function(req, res){
    var id = req.params.id
    var data = req.body

    employers.jobRequest(currentEmployer,id,data,function(data){
    if(data === "Database Error"){
                res.send({
                    status: "Internal Database Error"
                });
            }else{
                console.log(data);
            
            };
        });
});

router.post("/signup", function(req, res) {

    employers.createNew(req.body, function(result){
        if(result === "Database Error"){
            res.send({
                status: "Internal Database Error"
            });
        } else{
            //set cookie with relavent data
            res.cookie('type', result.type);
            res.cookie('id', result.user_id);
            currentEmployer = result.user_id
            res.send({
                status: 'success',
                url: '/employers'
            });
        };
    });
});



 /*
 router.put("/employers/:id", function(req, res) {
    
    employers.update(req.params.id,)
    id, column, value, callback


 });
*/
router.delete("/", function(req, res) {


});

// Export routes for server.js to use.
module.exports = router;
