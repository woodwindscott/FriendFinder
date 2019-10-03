// Dependencies
var express = require("express");
var path = require("path");

// Set up router to export to server.js
var router = express.Router();

// Directs user to the home page
router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

// Directs user to the survey page
router.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

// Export routes for server.js to use.
module.exports = router;