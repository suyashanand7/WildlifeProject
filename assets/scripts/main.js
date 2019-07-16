$( document ).ready(function() {
    
    var fixmeTop = $('#header').offset().top;
    $(window).scroll(function() {
        var currentScroll = $(window).scrollTop();
        if (currentScroll >= 400) {
            $('#header').addClass("fixed");
        } else {
            $('#header').removeClass("fixed");
        }
    });

});