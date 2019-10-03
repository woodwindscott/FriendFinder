# FriendFinder
Homework #13 - Friend Finder

# Resources
GitHub Repo - https://github.com/woodwindscott/FriendFinder

Deployed Version on Heroku: https://nameless-crag-00118.herokuapp.com

# User Instructions

1. View all of the potential friends as an array at /api/friends

2. Fill out the survey and get matched with the "friend" that most closely matches your answers at /survey

*******************************************************

# Notes about the development process

## Technologies Used

1. Javascript
2. Node.js
3. Bootstrap
4. NPM Modules:

    * express
    * path
    * custom modules (api/htmlRoutes.js, friends.js)

## How the code is structured

The public files (home & survey.html) are in their own folder.  home.html is strictly html and survey.html combines html and Javascript.  The data is stored in its own folder and contains only friends.js which is an array of the starter data of potential frieds. The routing has its own folder and contains separate files for html and api routes which are then exported and accessible to server.js. server.js is in the top level and activates the express server.

## Problems encountered

1. With separating out the routes from the main server.js, I had to figure out how to export the routes so they were still acccessible from server.js.

2. This was also the first time using the modal feature from Bootstrap.  That took a little while to figure out where to put it and how to call it.

3. The biggest challenge was trying to figure out how to send the best match data from apiRoutes.js back to survey.html to be used in the modal.  In the end, I used res.send() to send back an object with the data.

4. Not really a problem...but I decided to create a mini-application to randomize the answers for the seed data used in friends.js.  That was rather enjoyable.

# Future Development

I think using more questions, and putting some research time into the selection of the questions would be a worthwhile endeavor.  In addition, the data should really be stored in a database so the collection of potential friends would grow and not be reset every time this application was used.