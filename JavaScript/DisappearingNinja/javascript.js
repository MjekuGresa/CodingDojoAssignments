$(document).ready(function(){
    
    $("img").click(function(){
        $(this).hide("slow");
    });

    $('button').click(function(){
        $('img').show();
    });
});