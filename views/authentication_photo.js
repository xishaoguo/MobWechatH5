define(['jquery','underscore','backbone','SGView','text!templates/authentication_photo.html'],
function($,_,Backbone,SGView,viewtTpl){
	var AuthenticationPhoto = SGView.extend({
		pageId:'AuthenticationSuccess',
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
//			"click #camera": "camera",
			"change #fileElem": "Preview",
		},
		/**
		 * 拍照、访问相机
		 */
		camera:function(){
			var self = this;
			self.$el.find("#fileElem").localResizeIMG({
				      width: 400,
				      quality: 1,
				      success: function (result) {  
				          var submitData={
				                base64_string:result.clearBase64, 
				            }; 
				        $.ajax({
				           type: "POST",
				           url: "upload.php",
				           data: submitData,
				           dataType:"json",
				           success: function(data){
				             if (0 == data.status) {
				                alert(data.content);
				                return false;
				             }else{
				                alert(data.content);
				                var attstr= '<img src="'+data.url+'" alt="" />'; 
				                $(".imglist").append(attstr); 
				             }
				           }, 
				            complete :function(XMLHttpRequest, textStatus){
				            },
				            error:function(XMLHttpRequest, textStatus, errorThrown){ //上传失败 
				               alert(XMLHttpRequest.status);
				               alert(XMLHttpRequest.readyState);
				               alert(textStatus);
				            }
				        }); 
				      }
				  });
		},
		/*
		 * 预览
		 */
		Preview:function(e){
			var self = this;
//			window.URL = window.URL || window.webkitURL;
			var    fileList = document.getElementById("fileList");
			var files = document.getElementById("fileElem").files[0];
			var objUrl = self.getObjectURL(files) ;
			console.log("objUrl = "+objUrl) ;
			if (objUrl) {
				var img = new Image();
				img.src = objUrl;
			      img.width = 200;
			      img.onload = function(e) {
			         window.URL.revokeObjectURL(this.src); //图片加载后，释放object URL
			      }
			      fileList.appendChild(img);
			}
		},
		getObjectURL:function(file){
			var url = null ; 
			if (window.createObjectURL!=undefined) { // basic
				url = window.createObjectURL(file) ;
			} else if (window.URL!=undefined) { // mozilla(firefox)
				url = window.URL.createObjectURL(file) ;
			} else if (window.webkitURL!=undefined) { // webkit or chrome
				url = window.webkitURL.createObjectURL(file) ;
			}
			return url ;
		}
	});
	return AuthenticationPhoto;
});