'use strict'

var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

app.use(function(req, res, next) {
	req.user = 'testuser';
	next(); // it will pass the control to next matching route
});

app.get('/', function(req,res) {
	var user = req.user;
	console.log(user); // testuser
	return res.send(user);
});

app.listen(port, function() {
	console.log('Node.js listening on port ' + port)
})

