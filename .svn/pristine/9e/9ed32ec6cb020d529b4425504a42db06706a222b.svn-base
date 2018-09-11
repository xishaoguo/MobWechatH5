define(['router','utils','SGClient','store','jqm'], 
function(router,utils,SGClient,Store) {
	'use strict';

	var lang;
	
	var init = function() {
		utils.getAppLang(Store);
		//create backbone router
		utils.setRouter(router);
		SGClient.initialize();
		Backbone.history.start();

	};

	return {
		initialize: init
	};
});


