const express = require("express");
const router = express.Router();

<<<<<<< HEAD
router.get("/", function (req, res) {
  res.type("text/html");
  res.send("index.html");
=======
var router = express.Router();

var skill = require("../models/skill.js");

var path = require("path");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("api/skills", function (req, res) {
  skill.findAll(function (result) {
    res.json(res);
  });
});

router.post("/api/skills", function (req, res) {

});

router.put("/api/skills/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  skill.update(
    {
      subject: req.body
    },
    condition,
    function (result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
>>>>>>> 4473c4b964fcfad232f86268ffe4e9dab13782e8
});

module.exports = router;
