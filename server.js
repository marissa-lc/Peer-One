// const app = require("./controllers/api-routes");
// const express = require("express");

var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var routes = require("./controllers/api-routes");

app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
  });