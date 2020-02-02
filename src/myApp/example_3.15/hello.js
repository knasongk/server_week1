'use strict'

var express = require('express');
var app = express();

var port = process.env.PORT || 8080;
//app.listen(port);


app.get('/', (req,res) => res.send('HelloWorld!'));
app.get('/wiki', (req,res) => res.send('This is wiki page.'));
app.use((req,res)=>res.send('404-PageNotFound'));


app.listen(port, function() {
	console.log('Node.js listening on port ' + port)
})

