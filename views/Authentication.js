define(['jquery','underscore','backbone','SGView','text!templates/Authentication.html'],
function($,_,Backbone,SGView,viewtTpl){
	var Authentication = SGView.extend({
		pageId:'Authentication',
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
			"click #do": "back",
		},
		/**
		 * 微信支付认证
		 */
		back:function(){
			var self = this;
			var query = {
				    "rpid":"1036",
				    "ropenid":"4526948",
				    "version":"1.0",
				    "rip":"127.0.0.1",
				    "rpara":{
				        "open_id":"001",
				        "cert_type":1,
				        "cert_id":"430521198806130038",
				        "user_name":"mob"
				    }
				};
			self.utils.showMessage("",'',self.sgClient);
			self.sgClient.post(query,'',function(_data){			
				if(_data && _data.code == 0){//查询成功
					var TicketDetail = JSON.parse(_data.rsp);
					self.addCache("TicketDetail",TicketDetail);
					self.jumpTo("forward/authenticationsuccess");
				}else if(_data.code != 0){//查询失败
					self.utils.showAlert({text:(_data.msg)});
					self.jumpTo("forward/authenticationphoto");
				}
				self.utils.hideMessage();
			},"json");
		}
	});
	return Authentication;
});