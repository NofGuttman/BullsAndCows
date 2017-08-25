function isValidGuess(guess){
    if(guess.length !== 4){
        return false;
    }
    for(let i in guess){
        for(let j in guess){
            if(i === j){
                continue
            } else if(guess[i] === guess[j]){
                return false;
            }
        }
    }
    return true;
}

module.exports = isValidGuess;