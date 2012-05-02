/**
 * scrollTimeAnchor plugin for jQuery
 * v1.0
 * Move to anchor with a regular scroll time
 *
 * By Tazzkiller, creanet3d.com
 *
 * Please use as you wish at your own risk.
 */

/**
 * Usage:
 *
 * From JavaScript, use:
 *
 *		$(document).ready(function(){
 *     $(<select>).scrollTimeAnchor({duration: '<A>', wrapper: '<B>', top: '<C>', easing: '<D>' });
 *		});
 *
 *     where:
 *       <select> is the DOM node selector, e.g. ".scroll"
 *       <A> Duration of total scroll (default = '10000' )
 *       <B> Id of the container for scroll ( Important !! fixed height,  default = '#main' )
 *       <C> Distance to the top for stop scroll (default = '300' )
 *       <D> include plug in easing for easing (default = 'swing' )
 */

(function($) {

	$.fn.scrollTimeAnchor = function(params) {

		params = $.extend( {duration: '10000', wrapper: '#main', top: '300', easing: 'swing' }, params);

		this.click(function() {
	   var $obj = $(this);
	   var elementClicked = $obj.attr("href");
	   var elementCourant = window.pageYOffset;
	   var winHeight = $(params.wrapper).outerHeight();
	   var destination = $(elementClicked).offset().top;
	   var totalCourant = winHeight - elementCourant;
	   if ( params.duration > winHeight ) {
	   var scrollRatio = winHeight / params.duration;
	   }
	   else { var scrollRatio = params.duration / winHeight; }
	   var totalClicked = winHeight - destination;
	   if ( totalCourant > totalClicked ) { var durationScroll = ((totalCourant - totalClicked) * scrollRatio);} 
	   else { var durationScroll = ((totalClicked - totalCourant) * scrollRatio);}
	   $("html,body").animate({ scrollTop: destination - params.top}, {duration: durationScroll,easing:params.easing});
	   return false;
		});
		return this;
		};

})(jQuery);