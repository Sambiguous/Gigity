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

    connection.query(queryString, [table], function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },

  addUser: function(values, callback) {
    var queryString = "INSERT INTO users (user_email, user_password, user_type) VALUES (?) ";
 
    connection.query(queryString, [values], function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },

  addEmployer: function(values, callback) {
    var queryString = "INSERT INTO employers (user_id, first_name, last_name, email, company) VALUES (?) ";
 
    connection.query(queryString, [values], function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },

  addFreelancer: function(values, callback) {
    var queryString = "INSERT INTO freelancers (user_id, first_name, last_name, email, photo, rate) VALUES (?) ";
 
    connection.query(queryString, [values], function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },

  addFreelancerSkill: function(values, callback) {
    var queryString = "INSERT INTO freelancer_skills (user_id, skill_id) VALUES (?) ";
 
    connection.query(queryString, [values], function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },

  addSkillType: function(skill, callback) {
    var queryString = "INSERT INTO skill_types (descr) VALUES (?) ";
 
    connection.query(queryString, [skill], function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },

  addJob: function(freelancerId, email, message,callback) {
    var queryString = "INSERT INTO jobs (freelancer_id,employer_email,job_descr) VALUES (?, ?, ?)";
 
    connection.query(queryString, [freelancerId, email, message], function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },

  addJobStat: function(descr, callback) {
    var queryString = "INSERT INTO job_stats (descr) VALUES (?) ";
 
    connection.query(queryString, [descr], function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },

  addReview: function(values, callback) {
    var queryString = "INSERT INTO reviews (reviewer_id, reviewee_id, rating, review) VALUES (?) ";
 
    connection.query(queryString, [values], function(err, result) {
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

    updateEmpProfile: function(id, column, value, callback) {
    var queryString = "UPDATE employers SET ? WHERE ?";
    var params = [ { column: value }, { user_id: id } ];

    connection.query(queryString, params, function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },

    updateFrlProfile: function(id, column, value, callback) {
    var queryString = "UPDATE freelancers SET ? WHERE ?";
    var params = [ { column: value }, { user_id: id } ];

    connection.query(queryString, params, function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },

    updateFrlSkill: function(id, skill, value, callback) {
    var queryString = "UPDATE freelancer_skills SET ? WHERE ?";
    var params = [ { skill_status: value }, { user_id: id } ];

    connection.query(queryString, params, function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },

    updateJobPosting: function(jobid, column, value, callback) {
    var queryString = "UPDATE jobs SET ? WHERE ?";
    var params = [ { column: value }, { job_id: jobid } ];

    connection.query(queryString, params, function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },

    updateJobStatus: function(jobid, status, callback) {
    var queryString = "UPDATE jobs SET ? WHERE ?";
    var params = [ { job_status: status }, { job_id: jobid } ];

    connection.query(queryString, params, function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },

    updateReview: function(reviewid, column, value, callback) {
    var queryString = "UPDATE jobs SET ? WHERE ?";
    var params = [ { column: value }, { review_id: reviewid } ];

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

    findJobsByStatus: function(status, callback) {
    var queryString = "SELECT * FROM jobs WHERE job_status = ? ";

    connection.query(queryString, [status], function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },

    findMyJobsByStatus: function(id, status, callback) {
    var queryString = "SELECT * FROM jobs WHERE job_status = ? ";
    queryString += "AND (employer_id = ? OR freelancer_id = ?) ";

    connection.query(queryString, [status, id, id], function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },

    findJobsByDescr: function(descr, callback) {
    var queryString = "SELECT * FROM jobs WHERE job_descr LIKE ? ";
    var params = '%' + descr + '%';

    connection.query(queryString, params, function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },

    findJobsToReviewFl: function(id, callback) {
    var queryString = "SELECT * FROM jobs J WHERE J.freelancer_id = ? ";
    queryString += "AND J.job_status = 4 AND NOT EXISTS ";
    queryString += "(SELECT * FROM reviews R WHERE R.job_id = J.job_id ";
    queryString += "AND R.reviewer_id = J.freelancer_id)";

    connection.query(queryString, [id], function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },

    findEmpToReview: function(id, callback) {
    var queryString = "SELECT * FROM jobs J ";
    queryString += "INNER JOIN employers E ON E.user_id = J.employer_id ";
    queryString += "WHERE J.freelancer_id = ? ";
    queryString += "AND J.job_status = 4 AND NOT EXISTS ";
    queryString += "(SELECT * FROM reviews R WHERE R.job_id = J.job_id ";
    queryString += "AND R.reviewer_id = J.freelancer_id)";

    connection.query(queryString, [id], function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },

    findJobsToReviewEmp: function(id, callback) {
    var queryString = "SELECT * FROM jobs J WHERE J.employer_id = ? ";
    queryString += "AND J.job_status = 4 AND NOT EXISTS ";
    queryString += "(SELECT * FROM reviews R WHERE R.job_id = J.job_id ";
    queryString += "AND R.reviewer_id = J.employer_id)";

    connection.query(queryString, [id], function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },

    findEmployerReviewsByID: function(user_id, callback) {
    var queryString = "SELECT * FROM reviews R "; 
    queryString += "INNER JOIN employers E ON R.reviewee_id = E.user_id "; 
    queryString += "INNER JOIN freelancers F ON F.user_id = R.reviewer_id ";
    queryString += "WHERE E.user_id = ? ";

    connection.query(queryString, [user_id], function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },

    findFreelancerReviewsByID: function(user_id, callback) {
    var queryString = "SELECT * FROM reviews R "; 
    queryString += "INNER JOIN freelancers F ON R.reviewee_id = F.user_id "; 
    queryString += "INNER JOIN employers E ON E.user_id = R.reviewer_id "; 
    queryString += "WHERE F.user_id = ? ";

    connection.query(queryString, [user_id], function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },

    findFreelancerBySkill: function(skill, callback) {
    var queryString = "SELECT * FROM freelancers F "; 
    queryString += "INNER JOIN freelancer_skills FS ON F.user_id = FS.user_id "; 
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
    queryString += "INNER JOIN freelancer_skills FS ON F.user_id = FS.user_id "; 
    queryString += "INNER JOIN skill_types ST ON FS.skill_id = ST.type_id "; 
    queryString += "WHERE FS.skill_status = true AND F.user_id = ? ";

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