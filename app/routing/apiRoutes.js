var express = require("express");
var path = require("path");
var friendsList = require("../data/friends.js");


var router = express.Router();

var totalScore;
var bestScore = 40;
var bestMatchId = 0;

function findMatch(newUser) {

    for (var i = 0; i < friendsList.length; i++) {
        compareScores(newUser, i);
    }

    console.log("BEST MATCH: User ID: " + bestMatchId + " - " + bestScore + " points!!!!!");

} // End findMatch() function

function compareScores(newUser, i) {

    totalScore = 0;

    for (var j = 0; j < 10; j++) {
        totalScore += Math.abs(newUser.answers[j] - friendsList[i].answers[j]);
    }

    if (i === 0) {
        bestScore = totalScore;
        bestMatchId = i;
    } else if (totalScore <= bestScore) {
        bestScore = totalScore;
        bestMatchId = i;
    }

} // End compareScores() function

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

        findMatch(newUser);

        friendsList.push(newUser);

        res.send(
            { bestMatchName: friendsList[bestMatchId].name,
              bestMatchPhoto: friendsList[bestMatchId].photo
            }
        );
});

module.exports = router;