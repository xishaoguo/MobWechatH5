define(['jquery','underscore','backbone','SGView','text!templates/QRCode.html'],
function($,_,Backbone,SGView,viewtTpl){
	var QRCode = SGView.extend({
		pageId:'flight_list',
		template:_.template(viewtTpl),
		render:function(){
			var self = this;
			this.$el.empty();
			self.$el.append(self.template({lang:self.lang,data:self.params.guideRsp}));
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
	return QRCode;
});