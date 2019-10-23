const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');


// use body parser to easy fetch post body
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json())

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

app.post('/query-search', (req, res, next) => {
    unirest(req.body, res);
    res.render('pages/result.ejs');
});

app.listen(port, function () {
    console.log('Server started! Try it out:\nhttp://localhost:' + port + '/');

    if (process.send) {
        process.send('online');
    }
});

function unirest(string, req) {
    var unirest = require("unirest");

    var id = string.userInput; 

    var req = unirest("GET", 'https://deezerdevs-deezer.p.rapidapi.com/artist/' + id);

    req.headers({
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "2bce11ac03mshe8d42c0304556a9p1c94a3jsn42a650c97186"
    });

    console.time("Request: ");

    req.end(function (res) {
        if (res.error) throw new Error(res.error);
        console.log(res.body);
    });
    console.timeEnd("Request: ");
    
}