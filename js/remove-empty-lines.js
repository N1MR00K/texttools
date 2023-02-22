$(document).ready(function(){

  $('#remove').click(function(){
    let text = $('#input').val();
    let lines = text.split('\n');
    let notEmptyLines = [];
    for (let i = 0; i < lines.length; i++){
      if (lines[i].trim() !== ''){
        notEmptyLines.push(lines[i]);
      }
    }
    result = notEmptyLines.join('\n');
    $('#input').val(result);
  })

});