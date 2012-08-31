(function( $ ) {
    $.fn.wizard = function() {
        var viewport = this;
        viewport.css('overflow', 'hidden');
        viewport.wrapInner('<div class="canvas" style="position:relative; width:90000px;" />');
        $('section a[href^=#]', this).click(function() {
            $('.canvas', viewport).animate({"left": "-"+$($(this).attr('href')).position().left+"px"}, "fast");
            return false;
        });

        return this;
    }
})( jQuery );
