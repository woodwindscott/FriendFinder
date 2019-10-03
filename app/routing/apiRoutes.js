// Dependencies
var express = require("express");
var path = require("path");
var friendsList = require("../data/friends.js");

// Sets up the router to use for API routing that will be exported to server.js
var router = express.Router();

// Initialize variables
var totalScore;
var bestScore = 40;
var bestMatchId = 0;

// Function to find the best match...passing through newUser data from the survey form
function findMatch(newUser) {

    // Run through the entire friendsList to find the best match
    for (var i = 0; i < friendsList.length; i++) {
        // Runs the compareScores function, passing all newUser data and "i" from the first for loop
        compareScores(newUser, i);
    }

} // End findMatch() function

// Function to compare scores against each of the entries in the friendsList array
function compareScores(newUser, i) {

    // For each entry in friendsList, reset the total score to 0
    totalScore = 0;

    // Second for loop checking each individual answer and taking the absolute value of the difference
    for (var j = 0; j < 10; j++) {
        totalScore += Math.abs(newUser.answers[j] - friendsList[i].answers[j]);
    }

    // For the first time through the primary for loop, set the best score to the first index in the friends list
    if (i === 0) {
        bestScore = totalScore;
        bestMatchId = i;
    // Second and subsequent time through the main for loop, check to see that we have the best score total and matching ID saved    
    } else if (totalScore <= bestScore) {
        bestScore = totalScore;
        bestMatchId = i;
    }

} // End compareScores() function

// When directed to /api/friends, display the json of the entire friends list
router.get("/api/friends", function(req, res) {
    return res.json(friendsList);
});

// POST action...putting entry from the survey form into friendsList array and sending back the best match
router.post("/api/friends", function(req, res) {

        // req.body hosts is equal to the JSON post sent from the user
        var newUser = req.body;

        // Necessary to turn each of the numbered answers into integers...already completed in survey.html, but it didn't pass correctly
        for (var i = 0; i < 10; i++) {
            newUser.answers[i] = parseInt(newUser.answers[i]);
        }

        // Run findMatch function with newUser data from the form
        findMatch(newUser);

        // After finding the best match, push to the friendsList array
        friendsList.push(newUser);

        // Send back the information with best match to put into the modal
        res.send(
            { bestMatchName: friendsList[bestMatchId].name,
              bestMatchPhoto: friendsList[bestMatchId].photo
            }
        );
});

// Export router routes to server.js
module.exports = router;