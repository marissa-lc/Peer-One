const path = require("path");

// Require some data models for use in dynamic rendering of HTML content using handlebars
const post = require("../models/post");
const skill = require("../models/skill");

// Middleware for restricting pages based on authentication
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

  app.get('/', function (req, res) {
    res.render("index");
  });

  app.get("/login", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/feed");
    }
    res.render("login");
  });

  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/feed", isAuthenticated, function (req, res) {
    post.findAll(function (err, result) {
      if (err) {
        return res.status(401);
      }
      res.render("feed", { posts: result });
    });
  });

  app.get("/skills", isAuthenticated, function (req, res) {
    skill.findAll(function(err, response) {
      if (err) {
        return res.status(401);
      }
      res.render("skills", {skills: response});
    });
  });

  app.get("/username", function (err, req, res, next) {
    // Check for headers already sent and if so, 
    // go to next function with err ( i.e. you next statement );
    if (res.headersSent) {
        return next(err);
    }
    res.status(500); // next line is 500 error ( headers sent );
    // if not error continue on... 
    // First you have to get your names - so declare a var and
    // call your names function.
    let names = getNames();
    // Then once you have your names render you handlebars template and send
    // them to handlebars - ( i.e. res.render('handlBarsTemplate', itemTemplateNeeds ))
    res.render ("username", names );
  });

  app.get("/strengths", function (req, res) {
    res.render("strengths");
  });

  app.get("/signup", function (req, res) {
    res.render("signup");
  });
};
