const express = require("express");
const exphbs = require("express-handlebars");
const PORT = process.env.PORT || 8080;

const app = express();
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const apiRoutes = require("./controllers/api-routes");
app.use(apiRoutes);
const htmlRoutes = require("./controllers/html-routes");
app.use(htmlRoutes);

app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
  });
