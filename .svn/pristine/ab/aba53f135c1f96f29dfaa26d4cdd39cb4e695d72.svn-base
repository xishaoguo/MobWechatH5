define(['jquery','underscore','backbone','SGView','text!templates/information.html'],
function($,_,Backbone,SGView,viewtTpl){
	var Information = SGView.extend({
		template:_.template(viewtTpl),
		render:function(){
			var self = this;
			this.$el.empty();
			self.$el.append(self.template({lang:self.lang,data:self.params.informationType}));
			this.$el.attr('class','ui-page-active ui-page');
			setTimeout(function(){self.doScroll();},300);
			self.$el.on('pageshow',function(){ 
				$("#wrapper").height(document.body.clientHeight - $("#wrapper").position().top);
				self.initScroll("wrapper");
			}); 
			return this;
		},
		events: {
			"click #searchsubmit": "back",
		},
		/**
		 * 返回
		 */
		doScroll:function(){
			var self = this;
			$("#wrapper").height(document.body.clientHeight - $("#wrapper").position().top);
			self.initScroll("wrapper");
		}
	});
	return Information;
});