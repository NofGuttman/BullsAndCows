let express = require('express');
let bodyParser = require('body-parser')
let app = express();
let renderCode = require('./app/renderCode');
let isValidGuess = require('./app/isValidGuess');
let score = require('./app/score');

let code = renderCode();

let guesses = [];

console.log("Code is:", code);

app.use(express.static('views'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
   res.sendFile("./index.html"); 
});

app.post('/guess', function(req, res){
    let guess = req.body.guess;
    if(isValidGuess(guess)){
        guesses.push([guess, (score(guess, code))]);
        res.send(guesses);
    } else {
        res.send("Not a valid guess")
    }
});

app.post('/restart', function(req, res){
    guesses = [];
    code = renderCode();
    console.log(code);
    res.send("Restarted game");
});

app.listen(3000, function(){
    console.log("App is now running in port 3000");
});