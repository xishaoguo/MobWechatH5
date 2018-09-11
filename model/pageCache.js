define(function(){
	var pageCache = Backbone.Model.extend({
		defaults:{
			pageString:null,
			pageCacheObj:null
		}
	});
	return pageCache;
});