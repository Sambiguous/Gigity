// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // Freelancer account form 
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/test.html"));
  });

  // Freelancer review form
  app.get("/", function(req, res) {});


  // Employer account form
  app.get("/2", function(req, res) {});

  // Employer review form
  app.get("/3", function(req, res) {});

  // Inbox
  app.get("/4", function(req, res) {});

  // 
  app.get("/5", function(req, res) {});

};
