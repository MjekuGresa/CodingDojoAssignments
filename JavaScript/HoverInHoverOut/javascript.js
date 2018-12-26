$(document).ready(function(){
    
    $('img').hover(function(){
        $(this).attr('temp', $(this).attr('src'));
        $(this).attr('src', $(this).attr('data-alt-src'));
    }, function(){
        $(this).attr('src', $(this).attr('temp'));
    });

});