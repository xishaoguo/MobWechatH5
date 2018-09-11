/**
The function named reset is used to clear all items of the collection.If user logs out , please call the 
reset function to clear the page cache.
**/
define(['jquery','underscore','backbone','model/pageCache'],
function($,_,Backbone,pageCache){
	
	var PageCacheCollection = Backbone.Collection.extend({
		model:pageCache,
		fetch:function(){
			
		},
		removeByPageStr:function(_pageStr){
			var self = this;
			var item = self.where({pageString:_pageStr});
			self.remove(item);
			item = null;
		}
	});
	
	
	var pageCacheCollection = new PageCacheCollection();
	
	return pageCacheCollection;
});