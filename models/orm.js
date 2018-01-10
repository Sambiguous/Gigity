// Import MySQL connection.
var connection = require("../config/connection.js");

// Helper function for SQL syntax.
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

//function to convert object key/value pairs to SQL syntax
function objectToSql(obj) {
  var tempArray = [];

  //loop through the keys and push the key/value as a string int arr
  for (var key in obj) {
    var value = obj[key];
    //check to skip hidden properties
    if (Object.hasOwnProperty.call(obj, key)) {
      // if string with spaces, add quotes
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      tempArray.push(key + "=" + value);
    }
  }

  //translate array of strings to a single comma-separated string
  return tempArray.toString();
}

//object containing functions for SQL queries
var orm = {
  select: function(table, condition, callback){
    var querystring = "SELECT * FROM ?? WHERE ? ";
    var params = [table, condition];

    connection.query(querystring, params, function(err, result){
      if(err) throw err;

      callback(result);
    })
  },

  selectAll: function(table, callback) {
    var queryString = "SELECT * FROM ?? ";

    connection.query(queryString, [table], function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },

    updatePassword: function(id, password, callback) {
    var queryString = "UPDATE users SET ? WHERE ?";
    var params = [ { userpassword: password }, { user_id: id } ];

    connection.query(queryString, params, function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },

    findEmployer: function(column, value, callback) {
    var queryString = "SELECT * FROM employers WHERE ? ";

    connection.query(queryString, { column: value }, function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },

    findFreelancer: function(column, value, callback) {
    var queryString = "SELECT * FROM freelancers WHERE ? ";

    connection.query(queryString, { column: value }, function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },

    findEmployerReviewsByID: function(user_id, callback) {
    var queryString = "SELECT * FROM reviews R "; 
    queryString += "INNER JOIN employers E ON R.reviewee_id = E.employer_id "; 
    queryString += "INNER JOIN freelancers F ON F.freelancer_id = R.reviewer_id ";
    queryString += "WHERE E.employer_id = ? ";

    connection.query(queryString, [user_id], function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },

    findFreelancerReviewsByID: function(user_id, callback) {
    var queryString = "SELECT * FROM reviews R "; 
    queryString += "INNER JOIN freelancers F ON R.reviewee_id = F.freelancer_id "; 
    queryString += "INNER JOIN employers E ON E.employer_id = R.reviewer_id "; 
    queryString += "WHERE F.freelancer_id = ? ";

    connection.query(queryString, [user_id], function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },

    findFreelancerBySkill: function(skill, callback) {
    var queryString = "SELECT * FROM freelancers F "; 
    queryString += "INNER JOIN freelancer_skills FS ON F.freelancer_id = FS.freelancer_id "; 
    queryString += "INNER JOIN skill_types ST ON FS.skill_id = ST.type_id "; 
    queryString += "WHERE FS.skill_status = true AND ST.descr = ? ";

    connection.query(queryString, [skill], function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },

    getFreelancerSkillsByID: function(user_id, callback) {
    var queryString = "SELECT * FROM freelancers F "; 
    queryString += "INNER JOIN freelancer_skills FS ON F.freelancer_id = FS.freelancer_id "; 
    queryString += "INNER JOIN skill_types ST ON FS.skill_id = ST.type_id "; 
    queryString += "WHERE FS.skill_status = true AND F.freelancer_id = ? ";

    connection.query(queryString, [user_id], function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  }
};

// Export the orm object for the model (cat.js).
module.exports = orm;
