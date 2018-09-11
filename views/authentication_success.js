define(['jquery','underscore','backbone','SGView','text!templates/authentication_success.html'],
function($,_,Backbone,SGView,viewtTpl){
	var AuthenticationSuccess = SGView.extend({
		pageId:'authenticationsuccess',
		template:_.template(viewtTpl),
		render:function(){
			var self = this;
			this.$el.empty();
			self.$el.append(self.template({lang:self.lang}));
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
	return AuthenticationSuccess;
});