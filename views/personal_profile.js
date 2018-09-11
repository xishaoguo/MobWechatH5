define(
		[ 'jquery', 'underscore', 'backbone', 'SGView',
				'text!templates/personal_profile.html' ],
		function($, _, Backbone, SGView, viewtTpl) {
			var PersonalProfile = SGView
					.extend({
						pageId : 'personal_profile',
						template : _.template(viewtTpl),
						render : function() {
							var self = this;
							this.$el.empty();
							this.$el.attr('class', 'ui-page-active ui-page');
							/*-------------------------------------------------------------------------*/
							var hisrsp = {};
							var sex = this.GetSex();
							setTimeout(function() {
								document.title = "个人资料";
							}, 100);
							setTimeout(function() {
								self.DeleteDiv();
							}, 100);
							var CertificateStatus = this.CertificateStatus();
							var flightData = this.FlightData();
							var Birthday = this.Birthday();

							self.$el.append(self.template({
								Sex : sex,
								FlightData : flightData,
								Birthday : Birthday,
								CertificateStatus : CertificateStatus,
							}));
							return this;
						},
						events : {
							"click #personalSex" : "PersonalSex",
							"click #personalBirthday" : "PersonalBirthday",
							"click #personalCert" : "PersonalCert",
							"change #input_head_portrait" : "InputHeadPortrait",
						},
						/**
						 * 性别页面
						 */
						PersonalSex : function() {
							this.jumpTo("forward/personalProfileSex");
							this.removeCache("gender");
						},
						/**
						 * 生日页面
						 */
						PersonalBirthday : function() {
							this.jumpTo("forward/personalProfileBirthday");
						},
						/**
						 * 身份证页面
						 */
						PersonalCert : function() {
							this.jumpTo("forward/personalProfileCert");
						},

						/**
						 * 获取选择的性别
						 * 
						 */
						GetSex : function() {
							var sex = this.getCache("Sex");
							if (sex == "0") {
								sex = "未设置"
							} else if (sex == "1") {
								sex = "男";
							} else if (sex == "2") {
								sex = "女";
							}
							return sex;
						},

						/**
						 * 飞行历史信息
						 * 
						 */
						FlightData : function() {
							var personalProfileData = this.getCache("PersonalProfileData");

							return personalProfileData;
						},
						/**
						 * 生日日期
						 * 
						 */
						Birthday : function() {
							var Birthday = this.getCache("Birthday");

							return Birthday;
						},

						/**
						 * 删除DIV逻辑
						 * 
						 */
						DeleteDiv : function() {
							var personalProfileData = this.getCache("PersonalProfileData");
							var certification_status = personalProfileData.certify_status;
							var Have = this.getCache("Have");

							if (certification_status != "1" || Have == 1) {
								$("#personalCert").remove();
							}
						},
						/**
						 * 证件认证状态
						 * 
						 */
						CertificateStatus : function() {
							var self=this;
							var personalProfileData = this.getCache("PersonalProfileData");
							var certification_status = personalProfileData.certify_status;
							if (certification_status == "1") {
								certification_status = "已认证";
								return certification_status;
							} else {
								certification_status = "未认证";
								return certification_status;
							}
						},
						/**
						 * 图片上传请求地址
						 * 
						 */
						InputHeadPortrait : function() {
							var self=this;
							var img_url=localStorage.getItem("img_url")+"";
							var openid = self.store.getOpenId();
							var _query = {
								"rpid" : "1007",
								"ropenid" : openid,
								"version" : "1.0",
								"rip" : "127.0.0.1",
								"rpara" : {
									"head_img_url" : img_url
								}
							};
							self.utils.showMessage("onLoading", '', self.sgClient);
							self.sgClient.post(_query, '', function(customs_data) {
								if (customs_data && customs_data.code == 0) {// 查询成功
									self.utils.showAlert({text : ("头像修改成功")});
									var rsp = eval("(" + customs_data.rsp + ")");
									/*self.addCache("headImgUrl",rsp.head_img_url);*/
									localStorage.removeItem("imgHeadUrl");
									localStorage.setItem("imgHeadUrl",rsp.head_img_url);
								} else if (customs_data && customs_data.code != 0) {// 查询失败
									self.utils.showAlert({
										text : (customs_data.msg)
									});
								}
								self.utils.hideMessage();
							}, "json");
						}
					});
			return PersonalProfile;
		});
/**
 * 上传头像
 * 
 */
function previewImage2(file) {
	var self = this;
	var url1="http://flyer.travelsky.com/wx/tfsUpload";
	if (file.files) {
		var img = document.getElementById('imghead');
		var reader = new FileReader();
		reader.onload = function(evt) {
			img.src = evt.target.result;
		}
		reader.readAsDataURL(file.files[0]);
	}
	var formData = new FormData($("#mainForm")[0]);
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
			var img_url=reData.tfsFileNames[0];
			localStorage.setItem("img_url",img_url);
		},
		error : function(XMLHttpRequest, textStatus, errorThrown) {
			alert("errorThrown=" + errorThrown);
		}
	});
}