$("#send-guess").click(function(){
  let guess = [$("#box-0").val(), $("#box-1").val(), $("#box-2").val(), $("#box-3").val()];
  $.ajax({
    type: "POST",
    url: "/guess",
    data: {guess: guess},
    success: function(response){
      console.log(response);
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