// const app = require("./controllers/api-routes");
// const express = require("express");

const express = require("express");
const PORT = process.env.PORT || 8080;

const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const routes = require("./controllers/api-routes");
app.use(routes);

app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
  });