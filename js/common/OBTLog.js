define(['utils'],function(utils){
	var OBTLog ={
			/**
             * 检查是否支持console及当前是否开启调试
             * @return  {[type]} [description]
             * @private
             */
            _check: function() {
                if (this._checkResult === null) {
                    this._checkResult = utils.config.get('isDebug') && window.console;
                }
                return this._checkResult;
            },
            _checkResult: null,
            /**
             * 在控制台打印日志信息
             * @param  {string} text 信息内容
             * @return {void}        无返回值
             */
            log: function(text) {
                if (this._check()) {
                	window.console.log(text);
                }
            },
            /**
             * 在控制台打印错误信息
             * @param  {string} text 信息内容
             * @return {void}        无返回值
             */
            error: function(text) {
                if (this._check()){
                	window.console.error(text);
                }
            },
            /**
             * 在控制台打印警告信息
             * @param  {string} text 信息内容
             * @return {void}        无返回值
             */
            warn: function(text) {
                if (this._check()){
                	window.console.warn(text);
                }
            },
            /**
             * 在控制台印普通信息
             * @param  {string} text 信息内容
             * @return {void}        无返回值
             */
            info: function(text) {
                if (this._check()){
                	window.console.info(text);
                }
            }
	};
	return OBTLog;
});