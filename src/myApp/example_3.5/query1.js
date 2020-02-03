//note to run in es6 use command node -r esm query1.js

import express from 'express';  
import cors from 'cors';

//var express = require('express');
//var cors = require('cors');  // Use cors module for enable Cross-origin resource sharing

var app = express();
app.use(cors()); // for all routes

var port = process.env.PORT || 8080;

//example request url: http://www.example.com/foo/8/22/2019

app.get('/foo/:month/:day/:year', function(req, res) {
	const { month, day, year } = req.params;

	console.log(month);
	console.log(day); 
	console.log(year); 

	res.send(`date: ${month}/${day}/${year}`);

//	res.json({foo: [bar, baz] });

	// or
	/* res.send(JSON.stringify({
	      string_value: 'StackOverflow',
	      number_value: 8476
	   })) */

	// you can add a status code to the json response
	// /* res.status(200).json(info) */
	//
})

app.listen(port, function() {
	console.log('Node.js listening on port ' + port)
})

