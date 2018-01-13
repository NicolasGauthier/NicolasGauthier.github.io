$(document).ready(function() {

    $(document).ready(function(){
        $(this).scrollTop(0);
    });

    $('#menu-list a').click(function(e){
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault(); //this is the important line.
    });
    
    $('.project-details').hide();

    $('.img-overview img').hover(function(e){
            $(this).parent().parent().find('.project-details').show();
        }, function(){
            $(this).parent().parent().find('.project-details').hide();
    });
});
