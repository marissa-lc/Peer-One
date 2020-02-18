const express = require("express");
const router = express.Router();
const Wordpos = require("wordpos");

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
router.post("/api/login", passport.authenticate("local"), function(req, res) {
  res.json(req.user);
});


router.post("/api/signup", function(req, res) {
  db.user.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  })
    .then(function() {
      res.redirect(307, "/api/login");
    })
    .catch(function(err) {
      res.status(401).json(err);
    });
});
*/
router.post("/api/posts", function (req, res) {
  db.post.add(
    req.body.userId,
    req.body.skillId,
    req.body.body,
    function () {
      res.status(200);
    });

});

/*
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

router.get("/api/namegen", function (req, res) {
  const wordpos = new Wordpos();
  wordpos.randAdjective(function (adj) {
    wordpos.randNoun(function (noun) {
      const username = adj[0].toUpperCase() + adj.slice(1) +
        noun[0].toUpperCase() + noun.slice(1) +
        (Math.floor(Math.random() * 100)).toString();
        res.send(username);
    })
  })
})
// Export routes for server.js to use.
module.exports = router;
