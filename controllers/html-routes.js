const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.type("text/html");
  res.send("index.html");
});
module.exports = router;