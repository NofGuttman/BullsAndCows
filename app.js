let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let renderCode = require('./app/renderCode');
let isValidGuess = require('./app/isValidGuess');
let score = require('./app/score');
let path = require('path');

let port = process.env.PORT || 3000;

let code = renderCode();

let guesses = [];

console.log("Code is:", code);

app.use(express.static('src'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
   res.sendFile(path.resolve(__dirname, "src/index2.html")); 
});

app.post('/guess', function(req, res){
    let guess = req.body.guess;
    if(isValidGuess(guess)){
        guesses.push({
          guess: guess,
          score: (score(guess, code))});
        res.send(guesses);
    } else {
        res.send("false");
    }
});

app.post('/getScore', function(req, res){
  res.send(guesses);
});

app.post('/restart', function(req, res){
    guesses = [];
    code = renderCode();
    console.log(code);
    res.send("Restarted game");
});

app.listen(port, function(){
    console.log("App is now running in port 3000");
});