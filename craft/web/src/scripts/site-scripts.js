$(document).ready(function(){

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