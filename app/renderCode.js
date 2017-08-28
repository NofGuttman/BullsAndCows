function renderCode(){
    let code = [];
    while(code.length < 4){
        let randomNumber = Math.floor(Math.random() * 10);
        if(!code.includes(randomNumber)){
            code.push(randomNumber)
        }
    }
    return code;
}

module.exports = renderCode;