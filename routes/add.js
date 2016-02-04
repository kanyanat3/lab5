var data = require("../data.json");

exports.addFriend = function(req, res) {    
	
	var friendName = req.query.name;
	var friendDescription = req.query.description;
	console.log("The name is " + friendName + ". And the description is "+ friendDescription +".");

	var newFriend = { "name": friendName, "description": friendDescription, "imageURL": "http://lorempixel.com/400/400/people"}
	data["friends"].push(newFriend);
	res.render('index', data);
 }