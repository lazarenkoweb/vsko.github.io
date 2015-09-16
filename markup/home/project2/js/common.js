jQuery(function($){
    $(document).on('click', '.portfolio .zoom', function(e) {
        e.preventDefault();
        //console.log($(this));
        $('.overlay,.modal').show();
    });

    $(document).on('click', '.modal .close', function(e) {
        e.preventDefault();
        $('.overlay,.modal').hide();
    });
}(jQuery));