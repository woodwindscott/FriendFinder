var express = require("express");
var path = require("path");
var friendsList = require("../data/friends.js");


var router = express.Router();

router.get("/api/friends", function(req, res) {
    return res.json(friendsList);
});

// To be moved to apiRoutes.js
router.post("/api/friends", function(req, res) {

        // req.body hosts is equal to the JSON post sent from the user
        var newUser = req.body;

        for (var i = 0; i < 10; i++) {
            newUser.answers[i] = parseInt(newUser.answers[i]);
        }

        friendsList.push(newUser);
        res.json(newUser);
});

module.exports = router;