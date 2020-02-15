const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.type("text/html");
  res.send("index.html");
});

router.get("/feed", function (req, res) {
  res.type("text/html");
  res.send("displayfeed.html");
});

router.get("/skills", function (req, res) {
  res.type("text/html");
  res.send("skills.html");
});

module.exports = router;
