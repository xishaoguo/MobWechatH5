define(function(){
	var InstallAPK = function(){
	};
	InstallAPK.prototype = {
			/**
			 * android安装应用
			 * @param content
			 */
			install:function(content){
				cordova.exec(function(success){},function(fail){
//					alert("error:" + fail);
				},'InstallApkPlugin','install',[content]);
			},
	};
	return InstallAPK;
});