// Dependencies
var express = require("express");
var app = express();

// Set up the port
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import html and api route data
var htmlRoutes = require("./app/routing/htmlRoutes.js");
var apiRoutes = require("./app/routing/apiRoutes.js");

app.use(htmlRoutes);
app.use(apiRoutes);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("Listening on port " + PORT);
});