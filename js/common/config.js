define(['backbone'],function(Backbone){
	
	var Config = new Backbone.Model({

//		baseUrl:'http://10.6.96.14:8080/MobileOBT.WebService',//生产服务器
//		baseUrl:'http://smartbz.sohoto.com/MobileOBT.WebService',//带域名的生产服务器
//		baseUrl:'http://122.119.111.51:8180/MobWebAccess/ws/api',//测试服务器
		baseUrl:'http://flyer.travelsky.com/ws/api/wechat',//生产
//		baseUrl:'http://172.28.42.3/ws/api/wechat',
//		baseUrl:'http://172.28.42.3/api',
//		baseUrl:'http://172.27.42.91:8080/MobWebAccess/ws/api',
		feedbackMail:'417044835@qq.com',
		isDebug: true,
		version:'2.0.2'
		
	});
	return Config;
});