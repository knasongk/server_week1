var bodyParser = require('body-parser');
const express = require('express');

const app = express();

// Parse the body for POST, PUT, DELETE, etc.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.post('/post-data-here', function(req, res, next) {
	console.log(req.body); // req.body contains the parsed body of the request.
});

app.listen(8080, 'localhost');
