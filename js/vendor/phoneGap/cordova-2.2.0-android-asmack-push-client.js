/**
 * zhangrui add
 */
(function() {
	if (typeof cordova !== "undefined") {
        var exec = cordova.require('cordova/exec');
		/**
		 * Constructor
		 */
		function AsmackPush() {
			this._callback;
		}
		
		AsmackPush.prototype._generatePushClientAccount = function(data) {
			var array;
			if(data.serviceCode==null || data.serviceCode=="" || 
					data.account==null || data.account==""){
				array = new Array({});
			}else{
				array = [data.serviceCode, data.account];
			}

			//cordova.exec(null, null, 'AsmackPush', "generatePushClientAccount", array);
            exec(null, null, 'AsmackPush', "generatePushClientAccount", array);
			
		};
		
		AsmackPush.prototype.generatePushClientAccount= function(data){
			var me = this;
			me._generatePushClientAccount(data);
		};
		AsmackPush.prototype.startPushService= function(){
			//cordova.exec(null, null, 'AsmackPush', "startPushService", new Array({}));
			exec(null, null, 'AsmackPush', "startPushService", new Array({}));
		};
		AsmackPush.prototype.stopPushService= function(){
			//cordova.exec(null, null, 'AsmackPush', "stopPushService", new Array({}));
			exec(null, null, 'AsmackPush', "stopPushService", new Array({}));
		};
		// ****
		cordova.addConstructor(function() {
			if (!window.plugins) {
				window.plugins = {};
			}
			window.plugins.asmackPush = new AsmackPush();
			window.plugins.asmackPush.generatePushClientAccount();
		});
		// --
	}
	;
})();
