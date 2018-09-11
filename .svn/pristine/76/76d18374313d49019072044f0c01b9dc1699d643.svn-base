define(['jquery','underscore','backbone','SGView','text!templates/others_checkin.html'],
function($,_,Backbone,SGView,viewtTpl){
	var OthersCheckin = SGView.extend({
		pageId:'OthersCheckin',
		template:_.template(viewtTpl),
		render:function(){
			var self = this;
			this.$el.empty();
			var othersticketList = self.getCache("othersticketList");//值机航班列表
			self.$el.append(self.template({lang:self.lang,data:othersticketList}));
//			self.$el.addClass('login-bg ui-page-active');
			this.$el.attr('class','ui-page-active ui-page');
			return this;
		},
		events: {
			"click #searchsubmit": "back",
		},
		/**
		 * 返回
		 */
		back:function(){
			this.jumpTo("back/flightsearch");
		}
	});
	return OthersCheckin;
});