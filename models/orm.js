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

  addUser: function(values, callback) {
    var queryString = "INSERT INTO users (username, userpassword, user_type) VALUES (?) ";
 
    connection.query(queryString, [values], function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },

  addEmployer: function(values, callback) {
    var queryString = "INSERT INTO employers (employer_id, first_name, last_name, email, company) VALUES (?) ";
 
    connection.query(queryString, [values], function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },

  addFreelancer: function(values, callback) {
    var queryString = "INSERT INTO freelancers (freelancer_id, first_name, last_name, email, phone, photo, rate, bio) VALUES (?) ";
 
    connection.query(queryString, [values], function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },

  addFreelancerSkill: function(id, skill, callback) {
    var queryString = "INSERT INTO freelancer_skills (freelancer_id, skill_id) VALUES (?) ";
 
    connection.query(queryString, [id, skill], function(err, result) {
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

  addJob: function(id, descr, callback) {
    var queryString = "INSERT INTO jobs (employer_id, job_descr) VALUES (?) ";
 
    connection.query(queryString, [id, descr], function(err, result) {
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
    var params = [ { column: value }, { employer_id: id } ];

    connection.query(queryString, params, function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },

    updateFrlProfile: function(id, column, value, callback) {
    var queryString = "UPDATE freelancers SET ? WHERE ?";
    var params = [ { column: value }, { freelancer_id: id } ];

    connection.query(queryString, params, function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },

    updateFrlSkill: function(id, skill, value, callback) {
    var queryString = "UPDATE freelancer_skills SET ? WHERE ?";
    var params = [ { skill_status: value }, { freelancer_id: id } ];

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
