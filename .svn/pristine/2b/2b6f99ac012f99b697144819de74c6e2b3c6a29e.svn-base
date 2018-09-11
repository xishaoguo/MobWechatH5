define(['jquery','underscore','backbone','SGView','text!templates/myseatselection_details.html'],
function($,_,Backbone,SGView,viewtTpl){
	var MyseatSelectionDetails = SGView.extend({
		pageId:'flight_list',
		template:_.template(viewtTpl),
		render:function(){
			var self = this;
			this.$el.empty();
			var CheckInRsp = self.getCache("CheckInRsp");
			self.$el.append(self.template({lang:self.lang,data:self.params.guideRsp,data2:self.params.nowMyFlightInfo,CheckInRsp:CheckInRsp,BoardingTime:self.BoardingTime()}));
			this.$el.attr('class','ui-page-active ui-page');
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
		 * 计算登机时间
		 */
		BoardingTime:function(){
			var self = this;
			var x = self.params.guideRsp.deDate+" "+self.params.guideRsp.deTime; // 取得离开日期+时间
		    var time = new Date(x.replace("-","/"));
		          
		    var b = 45; //分钟数
		    time.setMinutes(time.getMinutes() - b, time.getSeconds(), 0);
		    var BoardingTime = (time.getHours()<10?'0'+time.getHours():time.getHours()) + ":" + (time.getMinutes()<10?'0'+time.getMinutes():time.getMinutes());
		    return BoardingTime;
		}
	});
	return MyseatSelectionDetails;
});