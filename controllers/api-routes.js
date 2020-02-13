// Dependencies
// =============================================================
const skill = require("../models/skill");
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/api/skills", function (req, res) {
    skill.findAll(function (result) {
        return res.json(result);
    })
});

module.exports = app;