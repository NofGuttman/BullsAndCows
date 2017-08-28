function score(guess, code){
    normalize(guess);
    let answer = {bulls: 0, cows: 0}
    for(let i in guess){
        if(guess[i] === code[i]){
            answer.bulls += 1;
        } else if(code.includes(guess[i])){
            answer.cows += 1;
        }
    }
    return answer;
}

function normalize(x){
    for(let i in x){
        x[i] = +x[i]
    }
}

module.exports = score;