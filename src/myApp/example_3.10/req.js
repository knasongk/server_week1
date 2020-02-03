var express = require('express');
var app = express();

// get /names/john
app.get('/names/:name', function(req, res, next) {
	if (req.params.name == 'jonh') {
		return res.send('Valid Name');
	} else {
	    	next(new Error('Not valid name'));  // pass to error handler
	}
});

// error handler
app.use(function(err, req, res, next) {
	console.log(err.stack);  // e.g. not valid name
	return res.status(500).send('Internal Server Occurred');
});

app.listen(3000);
