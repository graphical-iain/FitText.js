(function( $ ){

	$.fn.fitText = function( options ) {

		// Setup options
		var settings = $.extend({
		  'minFontSize' : Number.NEGATIVE_INFINITY,
		  'maxFontSize' : Number.POSITIVE_INFINITY
		}, options);

		return this.each(function(){

			var $this = $(this);

			var width = $this.wrapInner("<span id='fit' style='display:inline-block; white-space:nowrap;'></span>").find("#fit").width();
			$this.html( $this.find("#fit").html() );
			var fontSize = parseInt($this.css("font-size"), 10);
			var init = true;

			// Resizer() resizes items based on the object width divided by the compressor * 10
			var resizer = function resizer() {
				

				var multiplier = width/$this.width();
				var newSize = fontSize / multiplier ;

				// console.log(multiplier);

				$this.addClass("justify");

				if (newSize <= settings.minFontSize || newSize >= settings.maxFontSize) {
					$this.removeClass("justify");
				}

				$.when(
					$this.css('font-size', Math.max(Math.min(newSize, parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize))) 
				).done( function() {
					if (init) {
						width = $this.wrapInner("<span id='fit' style='display:inline-block; white-space:nowrap;'></span>").find("#fit").width();
						$this.html( $this.find("#fit").html() );
						fontSize = parseInt($this.css("font-size"), 10);

						multiplier = width/$this.width();
						newSize = fontSize / multiplier ;

						$this.css('font-size', Math.max(Math.min(newSize, parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
						init = false;
					}

				});


			};

			
			resizer();

			// Call on resize. Opera debounces their resize by default.
			$(window).on('resize.fittext orientationchange.fittext', resizer);


		});

	};

})( jQuery );
