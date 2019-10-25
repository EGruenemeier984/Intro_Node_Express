const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const LOG = console.log;

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

app.post('/query-search', async (req, res, next) => {
    unirest(req.body, res);
});

app.listen(port, function () {
    console.log('Server started! Try it out:\nhttp://localhost:' + port + '/');

    if (process.send) {
        process.send('online');
    }
});

async function unirest(string, req) {
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
        const data = res.body;
        LOG("log:",data);
    });

    console.timeEnd("Request: ");
    
}

function logicExample(templateNameString, res,req) {
    var unirest = require("unirest");


    var req = unirest("GET", 'https://deezerdevs-deezer.p.rapidapi.com/artist/logic');

    req.headers({
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "2bce11ac03mshe8d42c0304556a9p1c94a3jsn42a650c97186"
    });

    console.time("Request: ");
    
    req.end(function (res) {
        // if (res.error) throw new Error(res.error);
        const data = res.body;
        res.render('pages/about.ejs', {
            people: data
        });
        LOG("log:",data);
    })
    console.timeEnd("Request: ");
}


/**
 * asynchronous fetch json from an API and pass it into the view
 */
var URL = 'https://deezerdevs-deezer.p.rapidapi.com/artist/logic';
const get_data = async (url,templateNameString, res) => {
    try {
        console.time("Request time");
            const response = await fetch(url,{
                headers: {
                    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                    "x-rapidapi-key": "2bce11ac03mshe8d42c0304556a9p1c94a3jsn42a650c97186"
                } 
            });
            const json = await response.json();
            // grab the array inside data by destructuring it
            // remove the spread operator to grab the first item and so on...
            const [...data] = json.data;
            // console.log(data);
            // pass the json response into the the view
            // remember that res.render is part of EXPRESS
            res.render(templateNameString, {
                people: data
            });
        console.timeEnd("Request time");
      
        // use a ternary operator to log potential errors
        (err)=> (err) ? LOG(err): LOG("all good")
    } catch (error) {
        console.log(error);
    }
};


app.get('/logic',  (req, res) => {
    // res.render('pages/about.ejs');
    get_data(URL,"pages/about.ejs", res)
});