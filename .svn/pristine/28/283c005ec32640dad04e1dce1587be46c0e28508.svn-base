define(['jquery','underscore','backbone','store','utils','params','constant','lang/en-us','lang/zh-cn','plugin/linq'],
function($,_,Backbone,store,utils,params,constant,English, Chinese){
	var SGClient = {
		baseUrl:null,
		currentRequest:null,//当前请求
		/**
		设置token
		**/
		setToken:function(_token){
			$.ajaxSetup(_token);
		},
		/**
		初始化方法
		**/
		initialize:function(){
			var self = this;
			self.baseUrl = utils.config.get('baseUrl');

			//android 序列号
			if(utils.browerVersion('android')){
				store.getDeviceCode(function(array){
					store.setNumber(array[3]);
				});
			}
			
			$.ajaxSetup({
				timeout: 120 * 1000,//连接120秒为超时
				beforeSend: function(xhr) {
//					xhr.setRequestHeader('mobile-obt-token', store.getToken());
//					xhr.setRequestHeader('appversion', utils.config.get('version'));
//					if(utils.browerVersion('android')&&!_.isEmpty(store.getNumber())){
//						xhr.setRequestHeader('number', store.getNumber());
//					}
				},
				//网络错误时
				error: function(xhr,status,e) {
					var msg = status;
					utils.hideMessage();
					if(msg == "error"){//网络连接错误
						//后台运行的请求，在网络有问题是不做提示。
//						if(xhr.flag && !("getKey,getAppVersion,reloadUserInfo,getOrderCountByApverParId,getLatestJourney".indexOf(xhr.flag) > -1)){
//							console.log("SGClient error xhr flag : "+xhr.flag);
//							utils.showAlert({text:utils.lang.connection_failed});
//						}
						utils.showAlert({text:utils.lang.connection_failed});
					}else if(msg == "abort"){//主动终止Ajax请求
					
					}else if(msg == "timeout"){//网络连接超时
						utils.showAlert({text:utils.lang.connection_timeout});
					}
				},
				dataFilter:function(data,type){
					//json obj
					var dataTemp = utils.stringToJson(data);
					
		         if(dataTemp.data == 'token error'){
		           	utils.hideMessage();
						utils.showAlert({text:utils.lang.login_status_disconnected,onOK:function(){
							utils.logoutClearData(self,store);
//							utils.getRouter().navigate("back/login",{trigger: true, replace: false});
//							if(utils.browerVersion('iOS')){
//							}
//							else {
//							}
							var loginpath = window.location.href;
							if(loginpath.indexOf("oIndex.html")!= -1){
								window.location.href="../wxOBT/oIndex.html"; 
							} else if (loginpath.indexOf('key=hotelsearch')!= -1) {
								var start = loginpath.indexOf('=')+1;
								var end = loginpath.indexOf('&');
								var mobile = loginpath.substring(start, end);//蓝信登录，取得用户手机号
								window.location.href= "../wxOBT/?moblieNo="+ mobile +"&&key=hotelsearch";
							} else if (loginpath.indexOf("key=order")!= -1) {
								var start = loginpath.indexOf('=')+1;
								var end = loginpath.indexOf('&');
								var mobile = loginpath.substring(start, end);//蓝信登录，取得用户手机号
								window.location.href= "../wxOBT/?moblieNo="+ mobile +"&&key=order";
							}
							else{
								window.location.href="../wxOBT/index.html"; 
							}
						}});
		           	/*utils.alert({text:utils.lang.login_status_disconnected,onOk:function(){	        		
							utils.getRouter().navigate("back/login",{trigger: true, replace: false});
						}});*/
	            }else{
	               return data;
					}
					
				}
				
			});
		},
		/**
		 * 终止异步请求
		 */
		abortAjax:function(){
			var self = this;
			if(self.currentRequest){
				self.currentRequest.abort();
			}
		},
		/**
      * 处理URL
      * @param  {String} _url 原始URL
      * @return {String}      处理过的URL
      */
      wrapUrl: function(_url) {
          if (_url.indexOf('?') > -1){
          	_url += "&_t=" + utils.genGuid();
          }else{
           	_url += "?_t=" + utils.genGuid();
           }
          return _url;
      },
		post:function(data,path,callback,type){
			var self = this;
			var req = new Object();
			req.para = JSON.stringify(data);
//			var tmpUrl = self.wrapUrl(self.baseUrl+path);
			var tmpUrl = self.baseUrl;
//			var flagStr = path.split('/')[2];
			if(type == null){
				self.currentRequest = $.post(tmpUrl,data,function(rs){			
					callback(rs);
				});
			}else if(type == 'json'){
				self.currentRequest =  $.ajax({
					type:"POST", 
//					dataType: 'JSONP',
//	                //jsonp的值自定义,如果使用jsoncallback,那么服务器端,要返回一个jsoncallback的值对应的对象. 
//	                jsonp: 'jsoncallback', 
					url:tmpUrl,
//					contentType:'application/json',
					data:req,
					success: function(_data){
						callback(_data);
					}
				});
			}
//			self.currentRequest.flag =  flagStr;
//			flagStr=null;
			
		},
		get:function(data,path,callback,type){
			var self = this;
			var tmpUrl = self.wrapUrl(self.baseUrl+path);
			var flagStr = path.split('/')[2];
			
			if(type == null){
				self.currentRequest = $.get(tmpUrl,data,function(rs){
					callback(rs);
				});
			}else if(type == 'json'){
				self.currentRequest =  $.ajax({
					type:"GET",
					url:tmpUrl,
					contentType:'application/json',
					data:JSON.stringify(data),
					success: function(_data){
						callback(_data);
					}
				});
			}
			self.currentRequest.flag =  flagStr;
			flagStr=null;
		}
//		getKey:function(callback){
//			var self = this;
//			self.get(null,"/hotel/getKey",callback);
//		},
	};
	return SGClient;
});