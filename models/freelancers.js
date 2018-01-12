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
      })

      let frlSkillsTableData = []
      for(i in requestData.skills){
        orm.addFreelancerSkill([userResult.insertId, requestData.skills[i]], function(result){})
        console.log([userResult.insertId, requestData.skills[i]])
      }
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = freelancers;
