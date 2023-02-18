$( document ).ready(function() {

    $('#upper').click(function(){
        var input = $('#input').val();
        $('#output').val(input.toUpperCase());
    });

    $('#lower').click(function(){
        var input = $('#input').val();
        $('#output').val(input.toLowerCase());
    });

    $('#capi').click(function(){
        var input = $('#input').val().toLowerCase();
        var words = input.split(' ');
        var capitalizedWords = [];
        for (var i=0; i<words.length; i++){
            var word = words[i].charAt(0).toUpperCase() + words[i].slice(1);
            capitalizedWords.push(word);
        }
        var capitalizedText = capitalizedWords.join(' ');
        $('#output').val(capitalizedText);
    });

    $('#random').click(function(){
        var input = $('#input').val();
        var inputNew = "";
        for (var i=0; i<input.length; i++){
            if (i % 2 == 0){
                inputNew += input[i].toUpperCase();
            }
            else{
                inputNew += input[i].toLowerCase();
            }
        }
        $('#output').val(inputNew);
    });

});