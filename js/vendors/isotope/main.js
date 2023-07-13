// Product Filter
	$(window).load(function() {
	  "use strict";
	var $container = $('.gallery-main');
	$container.isotope({
		layoutMode: "masonry",
		itemSelector : '.gallery-item-main',
		transitionDuration: '0.5s'
	});
	var $optionSets = $('.gallery-item-filter'),
		$optionLinks = $optionSets.find('a');
	$optionLinks.click(function(){
		var $this = $(this);
		// don't proceed if already selected
		if ( $this.hasClass('active') ) {
			return false;
		}
		var $optionSet = $this.parents('.gallery-item-filter');
		$optionSet.find('.active').removeClass('active');
		$this.addClass('active');
	// make option object dynamically, i.e. { filter: '.my-filter-class' }
	var options = {},
		key = $optionSet.attr('data-option-key'),
		value = $this.attr('data-option-value');
		
	// parse 'false' as false boolean
	value = value === 'false' ? false : value;
	options[ key ] = value;
		if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
		changeLayoutMode( $this, options );
	} else {
		// otherwise, apply new options
		$container.isotope( options );
	}    
	return false;
	});
});


