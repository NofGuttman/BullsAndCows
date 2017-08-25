function score(guess, code){
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

module.exports = score;

console.log(score([1,2,3,4], [4,3,2,1]))