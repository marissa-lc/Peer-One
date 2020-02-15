const express = require("express");
const router = express.Router();
const path = require("path");
const post = require("../models/post");
router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/../public/index.html"));
});

router.get("/feed", function (req, res) {
  // res.sendFile(path.join(__dirname + "/../public/displayfeed.html"));
  post.findAll(function (results) {
    res.render("feed", {posts: results});
  });
});

router.get("/skills", function (req, res) {
  res.sendFile(path.join(__dirname + "/../public/skills.html"));
});

module.exports = router;
