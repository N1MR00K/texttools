$(document).ready(function(){

  $('#input').keyup(function(){
    var text = $('#input').val();
  });

  $('#input').keyup(function(){
    var text = $('#input').val();
    $('#charcounter').text(text.length);
  });

  $('#input').keyup(function(){
    var text = $('#input').val();
    var spaceCounter = 0;
    for(var i = 0; i < text.length; i++){
      if(text[i] == ' '){
        spaceCounter += 1;
      }
    }
    $('#charcounternospace').text(text.length-spaceCounter);
  });

  $('#input').keyup(function(){
    var text = $('#input').val();
    var sentenceCounter = 0;
    if (text.match(/[.!?](\s|\n)/g) !== null){
      sentenceCounter = text.match(/[.!?](\s|\n)/g).length;
    }
    $('#sentencecounter').text(sentenceCounter);
  });
  
});