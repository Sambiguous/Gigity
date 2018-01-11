var express = require("express");
var fs = require('fs');

var router = express.Router();
var PATH = './public/'

// Import the model (freelancers.js) to use its database functions.
var employers = require("../models/employers.js");

//Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    console.log(req.cookies);

    fs.readFile(PATH + 'freelancer-board.html', 'utf-8', function(err, data){
        if(err) throw err;
        res.send(data);
    });
});

router.get('/freelancerBoard', function(req, res){

    let dummyData =[
        {
        first_name: 'john',
        last_name: 'Doe',
        skills: ['skill1', 'skill3'],
        photo: 'url',
        rate: 5,
        },
        {
        first_name: 'billy',
        last_name: 'bob',
        skills: ['skill1'],
        photo: 'url',
        rate: 3,
        },
        {
        first_name: 'Jim',
        last_name: 'Miller',
        skills: ['skill4'],
        photo: 'url',
        rate: 5,
        },
    ]

    res.render()
}


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

            res.send({
                status: 'success',
                url: '/employers'
            });
        };
    });
});

// router.put("/", function(req, res) {

// });

router.delete("/", function(req, res) {

});

// Export routes for server.js to use.
module.exports = router;
