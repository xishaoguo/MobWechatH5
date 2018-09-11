define([ 'jquery', 'underscore', 'backbone', 'SGView',
		'text!templates/personal_feedback_view.html' ], function($, _, Backbone,
		SGView, viewtTpl) {
	var PersonalFeedbackView = SGView.extend({
		pageId : 'personal_feedback_view',
		template : _.template(viewtTpl),
		render : function() {
			var self = this;
			this.$el.empty();
			this.$el.attr('class', 'ui-page-active ui-page');
			/*-------------------------------------------------------------------------*/
			/*setTimeout(function(){self.GetThePicture()},500);*/
			setTimeout(function(){document.title = "意见反馈";},100);
			var ReplyMessage = this.ReplyMessage();
			var ReplyContent = this.ReplyContent();
			var hisrsp = {};
			self.$el.append(self.template({
				ReplyMessage:ReplyMessage,ReplyContent:ReplyContent
			}));
			self.$el.on('pageshow',function(){ 
				$("#feedback_view_page").height(document.body.clientHeight - $("#feedback_view_page").position().top);
				self.initScroll("feedback_view_page");
			}); 
			return this;
		},
		events : {
			"click #writeSuggest" : "PersonalFeedbackWrite",
			"click .DeleteReplyImg" : "DeleteReply",
			"click #button_qickmi" : "ButtonQickmi",
		},
		/**
		 * 回复反馈
		 * 
		 */
		PersonalFeedbackWrite : function() {
			this.jumpTo("forward/personalFeedbackWrite");
		},
		/**
		 * 删除本条回复
		 * 
		 */
		DeleteReply : function(e) {
			var self = this;
			var text1 = "您确定删除此条记录吗?";
			var text2 = "我们正在处理并积极回复您的建议,您确认撤回此条建议吗?";
			var text;
			var element = $(e.currentTarget);
			var imgBeruaser = element.parent().parent().next().next().children().children().text();
			if(imgBeruaser!="请等待回复"){
				text = text1;
			}else{
				text = text2;
			}
			self.utils.showAlert({text:text,onOK:function(){
				var imgBeruaser = element.next('div');
				var messageId = imgBeruaser.text();
				var openid = self.store.getOpenId();
				//var openid = "oG3L4wvgC1BaFc-PTdjFAb2DF7xk";
				var _query = {
					    "rpid": "1011", 
					    "ropenid":openid, 
					    "version": "1.0", 
					    "rip": "127.0.0.1", 
					    "rpara": {
					        "message_id": messageId
					    }
					};
				self.utils.showMessage("onLoading", '', self.sgClient);
				self.sgClient.post(_query, '', function(customs_data) {
					if (customs_data && customs_data.code == 0) {// 查询成功
						self.utils.showAlert({
							text : ("删除成功")
						});
						var ulelement = element.parent('div').parent('li').parent('ul').parent('div');
						ulelement.remove();
					} else if (customs_data && customs_data.code != 0) {// 查询失败
						self.utils.showAlert({
							text : (customs_data.msg)
						});
					}
					self.utils.hideMessage();
				}, "json"); 
			},onCancel:function(){
				return false;
			}});
		},
		/**
		 * 回复信息列表
		 * 
		 */
		ReplyMessage : function() {
			var ReplyMessage = this.getCache("ReplyMessage");
			return ReplyMessage;
		},
		/**
		 * 判断回复是否为空
		 * 
		 */
		ReplyContent : function() {
			var ReplyMessage = this.getCache("ReplyMessage");
			for (var i = 0; i < ReplyMessage.length; i++) {
				var reply_content = ReplyMessage[i].reply_content;
				if(reply_content==null){
					reply_content="请等待回复";
				}
			}
			return reply_content;
		}
	});
	return PersonalFeedbackView;
});
