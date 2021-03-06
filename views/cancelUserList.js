define(['jquery','underscore','backbone','SGView','text!templates/cancelUserList.html'],
function($,_,Backbone,SGView,viewtTpl){
	var CancelUserList = SGView.extend({
		pageId:'flight_list',
		template:_.template(viewtTpl),
		render:function(){
			var self = this;
			this.$el.empty();
			var cancelUserList = self.getCache("cancelUserList");
			self.$el.append(self.template({lang:self.lang,cancelUserList:cancelUserList}));
			this.$el.attr('class','ui-page-active ui-page');
			return this;
		},
		events: {
			"click .j-select-user": "selectUser",
			"click .button": "queryCancelTicket",
		},
		/**
		 * 选中
		 */
		selectUser:function(e){
			var self = this;
			var target = $(e.currentTarget);
			$('.cancel-user-checked').removeClass('cancel-user-checked');
			$('.cancel-checked-icon').remove();
			target.addClass('cancel-user-checked');
			var html ='<div class="div-inline all-icon cancel-checked-icon"></div>';
			target.append(html);
		},
		/**
		 * 取消选座列表
		 */
		queryCancelTicket:function(){
			var self = this;
			var ropenid = self.store.getOpenId();
			var passengerName = $('.cancel-user-checked').attr("passengerName");
			var idNumber = $('.cancel-user-checked').attr("certNo");
			var idType = $('.cancel-user-checked').attr("certType");
			self.params.cancelUserInfo = {
				"passengerName":passengerName,
				"idNumber":idNumber,
				"idType":idType
			};
			if(idType=="NI"){
				idType = "0";
			}else{
				idType = "5";
			}
			var query= {
				    "rpid":"2005",
				    "ropenid":ropenid,
				    "version":"1.0",
				    "rip":"127.0.0.1",
				    "rpara":{
				        "idNumber":idNumber,
				        "idType":idType
				    }
				};
			self.utils.showMessage("",'',self.sgClient);
			self.sgClient.post(query,'',function(_data){			
				if(_data && _data.code == 0){//查询成功
					var cancelTicketList = _data.rsp;
					self.addCache("cancelTicketList",cancelTicketList);
					self.jumpTo("forward/cancellticketlist");
				}else if(_data.code != 0){//查询失败
					self.utils.showAlert({text:(_data.msg)});
				}
				self.utils.hideMessage();
			},"json");
		}
	});
	return CancelUserList;
});