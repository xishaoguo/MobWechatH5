define(['jquery', 'underscore', 'backbone','lang/en-us','lang/zh-cn','params','store','utils','SGClient','model/PageCacheCollection','model/pageCache','Iscroll'],
function($, _, Backbone , English , Chinese,params, Store,utils ,sgClient,PageCacheCollection,PageCache) {
	
	var SGView = Backbone.View.extend({
		lang :null,//语言包
		sgClient:null,//网络类
		store:null,//存储类
		utils:null,//工具类

		//add zg
		params:null,
		isAmex:false,//是否是运通用户
		/**
		页面缓存数据，根据pageId去查找，往PageCacheCollection里面塞数据的时候，pageString要跟页面的pageId保持一致
		pageId必须手动去写，并且保证唯一性
		**/
		cacheData:null,
		/**
		创建一个cache对象增加到全局的PageCacheCollection中，
		_pageId需要缓存页面的pageId,
		_cacheObj需要缓存的对象
		**/
		addCache:function(_pageId,_cacheObj){
			
			if(_pageId == null || _pageId == undefined || _pageId == '' || _cacheObj == null || _cacheObj == undefined){
				return;
			}
			PageCacheCollection.removeByPageStr(_pageId);
			var tmpCache = new PageCache({pageString:_pageId,pageCacheObj:_cacheObj});
			PageCacheCollection.add(tmpCache);
		},
		/**
		获取其他页面的PageCache,通过pageId查找
		**/
		getCache:function(_pageId){
			if(_pageId == null || _pageId == undefined || _pageId == ''){
				return null;
			}
			
			var pageCacheArray = PageCacheCollection.where({pageString:_pageId});
			if(pageCacheArray.length != 0){
				return pageCacheArray[0].get('pageCacheObj');
			}else{
				return null;
			}
		},
		/**
		从全局的PageCacheCollection中删除_pageId对应的缓存对象
		**/
		removeCache:function(_pageId){
			if(_pageId == null || _pageId == undefined || _pageId == ''){
				return;
			}
			PageCacheCollection.removeByPageStr(_pageId);
		},
		/**
		 * 移除全部缓存
		 */
		remvoeAllCache:function(){
			var self=this;
			//缓存中所有的model
			var models= PageCacheCollection.models;
			if(!_.isEmpty(models)){
				$.each(models,function(){
					PageCacheCollection.pop();
				});
			}
		},
		/**
		删除当前页面缓存，包括从全局PageCacheCollection中删除，将当前页面的cacheData置为null
		**/
		removeSelfCache:function(){
			var self = this;
			if(self.pageId == null || self.pageId == undefined || self.pageId == ''){
				return;
			}
			PageCacheCollection.removeByPageStr(self.pageId);
		},
		scroller:null,//滚动对象
		/**
		_scrollId为滚动部分最外层元素的id
		**/
		initScroll:function(_scrollId){
			var self = this;
			var wrapper = self.$el.find('#'+_scrollId);
			self.scroller = new iScroll(wrapper[0]);
		},
		/**
		 * 选座
		 */
		seatCharts:null,
		/**
		用于页面间跳转
		**/
		jumpTo:function(_path){
			var self = this;
			self.utils.getRouter().navigate(_path,{trigger:true,replace:false});
		},
		initialize :function(){
			/**
			初始化语言包
			**/
			var self = this;
			self.lang = utils.lang;
			/*if(utils.lang == 'zh-cn'){
				self.lang = Chinese;
			}else if(utils.lang == 'en-us'){
				self.lang = English;
			}else{
				self.lang = Chinese;
			}*/
			self.sgClient = sgClient;
			self.store = Store;
			self.utils = utils;
			//add zg
			self.params=params;
			//判断是否是运通用户，运通订制，该属性在View中通用(机票和酒店)
			if(self.store.getMyInfo().defaultSetup){
				self.isAmex=true;
			}

			//add zg
			/**
			查找页面缓存
			**/
			if(self.pageId != undefined && self.pageId != '' && self.pageId != null){
				var pageCacheArray = PageCacheCollection.where({pageString:self.pageId});
				if(pageCacheArray.length != 0){
					self.cacheData = pageCacheArray[0].get('pageCacheObj');
				}
			}
			
			/**
			添加页面默认jquery mobile主题
			**/
			self.$el.attr('data-theme','g');
			
		},
		/**
		子类render中调用该方法，就能绑定page的pageshow和pagehide事件
		然后在子类中实现对应的pageShow和pageHide对应的方法，就能获得对应事件的回调
		**/
		initPageEvent:function(){
			var self = this;
			self.$el.unbind('pageshow').bind('pageshow',function(){
				self.pageShow();
			});
			self.$el.unbind('pagehide').bind('pagehide',function(){
				self.pageHide();
			});
		},
		/**
		根据journeyno修改order_list or review_list中缓存对应的订单状态，
		_type = 1,修改订单列表order_list
		_type = 2,修改审批列表review_list
		**/
		modifyOrderListCache:function(_type,_journeyno,_orderStatus){
			var self = this;
			var tmpOrderList = self.getCache('OrderList');
			
			if(_type == 1){
				tmpOrderList = self.getCache('OrderList');
			}else if(_type == 2){
				tmpOrderList = self.getCache('ReviewList');
			}else{
				return;
			}
			
			if(!tmpOrderList || tmpOrderList.length <= 0){
				return;
			}
			
			for(var i = 0; i < tmpOrderList.length; i ++){
				
				var tmpLeader = tmpOrderList[i];
				
				if(!tmpLeader.list || tmpLeader.list.length <=0 ){
					continue;
				}
				
				for(var j = 0;j < tmpLeader.list.length;j++){
					var tmpItem = tmpLeader.list[j];
					if(tmpItem.journeyno == _journeyno){
						tmpItem.orderState = _orderStatus;
						break;
					}
				}
				
			}

		},
		
	});
	
	return SGView;
});