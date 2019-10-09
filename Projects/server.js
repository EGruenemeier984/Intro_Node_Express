require("marko/node-require");

const express = require('express');
const path = require('path');
const app = express();
const port = 5000; 

app.use(express.static('public'));

var isProduction = process.env.NODE_ENV === 'production';

// Configure lasso to control how JS/CSS/etc. is delivered to the browser
require('lasso').configure({
    plugins: [
        'lasso-marko' // Allow Marko templates to be compiled and transported to the browser
    ],
    outputDir: __dirname + '/static', // Place all generated JS/CSS/etc. files into the "static" dir
    bundlingEnabled: isProduction, // Only enable bundling in production
    minify: isProduction, // Only minify JS and CSS code in production
    fingerprintsEnabled: isProduction, // Only add fingerprints to URLs in production
});

app.use(require('lasso/middleware').serveStatic());

app.use(express.urlencoded());

app.post('/query-search', (req, res) => {
    const query = req.body.userInput;
    res.send(query);
    res.end();
});

app.get('/home', (req, res) => {
    res.setHeader("content-type", "text/html");
    res.sendFile(path.join(__dirname + '/pages/index.marko'));
});

app.get('/script.js', (req, res) => {
    res.sendFile(path.join(__dirname + '/script.js'));
});

app.get('/', (req, res) => {
    res.redirect('/home')
});


app.listen(port, function() {
    console.log('Server started! Try it out:\nhttp://localhost:' + port + '/');

    if (process.send) {
        process.send('online');
    }
});

// get data from deezer api
var unirest = require("unirest");

var req = unirest("GET", "https://deezerdevs-deezer.p.rapidapi.com/search");

req.query({
	"q": "logic"
});

req.headers({
	"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
	"x-rapidapi-key": "2bce11ac03mshe8d42c0304556a9p1c94a3jsn42a650c97186"
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);

});
