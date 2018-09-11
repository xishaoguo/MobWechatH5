define(['jquery','underscore','backbone','SGView','text!templates/flight_details.html'],
function($,_,Backbone,SGView,viewtTpl){
	var FlightDetails = SGView.extend({
		pageId:'flight_list',
		template:_.template(viewtTpl),
		render:function(){
			var self = this;
			this.$el.empty();
			var TicketDetail = self.getCache("TicketDetail");
			self.$el.append(self.template({lang:self.lang,data:TicketDetail,guideRsp:self.params.guideRsp}));
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
		back:function(){
			this.jumpTo("back/flightsearch");
		}
	});
	return FlightDetails;
});