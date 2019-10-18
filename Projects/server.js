const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use('/public', express.static('public'));

app.set('view engine', 'ejs');

app.get('/home', (req, res) => {
    res.render('pages/index.ejs');
});

app.get('/', (req, res) => {
    res.redirect('/home')
}); 

app.get('/about', (req, res) => {
    res.render('pages/about.ejs');
});

app.post('/query-search', (req, res) => {
    res.render('pages/result.ejs');
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
        "q": "Pouya"
    });

    req.headers({
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "2bce11ac03mshe8d42c0304556a9p1c94a3jsn42a650c97186"
    });


    req.end(function (res) {
        if (res.error) throw new Error(res.error);
        const [...data] = res.id; 
        console.log(data);
        // const result = res.body;
        // Object.keys(result).forEach((key) => {
        //     console.log(result[key]);
        // });
    });  