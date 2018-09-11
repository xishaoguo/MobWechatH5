define([ 'jquery', 'underscore', 'backbone', 'SGView',
		'text!templates/personal_feedback_write2.html' ], function($, _, Backbone,
		SGView, viewtTpl) {
	var PersonalFeedbackWrite2 = SGView.extend({
		pageId : 'personal_feedback_write',
		template : _.template(viewtTpl),
		render : function() {
			var self = this;
			this.$el.empty();
			this.$el.attr('class', 'ui-page-active ui-page');
			/*-------------------------------------------------------------------------*/
			setTimeout(function(){document.title = "意见反馈";},100);
			var ReplyMessage = this.ReplyMessage();
			var ReplyContent = this.ReplyContent();
			var hisrsp = {};
			self.$el.append(self.template({
				ReplyMessage:ReplyMessage,ReplyContent:ReplyContent
			}));
			return this;
		},
		events : {
			"click #lookBack" : "LookBack",
			"click #writeSuggest" : "WriteSuggest",
			"click .DeleteReplyImg" : "DeleteReply",
			"click #button_qickmi" : "ButtonQickmi",
			"blur #status" : "ClearPromptInformation",
			"focus #status" : "PromptInformation",
			"keydown #status" : "CountChar",
			"keyup #status" : "CountChar",
			"click #personal_feed_buttonDiv" : "PersonalFeedButtonDiv",
			"click #delImg" : "DeleteImage",
			"click .img_ok" : "PersonalFeedbackWriteDiv",
			"click .preview-pictures-buttom-back" : "PreviewPicturesButtomBack",
			"click .preview-pictures-buttom-delete" : "PreviewPicturesButtomDelete",
		},
		/**
		 * 点击切换到看回复
		 */
		LookBack:function(){
			$("#write_suggest_page").hide();
			$("#look_back_page").show();
			$(".personal_feedback_write_div_03").css("color","#FFC54F");
			$(".personal_feedback_write_div_02").css("color","#AAA");
		},
		/**
		 * 点击切换到提建议
		 */
		WriteSuggest:function(){
			$("#write_suggest_page").show();
			$("#look_back_page").hide();
			$(".personal_feedback_write_div_02").css("color","#FFC54F");
			$(".personal_feedback_write_div_03").css("color","#AAA");
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
		},
		/**
		 *清除提示文字
		 * 
		 */
		PromptInformation : function() {
			var statusVal = $("#status").val();
			if(statusVal=='请写下您的建议,帮助我们更好的为您服务'){
				$("#status").val('');
				 $("#status").removeClass("textarea_text_style");
			}
		},
		/**
		 *恢复提示文字
		 * 
		 */
		ClearPromptInformation : function() {
			var statusText = $("#status").val();
			if(statusText==''){
				$("#status").val('请写下您的建议,帮助我们更好的为您服务');
				$("#status").addClass("textarea_text_style");
			}
		},
		/**
		 *判断输入的字数
		 * 
		 */
		CountChar : function() {
			document.getElementById("counter").innerHTML = document.getElementById("status").value.length;
			   var personalFeedButtonDiv = document.getElementById("personal_feed_buttonDiv");
			   if(document.getElementById("status").value.length != "0"){
					personalFeedButtonDiv.removeAttribute("class");
					personalFeedButtonDiv.setAttribute("class",'personal_sex_buttonDiv_01');
			   }else if(document.getElementById("status").value.length == "0"){
				   personalFeedButtonDiv.removeAttribute("class");
				   personalFeedButtonDiv.setAttribute("class",'personal_sex_buttonDiv_02');
			   }
		},
		/**
		 * 删除图片
		 * 
		 */
		DeleteImage : function(e) {
			var preview = $(e.currentTarget);
			var preview_parent = preview.parent();
			var id = preview_parent.parent().attr("id");
			var idNum=id.charAt(id.length - 1);
			idNum=idNum-1;
			var idObject = document.getElementById("input_file"+idNum);
			if (idObject != null){
			    idObject.parentNode.removeChild(idObject);
			}
			preview_parent.parent().remove();
			var fileParamArry = $("#uploadForm").children();
			if(fileParamArry.length<="4"){
				$("#input_file0").removeAttr("disabled","disabled");
				$(".add_button").css("width","100px");
			}
			if(fileParamArry.length=="1"){
				$("#Continue_upload").addClass("dispalyNone");
				var jixu = '<div class="upload_photo upload_paddingTop3" id = "upload_picture_text">上传照片</div>';
				$("#upload_button").append(jixu);
				$("#upload_button").css("margin-top","0px");
				$("#upload_button").css("margin-left","-10px");
			}
			return;
		},
		/**
		 * 图片放大后删除
		 */
		PreviewPicturesButtomDelete:function(){
			var UpDataId = this.getCache("UpDataId");
			var inpIdNum = this.getCache("inpIdNum");
			var str = "#"+UpDataId;
			var str2 = "#"+inpIdNum;
			$(str).parent().parent().remove();
			if ($(str2) != null){
				$(str2).remove();
			}
			$("#preview_pictures").remove();
			$("#isDelete").hide();
			var fileParamArry = $("#uploadForm").children();
			if(fileParamArry.length<="4"){
				$("#input_file0").removeAttr("disabled","disabled");
				$(".add_button").css("width","100px");
			}
			if(fileParamArry.length=="1"){
				$("#Continue_upload").addClass("dispalyNone");
				var jixu = '<div class="upload_photo upload_paddingTop3" id = "upload_picture_text">上传照片</div>';
				$("#upload_button").append(jixu);
				$("#upload_button").css("margin-top","0px");
				$("#upload_button").css("margin-left","-10px");
			}
		},
		/**
		 * 图片放大后返回
		 */
		PreviewPicturesButtomBack:function(){
			$("#preview_pictures").remove();
			$("#isDelete").hide();
		},
		/**
		 * 点击图片放大
		 */
		PersonalFeedbackWriteDiv:function(e){
			var self = this;
			$("#isDelete").show();
			var UpDataImg = $(e.currentTarget);
			var UpDataId = UpDataImg.attr("id");
			var idNum=UpDataId.charAt(UpDataId.length - 1);
			idNum=idNum-1;
			var inpIdNum = "input_file"+idNum;
			self.addCache("inpIdNum",inpIdNum);
			self.addCache("UpDataId",UpDataId);
			var ImgSrc = UpDataImg.attr("src");
			var previewPicturesImg = '<img alt="" src="'+ImgSrc+'" id = "preview_pictures">';
			$("#isDelete").append(previewPicturesImg);
		},
		/**
		 * 提交信息
		 * 
		 */
		PersonalFeedButtonDiv : function() {
			var status = document.getElementById("status");
			if(status.value != "" && status.value != null && status.value != "请写下您的建议,帮助我们更好的为您服务"){// 判断输入框有没有内容
				var self = this;
				var openid = self.store.getOpenId();
				// var openid = "oG3L4wvgC1BaFc-PTdjFAb2DF7xk";
				var formData = new FormData($("#uploadForm")[0]);
				var url1="http://flyer.travelsky.com/wx/tfsUpload";
				$.ajax({
					type : "POST",
					url : url1,
					data : formData,
					async : false,
					cache : false,
					contentType : false,
					processData : false,
					dataType : "json",
					success : function(data) {
						var reData = eval("(" + data.rsp + ")");
						var img_url=reData.tfsFileNames;
						var img_urlStr = "'"+img_url+"'";
						img_url = img_urlStr.substring(1,img_urlStr.length-1);
						var _query = {
							    "rpid": "1012", 
							    "ropenid": openid, 
							    "version": "1.0", 
							    "rip": "127.0.0.1", 
							    "rpara": {
							        "content": status.value, 
							        "img_address": img_url
							    }
							};
						self.utils.showMessage("onLoading",'',self.sgClient);
						self.sgClient.post(_query,'',function(customs_data){
							if (customs_data && customs_data.code == 0) {// 查询成功
								self.utils.showAlert({
									text : ("感谢您的宝贵意见，请耐心等待回复：）"),
									title : ("提交成功"),
									onOK:function(){
										var _query = {
											    "rpid": "1013", 
											    "ropenid": openid, 
											    "version": "1.0", 
											    "rip": "127.0.0.1", 
											    "rpara": ""
											};
										self.utils.showMessage("onLoading",'',self.sgClient);
										self.sgClient.post(_query,'',function(data){
											if (data && data.code == 0) {// 查询成功
												var DataRsp = JSON.parse(data.rsp);
												// 清空输入框
												status.value = "";
												var personalFeedButtonDiv = document.getElementById("personal_feed_buttonDiv");
												personalFeedButtonDiv.removeAttribute("class");
												personalFeedButtonDiv.setAttribute("class",'personal_sex_buttonDiv_02');
												document.getElementById("counter").innerHTML = "0";
												$("#upload_part").siblings().remove();
												$("#Continue_upload").addClass("dispalyNone ");
												$("#upload_button").css("margin-top","0px");
												var inputFirst = $("#uploadForm").find("input").first()
												inputFirst.siblings().remove();
												$("#input_file0").removeAttr("disabled","disabled");
												if($("#upload_picture_text").attr("class")!="upload_photo upload_paddingTop3"){
													var juxuAdd = '<div class="upload_photo upload_paddingTop3" id = "upload_picture_text">上传照片</div>';
													$("#upload_button").append(juxuAdd);
												}
												self.removeCache("ReplyMessage");
												self.addCache("ReplyMessage",DataRsp);
												$("#write_suggest_page").hide();
												$("#look_back_page").show();
												$(".personal_feedback_write_div_03").css("color","#FFC54F");
												$(".personal_feedback_write_div_02").css("color","#AAA");// 跳到回复页面
											} else if (data && data.code != 0) {// 查询失败
												self.utils.showAlert({
													text : (data.msg)
												});
											}
												self.utils.hideMessage();
											},"json");
									}
								});
							} else if (customs_data && customs_data.code != 0) {// 查询失败
								self.utils.showAlert({
									text : (customs_data.msg)
								});
							}
							self.utils.hideMessage();
							},"json");
					},
					error : function(XMLHttpRequest, textStatus, errorThrown) {
						alert("errorThrown=" + errorThrown);
					}
				});
			}
		}
	});
	return PersonalFeedbackWrite2;
});
/**
 * 上传
 * 
 */
var index=1;
function previewImage(files){
	$("#upload_button").css("margin-top","35px")
	$("#upload_button").css("margin-left","10px")
	$("#upload_picture_text").addClass("dispalyNone");
	$("#Continue_upload").attr("class","");
	$("#upload_picture_text").remove();
	var fileParamArry = $("input[name=fileParam]");
	if(fileParamArry.length=="4"){
		$("#input_file0").attr("disabled","disabled");
		$(".add_button").css("width","0");
	}
	var html = '';
	var file;
	var onceFileCount = files.files.length;
	var i = 0;
	while (files.files[i]!=undefined) {
		file = files.files[i];
		// 隐藏当前的input file，然后添加一个新的上去
		$(file).hide();
		var inputFile = '<input type="file" data-role="none" id = "input_file'+window.index+'" name="fileParam"  onchange="previewImage(this)"/>';
		$("#uploadForm").prepend(inputFile);
		var reader = new FileReader();
        reader.onload = function(e) {
			html = html +'<div id="wpic_' + window.index + '" class="personal_feedback_write_div_04"  style="overflow:visible!important;">'
						+'<div id="img1" style="overflow:visible!important;">'
						+'<img id="delImg" src="images/Clear.png" data-ke-src="add_img.png" class="personal_feedback_write_img_01"/>'
						+'<img class = "img_ok" id="uploadImage_' + window.index + '" name="uploadImage" src="' + e.target.result + '" data-ke-src="add_img.png" class="personal_feedback_write_img_02"/>'
						+'</div>'
						+'</div>';
			$("#upload_files").append(html);
			html='';
			window.index++;
		}
		i++;
		reader.readAsDataURL(file);
      }
}