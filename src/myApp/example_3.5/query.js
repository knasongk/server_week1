var express = require('express');
var cors = require('cors');  // Use cors module for enable Cross-origin resource sharing

var app = express();
app.use(cors()); // for all routes

var port = process.env.PORT || 8080;

app.get('/foo', function(req, res) {
	const {bar, baz } = req.query;

	console.log(bar);
	console.log(baz); 

	res.json({foo: [bar, baz] });

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

