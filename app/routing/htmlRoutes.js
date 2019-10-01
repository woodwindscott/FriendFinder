var express = require("express");
var path = require("path");

var router = express.Router();

router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

router.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

// Export routes for server.js to use.
module.exports = router;