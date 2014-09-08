(function($) {
	$.fn.sliderFlow = function(options) {

				// Settings
		var settings = $.extend({
			'container' : '.slider-container',
			'navigation' : '.slider-navigation',
			'slide': '.slide',
			'speed': 300
		}, options );

		var $_slider = $(this);
		var $_container = $(settings.container);
		var $_navigation = $(settings.navigation);

		var maxSlides = 5;

		var slide_margin,
			slide_quantity,
			slide_width,
			slide_indent;

		$_navigation.slider({
			value:100,
			min: 0,
			value: 0,
			step: 1,
			slide: function( event, ui ) {
				slideTo( ui.value );
			}
		});

		// Initilize
		initializeSize()

		$( window ).resize(function() { initializeSize() });

		// ########

		function initializeSize() {
		    if ($_slider.width() < 480) { maxSlides = 2; }
			else if ($_slider.width()>1750) {maxSlides = 7;}
			else if ($_slider.width() < 760) { maxSlides = 3; }
			else {maxSlides = 5;}

			slide_margin = $_slider.find(settings.slide).outerWidth(true) - $_slider.find(settings.slide).width();
			slide_quantity = $_slider.find(settings.slide).length;
			slide_width = Math.round( $_slider.width() / maxSlides);
			slide_indent = Math.floor(maxSlides/2);

			$_slider.find(settings.slide).width(slide_width - slide_margin);
			$_container.width(slide_quantity*slide_width);
			$_navigation.slider("option", "max", slide_quantity-1 );

			slideTo($_navigation.slider( "value" ));
			return;
		}

		// ** Navigation ** 

		$_slider.on('click', settings.slide, function() {
			slideTo( $(this).index() );
		})

		$_slider.on('slideTo', function(event, e) {
			slideTo( e );
		})

		$_slider.on('rebuild', function () {
		    initializeSize();
		});

		function slideTo(e) {
			if (e>=0 && e<=slide_quantity ) {
				$_slider.find(settings.slide+'.active-slide').removeClass('active-slide');
				$_slider.find(settings.slide).eq(e).addClass('active-slide');
				$_slider.stop(true, false).animate({
					scrollLeft: (e-slide_indent) * (slide_width)
			    }, settings.speed);
				$_navigation.slider("value", e);

			    $_slider.trigger('slidechange', e);
		    }
		}
			
	};
})(jQuery);