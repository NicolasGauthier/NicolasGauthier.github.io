$(document).ready(function() {

    var myClass;
    var myOpacity = 0.6;

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
    $('.project-details.placeholder').show();
    $('.img-overview img').css('opacity', myOpacity);

    $('.img-overview img').hover(function(e){
            $(this).css('opacity', '1');
        }, function(e){
            if ($(this).attr('class') != myClass)
                $(this).css('opacity', myOpacity);
    });

    $('.img-overview img').click(function(e){
            $('.img-overview img').css('opacity', myOpacity);
            $(this).css('opacity', '1');
            
            myClass = $(this).attr('class');
            var myProjectDetails = $('.project-details.'+myClass);
            var isVisible = myProjectDetails.is(":visible"); 
            $('.project-details').hide();
            if(!isVisible) {myProjectDetails.show();}
            else {
                myClass = "";
                $('.project-details.placeholder').show();
            }

    });

});
