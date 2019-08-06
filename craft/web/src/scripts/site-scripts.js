window.addEventListener("load", function(){

    // vars 
    var scrollTop = $(window).scrollTop();
    var nav = $('.nav');

    // on scroll for nav
    $(window).scroll(function(){
        if (scrollTop > 60) {
            nav.addClass('scrolled');
        } else {
            nav.removeClass('scrolled');
        }
    });

    // fancybox settings 
    $('[data-fancybox="gallery"]').fancybox({
        keyboard: true,
        preventCaptionOverlap: false, 
        infobar: false,
        buttons: [
            "slideShow",
            "thumbs",
            "close"
        ],
        idleTime: 300,
    });

});