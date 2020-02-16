const express = require("express");
const router = express.Router();

const path = require("path");

const post = require("../models/post.js");


router.get("/", function (req, res) {
  res.type("text/html");
  res.send("index.html");
});


router.get("/feed", function (req, res) {

  post.findAll(function (result) {
    let posts = result;
    res.render('feed',{posts});

  });
});

router.get("/skills", function (req, res) {
  res.sendFile(path.join(__dirname + "/../public/skills.html"));
});

module.exports = router;

