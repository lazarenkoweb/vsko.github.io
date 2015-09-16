jQuery(function($){
    $(document).on('click', '.portfolio .zoom', function(e) {
        e.preventDefault();
        $('.overlay,.modal').show();
    });

    $(document).on('click', '.modal .close', function(e) {
        e.preventDefault();
        $('.overlay,.modal').hide();
    });
}(jQuery));