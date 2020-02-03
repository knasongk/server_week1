import express from 'express';
const app = express();

var port = process.env.PORT || 8080;

/*
app.get('/index.html', (request, response) => {
	response.send(`
	<input id="color" placeholder="red" />
	<button>Tell Server Your Color</button>
	<script>document.queryselector('button').addEventListener('click', () => {
	const color = document.querySelector('#color').value;
	fetch('/api/simple?color=${color}')
	.then(x => x.text()).then(alert);
	});</script>`);
});
*/

	  var color = "red";

app.get('/index.html', (request, response) => {
	response.send(`
	<input id="color" placeholder="red" />
	<button>Tell Server Your Color</button>

	<script>document.querySelector('button').addEventListener('click', () => {
	  color = document.querySelector('#color').value;
	  console.log("color is ${color}");

	fetch('/api/simple?color=${color}')
	.then(x => x.text()).then(alert);


	});
		</script>`

        );
});


/*
app.post('/api/simple/:color',
	(({ params: { color }}), response) => {
		response.send(`I like the color ${color} too!`);
	}
);
*/

/*
app.post('/api/simple/:color', function(req, res) {
	const { color } = req.params;

	console.log(color);
	res.send(`I like the color ${color} too!`);
});
*/

app.get('/api/simple', function(req, res) {
//	const { color } = req.params;
	const {color} = req.query

	console.log(color);
	res.send(`I like the color ${color} too!`);
});

app.listen(8080, () => console.log(`Listening on port ${port}!`));
