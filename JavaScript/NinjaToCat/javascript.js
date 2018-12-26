$(document).ready(function(){
    $('img').click(function(){
        $(this).attr('temp', $(this).attr('src'));
        $(this).attr('src', $(this).attr('data-alt-src'));
        $(this).attr('data-alt-src', $(this).attr('temp'));
    });
});	