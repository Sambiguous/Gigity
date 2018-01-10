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
    var querystring = "SELECT * FROM ?? WHERE ?;"
    var params = [table, condition];

    connection.query(querystring, params, function(err, result){
      if(err) throw err;

      callback(result);
    })
  },

  //INSERT NEW ROW INTO ANY TABLE
  insertOne: function(table, valueObject, callback){
    let sql = "INSERT INTO ?? (??) VALUES (?);";
    let params = [table];

    let param_cols = [];
    let param_vals = [];

    for(var key in valueObject){
      param_cols.push(key);
      param_vals.push(valueObject[key])
    };

    params.push(param_cols);
    params.push(param_vals);

    connection.query(sql, params, function(err, result, feilds){
      if(err){
        callback("Database Error");
        throw err;
      }

      callback(result)
    })
  },

  selectAll: function(table, callback) {
    var queryString = "SELECT * FROM ?? ";

    connection.query(queryString, table, function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },

    updatePassword: function(id, password, callback) {
    var queryString = "UPDATE users SET ? WHERE ?";

    connection.query(queryString, [ { userpassword: password }, { user_id: id } ], function(err, result) {
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
    var queryString = "SELECT reviews.review_id, reviews.reviewer_id, freelancers.first_name, freelancers.last_name, reviews.reviewee_id, employers.company, employers.first_name, employers.last_name, reviews.reviewee_id, reviews.rating, reviews.review FROM reviews INNER JOIN employers ON reviews.reviewee_id = employers.employer_id INNER JOIN freelancers ON freelancers.freelancer_id = reviews.reviewer_id WHERE employers.employer_id = ? ";

    connection.query(queryString, [user_id], function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },

    findFreelancerReviewsByID: function(user_id, callback) {
    var queryString = "SELECT reviews.review_id, reviews.reviewer_id, freelancers.first_name, freelancers.last_name, reviews.reviewee_id, employers.company, employers.first_name, employers.last_name, reviews.reviewee_id, reviews.rating, reviews.review FROM reviews INNER JOIN employers ON reviews.reviewer_id = employers.employer_id INNER JOIN freelancers ON freelancers.freelancer_id = reviews.reviewee_id WHERE freelancers.freelancer_id = ?;";

    connection.query(queryString, [user_id], function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },

    findFreelancerBySkill: function(skill, callback) {
    var queryString = "SELECT * FROM freelancers INNER JOIN freelancer_skills ON freelancers.freelancer_id = freelancer_skills.freelancer_id INNER JOIN skill_types ON freelancer_skills.skill_id = skill_types.type_id WHERE freelancer_skills.skill_status = true AND skill_types.descr = ?;";

    connection.query(queryString, [skill], function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },

    getFreelancerSkillsByID: function(user_id, callback) {
    var queryString = "SELECT * FROM freelancers INNER JOIN freelancer_skills ON freelancers.freelancer_id = freelancer_skills.freelancer_id INNER JOIN skill_types ON freelancer_skills.skill_id = skill_types.type_id WHERE freelancer_skills.skill_status = true AND freelancers.freelancer_id = ?;";

    connection.query(queryString, [user_id], function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },

  // insertOne: function(table, column, value, callback) {
  //   var queryString = "INSERT INTO " + table + " (" + column.toString() + ") VALUES (?) ";

  //   console.log(queryString);

  //   connection.query(queryString, value, function(err, result) {
  //     if (err) {
  //       throw err;
  //     }

  //     callback(result);
  //   });
  // },
  updateOne: function(table, objColVal, condition, callback) {
    var queryString = "UPDATE " + table + " SET " + objectToSql(objColVal) + " WHERE " + condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      callback(result);
    });
  }
};

// Export the orm object for the model (cat.js).
module.exports = orm;