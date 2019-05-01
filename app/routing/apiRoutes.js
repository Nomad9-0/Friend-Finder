// Dependencies
var path = require('path');
var friends = require('../data/friends.js');

// API Routes
module.exports = function(app) {
	// All Friends
	app.get('/api/friends', function(req, res) {
		res.json(friends);
	});

	// Add new friend
	app.post('/api/friends', function(req, res) {
		var userInput = req.body;
		var userResponse = userInput.scores;

		// Match Friend
		var matchName = '';
		var matchPhoto = '';
		var difference = 1000;

		// Loop through friends and compare
		for(var i = 0; i < friends.length; i++) {
			var diff = 0;
			for(var j = 0; j < userResponse.length; j++) {
				diff += Math.abs(friends[i].scores[j] - userResponse[j]);
			}
		
			// Find lowest diff in friend
			if(diff < difference) {
				difference = diff;
				matchName = friends[i].name;
				matchPhoto = friends[i].photo;
				
			}
		}

		// Add new user
		friends.push(userInput);
		res.json({status: 'OK', matchName: matchName, matchPhoto: matchPhoto}); 
	});
};