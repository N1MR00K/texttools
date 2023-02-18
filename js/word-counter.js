$(document).ready(function(){

  $('#input').keyup(function(){
    var text = $('#input').val();
    
    // Characters
    $('#charcounter').text(text.length);

    // Characters without space
    var spaceCounter = 0;
    for(var i = 0; i < text.length; i++){
      if(text[i] == ' '){
        spaceCounter += 1;
      }
    }
    $('#charcounternospace').text(text.length-spaceCounter);

    // Sentences
    var sentenceCounter = 0;
    if (text.match(/[.!?](\s|\n)/g) !== null){
      sentenceCounter = text.match(/[.!?](\s|\n)/g).length;
    }
    $('#sentencecounter').text(sentenceCounter);

    // Paragraphs
    var paragraphCounter = 0;
    if (text.match(/[\r\n]+/g) !== null){
      paragraphCounter = text.match(/[\r\n]+/g).length;
    }
    $('#paragraphcounter').text(paragraphCounter);
  });
  
});