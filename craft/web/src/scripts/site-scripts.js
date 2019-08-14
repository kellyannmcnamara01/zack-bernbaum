window.addEventListener("load", function(){

    //vars
    var nav = $('.nav');
    var homePageHeader = $('.js--page-header');
    var homeNavBrand = $('.js--site-branding-home');
    var navBrand = $('.js--site-branding');
    // var siteTag = $('.js--site-branding__tag');
    var scrollTop = $(window).scrollTop();

    // on load add nav bg
    if (scrollTop > 35) {
        nav.addClass('scrolled');
    } else {
        nav.removeClass('scrolled');
    }

    // on scroll for nav and remove contact hash
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();

        if (scrollTop > 35) {
            nav.addClass('scrolled');
            homePageHeader.addClass('scrolled');
            homeNavBrand.removeClass('hide');
        } else {
            nav.removeClass('scrolled');
            homePageHeader.removeClass('scrolled');
            homeNavBrand.addClass('hide');
        }

        // if (scrollTop > 400) {
        //     navBrand.addClass('simple');
        // } else {
        //     navBrand.removeClass('simple');
        // }
    });

    // fancybox settings 
    $('[data-fancybox="gallery"]').fancybox({
        keyboard: true,
        preventCaptionOverlap: false, 
        infobar: false,
        loop: true,
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