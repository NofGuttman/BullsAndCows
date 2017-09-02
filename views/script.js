$("#send-guess").click(function(){
    let guess = [$("#box-0").val(), $("#box-1").val(), $("#box-2").val(), $("#box-3").val()];
    $.ajax({
        type: "POST",
        url: "/guess",
        data: {guess: guess},
        success: function(response){
            if(response === "false"){
                console.log("Not a Valid Guess");
            } else {
                let result = "";
                for(let i in response){
                    result += "<li>" + response[i][0] + " Bulls:" + response[i][1]["bulls"] + " Cows:" + response[i][1]["cows"] + "</li>"
                }
                $("#guesses-done").html(result);
                console.log(response);
            }
        }
      });
});

$("#restart-game").click(function(){
    $.ajax({
        type: "POST",
        url: "/restart",
        success: function(response){
            console.log(response);
        }
    })
})