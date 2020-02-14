var express = require("express");

var router = express.Router();

const skill = require("../models/skill.js");
const post = require("../models/post.js");

// Create all our routes and set up logic within those routes where required.
router.get("/api/skills", function (req, res) {
  skill.findAll(function (result) {
    res.json(result);
  });
});

router.get("/api/posts", function (req, res) {
  post.findAll(function (result) {
    res.json(result);
  });
});

/*
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
});
*/
// Export routes for server.js to use.
module.exports = router;
