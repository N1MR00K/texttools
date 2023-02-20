$( document ).ready(function() {

  $('#searchandreplace').click(function(){
    var caseSensitive = $('#casesensitive').prop('checked');
    if (caseSensitive == true){
      var search = new RegExp($('#search').val(),'g');
    }else{
      var search = new RegExp($('#search').val(),'gi');
    }
    var replace = $('#replace').val();
    var text = $('#text').val();
    var textReplaced = text.replace(search,replace);
    $('#text').val(textReplaced);
  });

});