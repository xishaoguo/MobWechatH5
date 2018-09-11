define(['jquery'], function($) {
	'use strict';
	
	$(document).bind("mobileinit", function() {
		$('html').addClass( "ui-mobile ui-mobile-rendering");
		$.mobile.buttonMarkup.hoverDelay = "false";
		if (navigator.userAgent.indexOf("Android") != -1)  
		{  
			$.mobile.defaultPageTransition = 'none';  
			$.mobile.defaultDialogTransition = 'none';  
		} 
		$.mobile.ajaxEnabled = false;
		$.mobile.ajaxLinksEnabled = false;
		$.mobile.linkBindingEnabled = false;
		$.mobile.hashListeningEnabled = false;
		$.mobile.pushStateEnabled = false;
		// Remove page from DOM when it's being replaced
		$.mobile.defaultPageTransition='slide';
		$.mobile.pageContainer = $('#container');
		$.mobile.defaultTransitionHandler = $.mobile.transitionHandlers.simultaneous;
		$('div[data-role="page"]').live('pagehide', function(event, ui) {
			
			var pages = $('div[data-role="page"]');
			var tmpLength = pages.length;
			if(tmpLength >= 2){
				for(var i = 0;i < tmpLength;i ++){
					if(i != (tmpLength-1)){
						pages.eq(i).remove();
					}
						
				}
			}
			//$(event.currentTarget).remove();
		});
	});
});
