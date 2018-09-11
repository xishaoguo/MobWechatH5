define(['jquery','utils'],function($,utils){

	var store = {
		_cacheData:{},
		/**
		 * 添加一个临时存储的数据
		 * @param key:String
		 * @param data:Object
		 */
		setTempData:function(key,data){
			this._cacheData[key]=data;
		},
		/**
		 * 获取一个临时存储的数据
		 * @param key:String 
		 */
		getTempData:function(key){
			 return this._cacheData[key];
		},
		/**
		 * 添加一个基于HMTL5本地存储的数据
		 * @param key:String
		 * @param data:Object
		 */
		setData:function(key,data){
			window.localStorage.setItem(key,utils.jsonToString(data));
			//this.setTempData('$localCache_'+key,data);
		},
		/**
		 * 获取一个基于HMTL5本地存储的数据
		 * @param key:String 
		 */
		getData:function(key){
			if(!this.getTempData('$localCache_'+key)){
				var _data= null;
				try{
					_data=utils.stringToJson(window.localStorage.getItem(key));
		            //alert("store- "+key+" :"+_data);
				}catch(ex){}
				this.setTempData('$localCache_'+key, _data);
			}
			return this.getTempData('$localCache_'+key);
		},
	
		removeData:function(key){
			window.localStorage.removeItem(key);
		},
		/**
		 * openId
		 */
		setOpenId:function(openid){
			this.setData('$openid',openid);
		},
		getOpenId:function(){
			return this.getData('$openid');
		},
		/**
		 * 认证状态
		 */
		setUserAuthStatus:function(UserAuthStatus){
			this.setData('$UserAuthStatus',UserAuthStatus);
		},
		getUserAuthStatus:function(){
			return this.getData('$UserAuthStatus');
		},
		setToken:function(token){
			this.setData('$token',token);
		},
		
		getToken:function(){
			return this.getData('$token');
		},
		setMyInfo:function(_data){
			this.setData('$myinfo',_data);
		},
		getMyInfo:function(noCache){
			return this.getData('$myinfo',noCache) || {};
		},
		setMyServiceCode:function(_data){
			this.setData('$myservicecode',_data);
		},
		getMyserviceCode:function(noCache){
			return this.getData('$myservicecode',noCache) || {};
		},
		/**
		 * 获取消息提醒类型
		 */
		getNoteType:function(){
			return this.getData("$Note_Type");
		},
		/**
		 * 获取消息提醒行程号
		 */
		getNoteJourneyNo:function(){
			return this.getData("$Note_JourneyNo");
		},
		/**
		 * 判断系统语言
		 * 仅第一次加载系统的时候判断
		 */
//		getLang:function(){
//			var lang = this.getData('$lang') || navigator.language || navigator.browserLanguage|| 'zh-cn';
//			
//			if(/zh\-\w+/i.test(lang)){
//				lang = "zh-cn";
//			}else{
//				lang = "en-us";
//			}
//			return lang;
//			
//		},
		getLang:function(){
			var lang = this.getData('$lang') || navigator.browserLanguage|| 'zh-cn';
			
			if(/zh\-\w+/i.test(lang)){
				lang = "zh-cn";
			}else{
				lang = "en-us";
			}
			return lang;
			
		},
		setLang:function(name){
			this.setData('$lang',name);
			utils.lang = name;
		},
		/**
		 * 存储当前界面
		 */
		setPageCache:function(name){
			this.setData('$page-cache',name);
		},
		/**
		 * 获取当前页面值
		 */
		getPageCache:function(){
			return this.getData('$page-cache');
		},
		/**
		 * 存储临时用户信息
		 * @param data
		 */
		setTempUserInfo:function(data){
			this.setData('$tmpUserInfo',data);
		},
		/**
		 * 获取临时用户信息
		 */
		getTempUserInfo:function(){
			return this.getData('$tmpUserInfo');
		},
		/**
		 * 设置是否按的android实体返回键
		 */
		setAndroidBackBtn:function(flag){
			this.setData('$androidBackBtn',flag);
		},
		/**
		 * 获取是否android实体返回键是否按下值
		 */
		getAndroidBackBtn:function(){
			return this.getData('$androidBackBtn');
		},
		
		
		_getDeviceCode: function() {
			var _key = '$device-code';
			var _deviceToken = this.getData(_key);
			if (_deviceToken == null) {
				_deviceToken = utils.genGuid();
				this.setData(_key, _deviceToken);
			}
			return _deviceToken;
		},
		
		getDeviceCode:function(callback){
			if (window.plugins && window.plugins.pushMessage){
				if(utils.browerVersion('iOS')){
					if (callback) callback(window.device.token || this._getDeviceCode());
				}else if(utils.browerVersion('android')){
					window.plugins.pushMessage.getDeviceCode(function(_token) {
						if (callback) callback(_token || this._getDeviceCode());
					});
				}
			}else{
				if (callback) callback(this._getDeviceCode());
			}
		},
		getAirportWithCode:function(_code){
			var airports = this.getData('$airports');
			
			return Enumerable.From(airports).Where(function(x){
					    		return x.code == _code;
							}).ToArray()[0];
		},
		getAirportWithCity:function(_city){
			var airports = this.getData('$airports');
			
			return Enumerable.From(airports).Where(function(x){
				return x.city == _city;
			}).ToArray();
		},
		/**
		save the code of airport that was clicked recently to the local store cache.
		**/
		setLastCity:function(_city){
			var self = this;
			var lastData = self.getLastCity();
			var _exist=false;
			$.each(lastData,function(){
				if(this.toString() == _city){
					_exist = true;
				}
			});
			if(_exist) return;
			if(lastData.length>4){
				lastData.pop();
			}

			lastData.unshift(_city);
			this.setData("$last-city",lastData);
		},
		/**
		Get the code array of airport that was clicked recently from the local store cache.
		**/
		getLastCity:function(){
			return this.getData("$last-city") || [];
		},
		
		setOrderListIndex:function(index){
			this.setData('$orderlist-index',index);
		},
		getOrderListIndex:function(){
			return this.getData('$orderlist-index');
		},
		setReviewListIndex:function(index){
			this.setData('$reviewlist-index',index);
		},
		getReviewListIndex:function(){
			return this.getData('$reviewlist-index');
		},
		/**
		设置主题
		**/
		setLinkTheme:function(_themeStyle){
			var link = $('#ThemeStyle');
			
			if(_themeStyle == 'blue' || _themeStyle == 'green'){
				_themeStyle = 'amex';
			}
			
			var cssLink = 'css/' + _themeStyle + ".css";
			link.attr('href',cssLink);
		},
		/**
		 * 存储当前主题
		 * @param _themeStyle
		 */
		setTheme:function(_themeStyle){
			this.setData('$theme',_themeStyle);
		},
		/**
		 * 获取主题
		 */
		getTheme:function(){
			return this.getData('$theme');
		},
		/**
		 * 添加关注
		 * @param favoriteList
		 */
		setFavoritelist:function(favoriteList){
			this.setData('$favourateList',favoriteList);
		},
		/**
		 * 获取关注
		 */
		getFavoritelist:function(){
			return this.getData('$favourateList');
		},
		/**
		 * 设置排序状态
		 * 0：时间升序  1：价格升序  2：时间降序   3：价格降序
		 * @param sortType
		 */
		setSortType:function(sortType){
			this.setData('$sortType',sortType);
		},
		/**
		 * 获取排序状态
		 */
		getSortType:function(){
			return this.getData('$sortType');
		},
		
		/**
		 * 存储航班公司信息
		 */
		setAirCompany:function(airCompanyList){
			this.setData('$airCompanyList',airCompanyList);
		},
		/**
		 * 获取航班公司信息
		 */
		getAirCompany:function(){
			return this.getData('$airCompanyList');
		},
		/**
		 * 存储常旅卡临时数据
		 */
		setTempOftenTripCardInfoList:function(tempList){
			this.setData('$tempOfterTridCardList', tempList);
		},
		/**
		 * 获取常旅卡临时数据
		 * @returns
		 */
		getTempOftenTripCardInfoList:function(){
			return this.getData('$tempOfterTridCardList');
		},
		/**
		 * 设置关注状态
		 */
		setFavoriteState:function(isFavorite){
			this.setData('$favoriteState',isFavorite);
		},
		
		
		/**
		 * 获取关注状态
		 * @returns
		 */
		getFavoriteState:function(){
			return this.getData('$favoriteState');
		},
		/**
		 * 设置秘钥数据
		 * @param data
		 */
		setKeyData:function(data){
			this.setData('$keyData', data);
		},
		/**
		 * 获取秘钥数据
		 */
		getKeyData:function(){
			return this.getData('$keyData');
		},
		/**
		 * 设置秘钥数据
		 * @param data
		 */
		setKeyData:function(data){
			this.setData('$keyData', data);
		},
		/**
		 * 运通用户 记录用户审批模式
		 */
		setApprModel:function(model){
			this.setData('$model', model);
		},
		getApprModel:function(){
			return this.getData('$model');
		},
		setNumber:function(number){
			this.setData('$number',number);
		},
		
		getNumber:function(){
			return this.getData('$number');
		},
		/**
		 * 记录应用启动时间点，判断释放load城市数据
		 */
		setTimePoint:function(point){
			this.setData('$time-point', point);
		},
		getTimePoint:function(){
			return this.getData('$time-point');
		},
		/**
		设置拒绝原因,key值为$reasonArray,最多5条
		**/
		setRefuseReason:function(_reasonStr){
			var self = this;
			
			if(!_reasonStr || _reasonStr == ''){
				return;
			}
			
			var reasonArray = self.getRefuseReason();
			if(!reasonArray){
				reasonArray = new Array();
				reasonArray.push(_reasonStr);
			}else{
				if(reasonArray.length >= 5){
					reasonArray.splice(0,1);	
				}
				reasonArray.push(_reasonStr);
			}
			self.setData('$reasonArray',reasonArray);
		},
		/**
		获取拒绝原因数组
		**/
		getRefuseReason:function(){
			var self = this;
			var reasonArray = self.getData('$reasonArray');
			if(!reasonArray){
				reasonArray = new Array();
			}
			return reasonArray;
		},
		/**
		缓存公司个性化配置项
		**/
		setAppConfig:function(_data){
			this.setData('$BlueSkyConfig',_data);
		},
		/**
		获取公司个性化配置项
		**/
		getAppConfig:function(){
			return this.getData('$BlueSkyConfig');
		}
	};
	return store;
});