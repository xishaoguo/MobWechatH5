define(['utils'],function(utils){
	var UMAnalytics = {
		exec:cordova.require('cordova/exec'),
		event:function(_eventStr){
			var self = this;
			if(utils.browerVersion('iOS') || utils.browerVersion('android')){
				self.exec(function(){},function(){},"UMAnalytics","event",[_eventStr]);
			}
			
		},
		beginEvent:function(_eventStr){
			var self = this;
			
			if(utils.browerVersion('iOS') || utils.browerVersion('android')){
				self.exec(function(){},function(){},"UMAnalytics","beginEvent",[_eventStr]);
			}
			
		},
		endEvent:function(_eventStr){
			var self = this;
			
			if(utils.browerVersion('iOS') || utils.browerVersion('android')){
				self.exec(function(){},function(){},"UMAnalytics","endEvent",[_eventStr]);
			}
		},
		eventAttributes:function(_eventStr,_attributeArray){
			if(_attributeArray.length == 0){
				return;
			}
			var self = this;
			if(utils.browerVersion('iOS') || utils.browerVersion('android')){
				var _argArray = [_eventStr];
				for(var i = 0;i < _attributeArray.length;i++){
					_argArray.push(_attributeArray[i]);
				}
				self.exec(function(){},function(){},"UMAnalytics","eventAttributes",_argArray);
			}
		}
		
		
	}
	
	return UMAnalytics;
});