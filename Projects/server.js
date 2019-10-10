require("marko/node-require").install();
require("marko/express");

const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

app.use('/public', express.static('public'));

var templatePages = './src/pages';
var indexTemplate = require(templatePages + '/index.marko');

const people = [
    {
        name: "ethan",
        age: 17
    },
    {
        name: "justin ",
        age: 17
    }
];

app.get('/home', (req, res) => {
    res.marko(indexTemplate, {
        name: 'Ethan',
        count: 100,
        team: people
    })
});

app.get('/', (req, res) => {
    res.redirect('/home')
});

app.post('/query-search', (req, res) => {
    const query = req.body.userInput;
    res.send(query);
    res.end();
});

app.listen(port, function () {
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