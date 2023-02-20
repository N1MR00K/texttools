$(document).ready(function(){

  $('#input').keyup(function(){
    var text = $('#input').val();
    
    // Words
    var wordCounter = 0;
    if (text.match(/[\s\n][^\s\n]/g) !== null){
      wordCounter = text.match(/[\s\n][^\s\n]/g).length;
    }
    if (text){
      $('#wordcounter').text(wordCounter+1);
    }else{
      $('#wordcounter').text(0);
    }

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
    var newlineCounter = 0;
    var signCounter = 0;
    if (text.match(/\n./g) !== null){
      newlineCounter = text.match(/\n./g).length;
    }
    if (text.match(/[\.\?!]\s/g) !== null){
      signCounter = text.match(/[\.\?!]\s/g).length;
    }
    if (text){
      $('#sentencecounter').text(newlineCounter+signCounter+1);
    }else{
      $('#sentencecounter').text(0);
    }

    // Paragraphs
    var paragraphCounter = 0;
    if (text.match(/[\r\n]./g) !== null){
      paragraphCounter = text.match(/[\r\n]./g).length;
    }
    if (text){
      $('#paragraphcounter').text(paragraphCounter+1);
    }else{
      $('#paragraphcounter').text(0);
    }
  });
  
});