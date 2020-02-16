const express = require("express");
const router = express.Router();

const db = require("../models");

router.get("/api/skills", function (req, res) {
  db.skill.findAll(function (result) {
    res.json(result);
  });
});

router.get("/api/answers/:postId", function (req, res) {
  db.answer.findForPost(req.params.postId, function (result) {
    res.json(result);
  });
});

router.get("/api/posts", function (req, res) {
  db.post.findAll(function (result) {
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
