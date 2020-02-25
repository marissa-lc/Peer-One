const path = require("path");

// Require data models for use in dynamic rendering of HTML content using handlebars
const db = require("../models");

// Middleware for restricting pages based on authentication
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

  app.get("/", function (req, res) {
    res.render("index");
  });

  app.get("/username", function (req, res) {
    const getNames = require("./namegen");
    getNames(function (names) {
      res.render("username", { names: names });
    });
  });

  app.get("/strengths", function (req, res) {
    db.skill.findAll(function (err, response) {
      if (err) {
        return res.status(401);
      }
      res.render("strengths", { skills: response });
    });
  });

  app.get("/signup", function (req, res) {
    res.render("signup");
  });

  app.get("/login", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/skills");
    }
    res.render("index");
  });

  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/feed", isAuthenticated, function (req, res) {
    db.post.findAll(function (err, result) {
      if (err) {
        return res.status(401);
      }
      res.render("feed", { posts: result });
    });
  });

  app.get("/skills", isAuthenticated, function (req, res) {
    db.skill.findAll(function (err, response) {
      if (err) {
        return res.status(401);
      }
      res.render("skills", { skills: response });
    });
  });
};
