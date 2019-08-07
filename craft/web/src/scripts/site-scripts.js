window.addEventListener("load", function(){

    //vars
    var nav = $('.nav');
    var homePageHeader = $('.js--page-header');
    // var homeSiteTitle = $('.js--page-header.site-title');
    // var homeSiteSubTitle = $('.js--page-header.site-subtitle');
    var scrollTop = $(window).scrollTop();

    // on load add nav bg
    if (scrollTop > 60) {
        nav.addClass('scrolled');
    } else {
        nav.removeClass('scrolled');
    }

    // on scroll for nav and remove contact hash
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();

        if (scrollTop > 60) {
            nav.addClass('scrolled');
            homePageHeader.addClass('scrolled');
            // homeSiteTitle.addClass('scrolled');
            // homeSiteSubTitle.addClass('scrolled');
        } else {
            nav.removeClass('scrolled');
            homePageHeader.removeClass('scrolled');
            // homeSiteTitle.removeClass('scrolled');
            // homeSiteSubTitle.removeClass('scrolled');
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

    // smooth scroll
    $('.js-smooth-scroll').click(function(e){
        e.preventDefault()

        if (this.hash !== "") {
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
            });
        }
    });

});