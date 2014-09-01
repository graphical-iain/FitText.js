(function( $ ){

  $.fn.fitText = function( options ) {

    // Setup options
    var settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){
      var $this = $(this);

      // wrap text with span to find initial width of just the text
      var width = $this.wrapInner( "<span id='fit' style='inline'></span>" ).find("#fit").width();
      //remove span
      $this.html( $this.find("#fit").html() );
			//get initial font size
			var fontSize = parseInt( $this.css("fontSize"), 10 );

      // Resizer() resizes text to fill parent container based on text width
      var resizer = function resizer() {
      		
      		// calculate multiplier based on the ratio of the text width to the container
      		var multiplier = $this.width()/width;
					var newSize = fontSize * multiplier;
					
					if ( newSize > parseFloat( settings.minFontSize ) || newSize < parseFloat( settings.maxFontSize ) ) {
						$this.addClass("justify");
					}
          
          // set new size / make sure newSize is not larger or smaler than min and max sizes
        	$this.css('font-size', Math.max(Math.min(newSize, parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );
