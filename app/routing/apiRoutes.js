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
		// Add new user
		friends.push(userInput);
		res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
	});
};