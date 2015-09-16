jQuery(function($){
    $(document).on('click', '.portfolio .zoom', function(e) {
        e.preventDefault();
        $('.overlay,.modal').animate({opacity: .9}, 300).show();
    });

    $(document).on('click', '.modal .close', function(e) {
        e.preventDefault();
        $('.overlay,.modal').animate({opacity: 0}, 100).hide();
    });
}(jQuery));