const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

app.get('/home', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/fetchData.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/fetchData.js'));
});

app.get('/', function(req, res) {
    res.redirect('/home')
})


app.listen(5000);

// get data from deezer api
var unirest = require("unirest");

var req = unirest("GET", "https://deezerdevs-deezer.p.rapidapi.com/search");

req.query({
	"q": "eminem"
});

req.headers({
	"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
	"x-rapidapi-key": "2bce11ac03mshe8d42c0304556a9p1c94a3jsn42a650c97186"
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});

