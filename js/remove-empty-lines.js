$(document).ready(function(){

  $('#remove').click(function(){
    var text = $('#input').val();
    var emptyRemoved = text.replace('/r\nr\n/g','r\n')
    $('#input').val(emptyRemoved);
  })

});