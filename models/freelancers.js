// Import the ORM to create functions that will interact with the database.
var orm = require("./orm.js");


var freelancers = {
  
  createNew: function(requestData, callback){

    orm.addUser([requestData.email, requestData.password, requestData.type], function(userResult){

      let frlTableData = [userResult.insertId, requestData.first_name, requestData.last_name, requestData.email, requestData.photo, parseFloat(requestData.rate)]

      orm.addFreelancer(frlTableData, function(frlResult){
        let responseToController = {
          user_id: userResult.insertId,
          type: 'F'
        }
        callback(responseToController);

        let frlSkillsTableData = []
        for(i in requestData.skills){
          orm.addFreelancerSkill([userResult.insertId, requestData.skills[i]], function(result){})
          console.log('freelancer.js', [userResult.insertId, requestData.skills[i]])
        }
      });


    });
  }, 

  getData: function(user_id, callback){

    var data = {};

    orm.getFreelancerSkillsByID(user_id,function(result) {
      

      var skills = [];

      for(i = 0; i < result.length; i++) {
        skills.push(result[i].descr);
      }

      data.first_name = result[0].first_name;
      data.last_name = result[0].last_name;
      data.skills = skills;
      data.email = result[0].email;
      data.rate = result[0].rate;
      data.photo = result[0].photo;
      data.id = result[0].user_id;

      orm.findFreelancerReviewsByID(user_id, function(result) {

        var reviews = []; 
  
        for(i = 0; i < result.length; i++) {
          var tempObj = {};
  
          tempObj.employer = result[i].company;
          tempObj.rating = result[i].rating;
          tempObj.review = result[i].review;
  
          reviews.push(tempObj);
        }
        
        data.reviews = reviews;
        data.hasReviews = reviews.length > 0;
        console.log(data);
        callback(data);
      });
    });
  }, 

  getEmpToReview: function(user_id, callback){

    orm.findEmpToReview(user_id, function(result) {

      var employers = [];

      for(i = 0; i < result.length; i++) {
        employers.push(result[i].company);
      }

      callback(employers);
    });
  }, 

  addReview: function(values, callback){

    orm.addReview(values, function(result) {

      var response = {
        review_id: result.insertId,
      }
      callback(response);

    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = freelancers;
