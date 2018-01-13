// Import the ORM to create functions that will interact with the database.
var orm = require("./orm.js");

var employers = {

  createNew: function(requestData, callback){
    let userTableData = {
      user_email: requestData.email,
      user_password: requestData.password,
      user_type: requestData.type
    }

    orm.insertOne('users', userTableData, function(result){
      if(result === "Database Error"){
        callback(result)
        return;
      }
      let empTableData = {
        user_id: result.insertId,
        first_name: requestData.first_name,
        last_name: requestData.last_name,
        email: requestData.email,
        company: requestData.company
      };

      orm.insertOne('employers', empTableData, function(finalResult){
        if(finalResult === "Database Error"){
          callback(finalResult);
          return;
        }
        let responseToController = {
          user_id: result.insertId,     // id in users table
          type: 'E'   
        }
        callback(responseToController);
      });
    });
  },
  selectAll: function(callback) {
    orm.selectAll("freelancers",function(res) {
      callback(res);
    });
  },
  jobRequest: function(requestData,callback) {
    var message = requestData.message;
    var userId = requestData.id;
    var email = requestData.email;
    orm.addJob(userId,email,message,function(res) {
      callback(res);
   
    });
  },

  selectBySkill: function(skill, callback) {

    orm.findFreelancerBySkill(skill, function(result) {

      callback(result);
    });
  }
};

module.exports = employers;
