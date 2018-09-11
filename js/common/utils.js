define(['jquery','underscore','common/config','params','lang/en-us','lang/zh-cn'],
function($,_,Config,params,English,Chinese){
	
	var utils = {
		_self:this,
		router:null,
		lang:'',
		checkFlag:null,
		Wi:[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2,1],// 加权因子
		ValideCode:[1,0,10,9,8,7,6,5,4,3,2],// 身份证验证位值.10代表X
		select_userTmpData:{
			searchVal:'',
			foundData:[],
			selectedData:[]
		},
		/**
		app config infomation
		**/
		config:Config,
		userAgent:navigator.userAgent.toLowerCase(),
		/**
		perform a function async
		**/
		async: function(fn, delay) {
			if (!fn) return;
		    delay = delay | 0;
		    if (fn && fn._asyncTimer) {
		        clearTimeout(fn._asyncTimer);
		    }
		    fn._asyncTimer = setTimeout(fn, delay);
		    return fn._asyncTimer;
		},
		getBrowser:function(){
			var browser = {
		    		iPhone: this.userAgent.indexOf('iphone') > -1,
		            iPad: this.userAgent.indexOf('ipad') > -1,
		            iOS: this.userAgent.indexOf('ipad') > -1 || this.userAgent.indexOf('iphone') > -1,
		            android: this.userAgent.indexOf('android') > -1,
		            windowPhone: this.userAgent.indexOf('window') > -1
		        };
			return browser;
		},
		/**
		system web brower version
		**/
		browerVersion:function(_version){
			var result = false;
			if(_version == 'iphone'){
				result = this.userAgent.indexOf('iphone') > -1 ? true:false;
			}else if(_version == 'ipad'){
				result = this.userAgent.indexOf('ipad') > -1 ? true:false;
			}else if(_version == 'android'){
				result = this.userAgent.indexOf('android') > -1 ? true:false;
			}else if(_version == 'window'){
				result = this.userAgent.indexOf('window') > -1 ? true:false;
			}else if(_version == 'iOS'){
				if(this.userAgent.indexOf('iphone')>-1 || this.userAgent.indexOf('ipad')>-1){
					result = true;
				}else{
					result = false;
				}
			}
			
			return result;
		},
		/**
		 * 阻止事件冒泡
		 */
		stopBubble:function(e){
		      e=window.event||e;
		      if(!e)return false;
		      if (e.stopPropagation){
		    	  e.stopPropagation();
		      }
		      else {
		    	  e.cancelBubble = true;
		      }
		      return false;
		},
		/**
		convert string to object of json
		**/
		stringToJson:function(str){
			if(null == str){
				str = 'null';
			}
            if (window.JSON && window.JSON.parse) {
                return window.JSON.parse(str);
            }
		},
		/**
		convert object of json to string
		**/
        jsonToString: function(obj) {
            if (window.JSON && window.JSON.stringify) {
                return window.JSON.stringify(obj);
            }
        },
        /**
         * 生成一个GUID
         * @returns {String}
         */
        genGuid:function() {
            var S4 = function() {
               return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
            };
            return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
        },
		
		setRouter:function(_router){
			this.router = _router;
		},
		
		getRouter:function(){
			return this.router;
		},
		/**
		 * 根据servicecode判断是否有符合需求
		 * 优先级：先判断功能模块，然后serviceCode优先，serviceCode没有判断angentId
		 * @param store
		 * @returns {Boolean}
		 */
		isServiceCodeNeed:function(store,str){
			if(!store.getMyserviceCode()){
				return false;
			}
			var myServiceCode = store.getMyserviceCode();
			var tempAgentId = null;
			switch(str){
			case 1://显示全天加时间段
				var searchFlight = myServiceCode.FlightSearch_hour ? myServiceCode.FlightSearch_hour : null;
				tempAgentId = searchFlight ? searchFlight.agentId : '';//获取agentID
				myServiceCode = searchFlight ? (searchFlight.serviceCode ? searchFlight.serviceCode.toLocaleLowerCase() : ''):'';//获取需求serviceCode字符串
				break;
			case 2://flight_list   
				tempAgentId = myServiceCode.FlightList_tripleprotocol ? myServiceCode.FlightList_tripleprotocol.agentId : '';//获取agentID
				myServiceCode = myServiceCode.FlightList_tripleprotocol ? (myServiceCode.FlightList_tripleprotocol.serviceCode ? myServiceCode.FlightList_tripleprotocol.serviceCode.toLocaleLowerCase() : '') : '';//获取需求serviceCode字符串
				break;
			case 3://order_info
				tempAgentId = myServiceCode.OrderInfo_issueNow ? myServiceCode.OrderInfo_issueNow.agentId : '';//获取agentID
				myServiceCode = myServiceCode.OrderInfo_issueNow ? (myServiceCode.OrderInfo_issueNow.serviceCode ? myServiceCode.OrderInfo_issueNow.serviceCode.toLocaleLowerCase() : '') : '';//获取需求serviceCode字符串
				break;
			case 4://flight_review_node
				tempAgentId = myServiceCode.FlightReviewNode_email ? myServiceCode.FlightReviewNode_email.agentId : '';//获取agentID
				myServiceCode = myServiceCode.FlightReviewNode_email ? (myServiceCode.FlightReviewNode_email.serviceCode ? myServiceCode.FlightReviewNode_email.serviceCode.toLocaleLowerCase() : '') : '';//获取需求serviceCode字符串
				break;
			case 5://setting
				tempAgentId = myServiceCode.Setting_readonly ? myServiceCode.Setting_readonly.agentId : '';//获取agentID
				myServiceCode = myServiceCode.Setting_readonly ? (myServiceCode.Setting_readonly.serviceCode ? myServiceCode.Setting_readonly.serviceCode.toLocaleLowerCase() : '') : '';//获取需求serviceCode字符串
				break;
			case 6://西门子需求
				tempAgentId = myServiceCode.OrderInfo_issue_book ? myServiceCode.OrderInfo_issue_book.agentId : '';//获取agentID
				myServiceCode = myServiceCode.OrderInfo_issue_book ? (myServiceCode.OrderInfo_issue_book.serviceCode ? myServiceCode.OrderInfo_issue_book.serviceCode.toLocaleLowerCase() : '') : '';
				break;

			case 7://搜索框提示为“搜索城市”。
				tempAgentId = myServiceCode.Airport_searchCity ? myServiceCode.Airport_searchCity.agentId : '';//获取agentID
				myServiceCode = myServiceCode.Airport_searchCity ? (myServiceCode.Airport_searchCity.serviceCode ? myServiceCode.Airport_searchCity.serviceCode.toLocaleLowerCase() : '') : '';
				break;
			case 8://"未选择最低票价时的提示：您选择的航班不是最低票价，是否继续？
				tempAgentId = myServiceCode.FlightList_lowestPrice ? myServiceCode.FlightList_lowestPrice.agentId : '';//获取agentID
				myServiceCode = myServiceCode.FlightList_lowestPrice ? (myServiceCode.FlightList_lowestPrice.serviceCode ? myServiceCode.FlightList_lowestPrice.serviceCode.toLocaleLowerCase() : '') : '';
				break;
			case 9://"提醒：因私请拨打4006786097预订
				tempAgentId = myServiceCode.FlightSearch_cwtPrivate ? myServiceCode.FlightSearch_cwtPrivate.agentId : '';//获取agentID
				myServiceCode = myServiceCode.FlightSearch_cwtPrivate ? (myServiceCode.FlightSearch_cwtPrivate.serviceCode ? myServiceCode.FlightSearch_cwtPrivate.serviceCode.toLocaleLowerCase() : '') : '';
				break;
			case 10://修改密码界面，输入密码提示
				tempAgentId = myServiceCode.ChangePassword_newPwd_issue ? myServiceCode.ChangePassword_newPwd_issue.agentId : '';//获取agentID
				myServiceCode = myServiceCode.ChangePassword_newPwd_issue ? (myServiceCode.ChangePassword_newPwd_issue.serviceCode ? myServiceCode.ChangePassword_newPwd_issue.serviceCode.toLocaleLowerCase() : '') : '';
				break;
			case 11://是否需要酒店功能
				tempAgentId = myServiceCode.ServiceCode_AddHotel ? myServiceCode.ServiceCode_AddHotel.agentId : '';//获取agentID
				myServiceCode = myServiceCode.ServiceCode_AddHotel ? (myServiceCode.ServiceCode_AddHotel.serviceCode ? myServiceCode.ServiceCode_AddHotel.serviceCode.toLocaleLowerCase() : '') : '';
				break;
			case 12://以航班为中心 ，时间段最低低价
				tempAgentId = myServiceCode.FlightList_lowestprice ? myServiceCode.FlightList_lowestprice.agentId : '';//获取agentID
				myServiceCode = myServiceCode.FlightList_lowestprice ? (myServiceCode.FlightList_lowestprice.serviceCode ? myServiceCode.FlightList_lowestprice.serviceCode.toLocaleLowerCase() : '') : '';
				break;
			case 13://訂單詳情頁不需要+添加按鈕
				tempAgentId = myServiceCode.OrderInfo_addButton ? myServiceCode.OrderInfo_addButton.agentId : '';//获取agentID
				myServiceCode = myServiceCode.OrderInfo_addButton ? (myServiceCode.OrderInfo_addButton.serviceCode ? myServiceCode.OrderInfo_addButton.serviceCode.toLocaleLowerCase() : '') : '';
				break;
			}
			var myInfoServiceCode = store.getMyInfo().serviceCode;//获取用户serviceCode
			myInfoServiceCode = myInfoServiceCode ? myInfoServiceCode.toLocaleLowerCase() : '';
			if(myServiceCode != null && myServiceCode != ''){//serviceCode不为空
				if(myServiceCode.toString().indexOf(myInfoServiceCode) >= 0){//包含
					return true;
				}
				else {//不包含
					return false;
				}
			}
			else {//serviceCode为空
				if(tempAgentId != null && tempAgentId != ''){//agentId不为空
					var agentId = store.getMyInfo().agentId;
					if(tempAgentId == agentId){//包含
						return true;
					}
					else {//不包含
						return false;
					}
				}
				else {//agentId为空
					return false;
				}
			}
		},
		/**
		 * 判断酒店机票开关
		 * 【运通需求】其他只有酒店开关
		 */
		isHotelAndPlaneNeed:function(store){
			var self = this;
			var data = {//以往需求，机票有，酒店默认无，根据后台判断
					'hotelFlag':false,
					'planeFlag':true
			};
			var myInfo = store.getMyInfo();
			var productCodes = myInfo.productCodes ? myInfo.productCodes : null;//运通需求
			if(null == productCodes && self.isServiceCodeNeed(store,11)){//以往根据后台servicecode数据列表判断是否有酒店功能
				data.hotelFlag = true;
				return data;
			}
			//新需求：根据配置判断是否有酒店，有则再根据运通判断是否有酒店   updated by zjf 7-1
			else if(self.isServiceCodeNeed(store,11)){
				//运通处理机票酒店按钮显示
				if(productCodes && productCodes.length > 0){
					data.planeFlag = false;//运通需求，机票酒店都默认为无，根据值判断
					for(var i = 0;i < productCodes.length;i ++){
						var item = productCodes[i];//
						if(item && item.productId == '1'){//机票
							data.planeFlag = true;
							continue;
						}
						if(item && item.productId == '5'){//酒店
							//之前这个字段值为3为酒店，现与ssy确认5为酒店  update by zjf 6-10
							data.hotelFlag = true;
							continue;
						}
					}
				}
			}
			return data;
		},
		genGuid:function() {

		        var S4 = function() {

		           return (((1+Math.random())*0x10000)|0).toString(16).substring(1);

		        };

		        return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());

		},
		getPhoneName:function(){
			var phoneName = 'unknown';
			if(window.device){
				phoneName = window.device.name;
			}
			return phoneName;
		},
		showMask:function(){
			$('body').append("<div class='loading-mask'></div>");
		},
		hideMask:function(){
			$('.loading-mask').remove();
		},
		showMessageCallback:function(text,delay,service,callback){
			var self = this;
			self.showMask();
			$('body').append("<div class='loading'><div class='loading-gif'></div><div class='loading-title'>" + text + "</div></div>");
			var msgBox = $('.loading');
			
			var bodyHeight = document.body.clientHeight;
			var bodyWidth =  document.body.clientWidth;
			
			msgBox.css('top',bodyHeight/2-(msgBox.height()/2)+'px');
			msgBox.css('left',bodyWidth/2-(msgBox.width()/2)+'px');
			 
			self.async(function(){
				var message_mask = $("div.loading-mask");
				var message = $("div.loading");
				message_mask.unbind('vmousedown').bind('vmousedown',function(event){
					self.hideMessage();
					service.abortAjax();
					if(typeof(callback)=="function"){
						callback();
					}
					return false;
				}).unbind('vmousemove').bind('vmousemove',function(event){
					return false;
				});
				message.unbind('vmousedown').bind('vmousedown',function(event){
					self.hideMessage();
					service.abortAjax();
					if(typeof(callback)=="function"){
						callback();
					}
					return false;
				}).unbind('vmousemove').bind('vmousemove',function(event){
					return false;
				});
			}, 500);
			if (delay) {

				self.async(function() {

			    	self.hideMessage();

			      }, delay);

			}
		},
		showMessage:function(text,delay,sgClient,flag,callback){
			var self = this;
			self.showMask();
		
			$('body').append("<div class='loading'><div class='loading-gif'></div><div class='loading-title'>" + text + "</div></div>");
			var msgBox = $('.loading');
		
			var bodyHeight = document.body.clientHeight;
			var bodyWidth =  document.body.clientWidth;
			
			msgBox.css('top',bodyHeight/2-(msgBox.height()/2)+'px');
			msgBox.css('left',bodyWidth/2-(msgBox.width()/2)+'px');
			
			self.async(function(){
				var message_mask = $(".loading-mask");
				var message = $(".loading");
				message_mask.unbind('vmousedown').bind('vmousedown',function(event){
					if(flag){
						return false;
					}
					self.hideMessage();
					sgClient.abortAjax();
					if(callback){
						callback();
					}
					return false;
				}).unbind('vmousemove').bind('vmousemove',function(event){
					return false;
				});
				message.unbind('vmousedown').bind('vmousedown',function(event){
					if(flag){
						return false;
					}
					self.hideMessage();
					sgClient.abortAjax();
					if(callback){
						callback();
					}
					return false;
				}).unbind('vmousemove').bind('vmousemove',function(event){
					return false;
				});
			}, 500);
			
		},
		_showMessage:function(text,delay,service){
			var self = this;
			this.showMask();
			$('body').append("<div class='loading'><div class='loading-gif'></div><div class='loading-title'>" + text + "</div></div>");
			var msgBox = $('.loading');
		
			var bodyHeight = document.body.clientHeight;
			var bodyWidth =  document.body.clientWidth;
			
			msgBox.css('top',bodyHeight/2-(msgBox.height()/2)+'px');
			msgBox.css('left',bodyWidth/2-(msgBox.width()/2)+'px');  
	
			if (delay) {

				self.async(function() {

			    	self.hideMessage();

			      }, delay);

			}
		},
		hideMessage:function() {
		        $('.loading').remove();

		        this.hideMask('message');

		},
		//开启消息推送服务
		generatePushClientAccount:function(data){
			if(window.plugins && window.plugins.asmackPush){
				window.plugins.asmackPush.generatePushClientAccount(data);
			}
		},
		isCordova: function() {
			return (window.navigator && window.navigator.notification && window.navigator.notification.alert && window.navigator.notification.confirm);
		},
		alertIsShow: false,
		_alert: function(option) {
			var self = this;
			self.alertIsShow = false;
			if (option.text && option.onOk && option.onCancel) {
				if (confirm(option.text))
					option.onOk();
				else
					option.onCancel();
			} else if (option.text && option.onOk && !option.onCancel) {
				alert(option.text);
				option.onOk();
			} else if (option.text) {
					alert(option.text);
			}
		},
		showAlert:function(option){
			var self = this;
			if (self.alertIsShow == true) {
				return;
			}
			
			if(!option){
				return;
			}
			
			if(option.text == null || option.text == undefined || option.text == '' || typeof option.text != 'string'){
				return;
			}
			self.alertIsShow = true;
			//ID 4467:【魅族MX3 安卓4.4.4】在核对订单页面返回后再次进入核对订单页面点击预定按钮无反应
			params.alertShow = self.alertIsShow;
			var html = '';
			var contentClass='alert-content-wrapper';
			var alertContentHtml='';
			html += '<div class="alert-box" style="display:none">';
			/******** 先拼接提示的内容 *************/
			alertContentHtml += '<div class="alert-content">';
			alertContentHtml += option.text;
			alertContentHtml += '</div>';
			if(option.title){//有标题
				html +='<div class="alert-wrapper">';//提示框内容容器包含标题和提示内容
				if(option.checkbox){
					html += '<div><div class="common-contact-checkbox  all-icon checkboxed-icon" style="float: left;"></div>'+option.checkbox+'</div>';	
				}
				html += '<div class="alert-title">';
				html += option.title;
				html += '</div>';
				html += '<div class="'+contentClass+'">';
				html +=alertContentHtml;
				html +='</div>';
				html +='</div>';
			}else{
				contentClass+=' alert-wrapper';//提示框内容容器只包含提示内容
				html += '<div class="'+contentClass+'">';
				html +=alertContentHtml;
				html +='</div>';
			}
			if(option.onOK && !option.onCancel){//确定按钮
				html += '<div class="ui-grid-solo">';
				if(option.onOktext != null && option.onOktext != undefined && option.onOktext != '' && typeof option.onOktext == 'string'){
					html += '<button class="alert-btn-sure ui-btn ui-shadow ui-corner-all">'+option.onOktext+'</button>';
				}else{
					html += '<button class="alert-btn-sure ui-btn ui-shadow ui-corner-all">'+self.lang['ok']+'</button>';
				}
				html += '</div>';
			}else if(!option.onOK && option.onCancel){//取消按钮
				html += '<div class="ui-grid-solo">';
				html += '<button class="alert-btn-cancel ui-btn ui-shadow ui-corner-all">'+self.lang['cancel']+'</button>';
				html += '</div>';
			}else if(option.onOK && option.onCancel){//取消跟确定同时存在
				html += '<div class="ui-grid-a">';
				if(option.onCanceltext != null && option.onCanceltext != undefined && option.onCanceltext != '' && typeof option.onCanceltext == 'string'){
					html += '<div class="ui-block-a"><button class="alert-btn-cancel ui-btn ui-shadow ui-corner-all">'+ option.onCanceltext +'</button></div>';
				}else{
					html += '<div class="ui-block-a"><button class="alert-btn-cancel ui-btn ui-shadow ui-corner-all">'+ self.lang['cancel'] +'</button></div>';
				}
				
				if(option.onOktext != null && option.onOktext != undefined && option.onOktext != '' && typeof option.onOktext == 'string'){
					html += '<div class="ui-block-b"><button class="alert-btn-sure ui-btn ui-shadow ui-corner-all">'+ option.onOktext +'</button></div>';
				}else{
					html += '<div class="ui-block-b"><button class="alert-btn-sure ui-btn ui-shadow ui-corner-all">'+ self.lang['ok'] +'</button></div>';
				}
				html += '</div>';
			}else{
				html += '<div class="ui-grid-solo">';
				if(option.onOKtext != null && option.onOKtext != undefined && option.onOKtext != '' && typeof option.onOKtext == 'string'){
					html += '<button class="alert-btn-sure ui-btn ui-shadow ui-corner-all">'+option.onOKtext+'</button>';
				}else{
					html += '<button class="alert-btn-sure ui-btn ui-shadow ui-corner-all">'+self.lang['ok']+'</button>';
				}
				html += '</div>';
			}
			html += '</div>';
			
			var maskHtml = '<div class="select-mask"></div>';
			$('body').append(maskHtml);
			$('body').append(html);
			
			var page = $('div[data-role="page"]');
			$.each(page.children(),function(){
				$(this).addClass('frosted-glass');
			});
			
			var bodyClientHeight = document.body.clientHeight;
			var bodyClienWidth = document.body.clientWidth;
			var box = $('.alert-box');
			var boxHeight = box.height();
			var boxWidth = box.width();
			box.css({'top':bodyClientHeight/2-boxHeight/2+'px','left':bodyClienWidth/2-boxWidth/2+'px'});//居中
			box.show();
			
			var mask = $('.select-mask');
			$('.alert-btn-cancel').unbind('click').bind('click',function(){
				box.css('display','none');
				box.remove();
				mask.remove();
				$.each(page.children(),function(){
					$(this).removeClass('frosted-glass');
				});
				self.alertIsShow = false;
				//ID 4467:【酒店预定】【差旅随行2.1.6】【魅族MX3 安卓4.4.4】在核对订单页面返回后再次进入核对订单页面点击预定按钮无反应
				params.alertShow = self.alertIsShow;
				if(option.onCancel){
					option.onCancel();
				}
				
			});
			$('.alert-btn-sure').unbind('click').bind('click',function(){
				
				box.css('display','none');
				box.remove();
				mask.remove();
				self.alertIsShow = false;
				//ID 4467:【酒店预定】【差旅随行2.1.6】【魅族MX3 安卓4.4.4】在核对订单页面返回后再次进入核对订单页面点击预定按钮无反应
				params.alertShow = self.alertIsShow;
				$.each(page.children(),function(){
					$(this).removeClass('frosted-glass');
				});
				if(option.onOK){
					option.onOK();
				}
			});
			$('a').unbind('click').bind('click',function(){
				box.css('display','none');
				box.remove();
				mask.remove();
				$.each(page.children(),function(){
					$(this).removeClass('frosted-glass');
				});
				self.alertIsShow = false;
				//ID 4467:【酒店预定】【差旅随行2.1.6】【魅族MX3 安卓4.4.4】在核对订单页面返回后再次进入核对订单页面点击预定按钮无反应
				params.alertShow = self.alertIsShow;
			});
		},
		showCheckAlert:function(store,option){
			var self = this;
			store.setData("$checkFlag",true);
			if (self.alertIsShow == true) {
				return;
			}
			
			if(!option){
				return;
			}
			
			if(option.text == null || option.text == undefined || option.text == '' || typeof option.text != 'string'){
				return;
			}
			self.alertIsShow = true;
			//ID 4467:【魅族MX3 安卓4.4.4】在核对订单页面返回后再次进入核对订单页面点击预定按钮无反应
			params.alertShow = self.alertIsShow;
			var html = '';
			var contentClass='alert-content-wrapper';
			var alertContentHtml='';
			html += '<div class="alert-box" style="display:none">';
			/******** 先拼接提示的内容 *************/
			alertContentHtml += '<div class="alert-content">';
			alertContentHtml += option.text;
			alertContentHtml += '</div>';
			if(option.title){//有标题
				html +='<div class="alert-wrapper">';//提示框内容容器包含标题和提示内容
				if(option.checkbox){
					html += '<div><div class="common-contact-checkbox  all-icon checkboxed-icon" style="float: left;"></div>'+option.checkbox+'</div>';	
				}
				html += '<div class="alert-title">';
				html += option.title;
				html += '</div>';
				html += '<div class="'+contentClass+'">';
				html +=alertContentHtml;
				html +='</div>';
				html +='</div>';
			}else{
				contentClass+=' alert-wrapper';//提示框内容容器只包含提示内容
				html += '<div class="'+contentClass+'">';
				html +=alertContentHtml;
				html +='</div>';
			}
			if(option.onOK && !option.onCancel){//确定按钮
				html += '<div class="ui-grid-solo">';
				if(option.onOktext != null && option.onOktext != undefined && option.onOktext != '' && typeof option.onOktext == 'string'){
					html += '<button class="alert-btn-sure ui-btn ui-shadow ui-corner-all">'+option.onOktext+'</button>';
				}else{
					html += '<button class="alert-btn-sure ui-btn ui-shadow ui-corner-all">'+self.lang['ok']+'</button>';
				}
				html += '</div>';
			}else if(!option.onOK && option.onCancel){//取消按钮
				html += '<div class="ui-grid-solo">';
				html += '<button class="alert-btn-cancel ui-btn ui-shadow ui-corner-all">'+self.lang['cancel']+'</button>';
				html += '</div>';
			}else if(option.onOK && option.onCancel){//取消跟确定同时存在
				html += '<div class="ui-grid-a">';
				if(option.onCanceltext != null && option.onCanceltext != undefined && option.onCanceltext != '' && typeof option.onCanceltext == 'string'){
					html += '<div class="ui-block-a"><button class="alert-btn-cancel ui-btn ui-shadow ui-corner-all">'+ option.onCanceltext +'</button></div>';
				}else{
					html += '<div class="ui-block-a"><button class="alert-btn-cancel ui-btn ui-shadow ui-corner-all">'+ self.lang['cancel'] +'</button></div>';
				}
				
				if(option.onOktext != null && option.onOktext != undefined && option.onOktext != '' && typeof option.onOktext == 'string'){
					html += '<div class="ui-block-b"><button class="alert-btn-sure ui-btn ui-shadow ui-corner-all">'+ option.onOktext +'</button></div>';
				}else{
					html += '<div class="ui-block-b"><button class="alert-btn-sure ui-btn ui-shadow ui-corner-all">'+ self.lang['ok'] +'</button></div>';
				}
				html += '</div>';
			}else{
				html += '<div class="ui-grid-solo">';
				if(option.onOKtext != null && option.onOKtext != undefined && option.onOKtext != '' && typeof option.onOKtext == 'string'){
					html += '<button class="alert-btn-sure ui-btn ui-shadow ui-corner-all">'+option.onOKtext+'</button>';
				}else{
					html += '<button class="alert-btn-sure ui-btn ui-shadow ui-corner-all">'+self.lang['ok']+'</button>';
				}
				html += '</div>';
			}
			html += '</div>';
			
			var maskHtml = '<div class="select-mask"></div>';
			$('body').append(maskHtml);
			$('body').append(html);
			
			var page = $('div[data-role="page"]');
			$.each(page.children(),function(){
				$(this).addClass('frosted-glass');
			});
			
			var bodyClientHeight = document.body.clientHeight;
			var bodyClienWidth = document.body.clientWidth;
			var box = $('.alert-box');
			var boxHeight = box.height();
			var boxWidth = box.width();
			box.css({'top':bodyClientHeight/2-boxHeight/2+'px','left':bodyClienWidth/2-boxWidth/2+'px'});//居中
			box.show();
			
			var mask = $('.select-mask');
			$('.alert-btn-cancel').unbind('click').bind('click',function(){
				box.css('display','none');
				box.remove();
				mask.remove();
				$.each(page.children(),function(){
					$(this).removeClass('frosted-glass');
				});
				self.alertIsShow = false;
				//ID 4467:【酒店预定】【差旅随行2.1.6】【魅族MX3 安卓4.4.4】在核对订单页面返回后再次进入核对订单页面点击预定按钮无反应
				params.alertShow = self.alertIsShow;
				if(option.onCancel){
					option.onCancel();
				}
				
			});
			$('.alert-btn-sure').unbind('click').bind('click',function(){
				
				box.css('display','none');
				box.remove();
				mask.remove();
				self.alertIsShow = false;
				//ID 4467:【酒店预定】【差旅随行2.1.6】【魅族MX3 安卓4.4.4】在核对订单页面返回后再次进入核对订单页面点击预定按钮无反应
				params.alertShow = self.alertIsShow;
				$.each(page.children(),function(){
					$(this).removeClass('frosted-glass');
				});
				if(option.onOK){
					option.onOK();
				}
			});
			$('.common-contact-checkbox').unbind('click').bind('click',function(){
				$('.common-contact-checkbox').toggleClass('all-icon checkboxed-icon');
				self.checkFlag = $('.common-contact-checkbox').hasClass('checkboxed-icon');
				store.setData("$checkFlag",self.checkFlag);
			});
		},
		alert:function(option){
			var self = this;
			if (self.alertIsShow == true) {
				return;
			}
			
			if(option.text == null || option.text == undefined || option.text == '' || typeof option.text != 'string'){
				return;
			}
			
			var navigator = window.navigator;
			self.alertIsShow = true;
			option = option || {};
			option.title = option.title || self.lang['alert'] || "alert";
			option.label = option.label || (self.lang['ok'] || 'ok') + "," + (self.lang['cancel'] || 'cancel');
			//
			if (self.isCordova()) {
				if (option.onOk && option.onCancel) {
					window.navigator.notification.confirm(option.text, function(rs) {
						self.alertIsShow = false;
						if (rs == 1) {
							option.onOk();
						} else if (rs == 2) {
							/*
							*强制升级 
							*/
							if(option.isObliged){
								self.clearMyOrderAndApverCache();
								window.navigator.app.exitApp();
							}
							option.onCancel();
						} else {
							/*
							*强制升级 
							*/
							if(option.isObliged != undefined){
								self.alert(option);
								return ;
							}
						}
					}, option.title, option.label);
				} else {
					window.navigator.notification.alert(option.text, function(rs) {
						self.alertIsShow = false;
						if (option.onOk){
							option.onOk();
						}
								/*else {
									app.utils.alert(option);
									return;
								}*/
					}, option.title, option.label.split(',')[0]);
				}
			} else {
				self._alert(option);
				self.alertIsShow = false;
			}
		},
		//检查乘机人证件号码是否为空
		checkUserList: function(userList) {
			var self =this;
			var buffer = [];
			$.each(userList, function() {
				if (this.certNo == null || this.certNo == '')
					buffer.push(self.lang.userInfoAlert.replace('{name}', this.psgName));
			});
			return buffer;
		},
		/**
		 * 组装航段信息
		 * @param data
		 * @returns {___anonymous4315_5077}
		 */
		convertSegment: function(data, i,flag) {
			var segment={
				segmentId: "", //主键
				agentId: 0, //代理商Id
				airportTax: data.cabinInfo.aptTax, //机场建设税
				arriveStn: data.arrApt, //到达机场三字码
				arriveTerminal: data.arrTer, //到达机场航站楼
				arriveTime: data.arrDate + " " + data.arrTime, //到达时间
				baseCabin: data.cabinInfo.basicCabin, //基础舱位（舱位类型）F:头等，C：商务，Y:经济
				cabinCode: data.cabinInfo.code, //舱位代码
				cabinType: data.cabinInfo.type, //舱位类型 F:头等，C：商务，Y:经济，其它超级经济舱
				accountCode:!_.isEmpty(data.cabinInfo.accountCode)?data.cabinInfo.accountCode:'',//大客户编码 TODO
				//
				carriageAirline: data.carriageAirline || data.marketAirline, //承运方航空公司代码
				carriageFlightNo: data.carriageFlightNo || data.marketFlightNo, //承运方航班号
				//
				marketAirline: data.marketAirline, //市场方航空公司代码
				marketFlightNo: data.marketFlightNo, //市场方航班号
				//
				craftTypeCode: data.crafttypeCode, //机型代码
				ei: data.cabinInfo.ei || data.cabinInfo.fareConditions || '', //中文航段退改签的文字描述
				eiEn: data.cabinInfo.eiEn || data.cabinInfo.fareConditions || "", //中文航段退改签的文字描述
				flyTime: null, //飞行时间
				fuelTax: data.cabinInfo.fuelTax, //燃油税
				journeyCreateTime: null, //行程创建时间

				oi: i == 1 ? "O" : "I", //往返程标识
				price: data.cabinInfo.price, //航位价格
				sequenceNo: i, //航段序号
				takeoffStn: data.depApt, //出发机场三字码
				takeoffTerminal: data.depTer, //出发机场航站楼
				takeoffTime: data.depDate + " " + data.depTime, //出发时间
				fareId: data.cabinInfo.coreFareId, //协议价Id
				priceType: data.cabinInfo.priceType, //价格类型
				codeShare: data.codeShare, //是否航班共享
				stopOver: data.stopOver, //是否经停
				officeNo:data.cabinInfo.officeNo,//office号
				fbc:data.cabinInfo.fbc //自动出票需要的运价基础字段
			};
			/*政策信息*/
			if(flag){
				segment.contrContent = [];//违返政策的内容	
				segment.contrContentEn = [];//违返政策的内容(英文)
				segment.contrPolicy = 0;//是否违返政策	1:违背，0:不违背				
				segment.contrReason = "";//违背政策原因，提交时在订单详情页追加
			}
			return segment;
		},
		/**
		 * 组装乘机人信息
		 * @param data
		 * @returns {___anonymous5209_6554}
		 */
		convertUser: function(data, i,store) {
			data.agentId = data.agentId || store.getMyInfo().agentId;
			var ccinfoName;
			if(data.costcenterinfName == "" || data.costcenterinfName == null){
				if(data.ccInfo == null || data.ccInfo == ""){
					ccinfoName = "";
				}
				else {
					ccinfoName = data.ccInfo.costcenterinfName;
				}
			}
			else {
				ccinfoName = data.costcenterinfName;
			}
			var name, email, mobile;
			if (data.email && data.mobile) { //先检查个人资料，参数全就使用个人资料
				name = data.psgName;
				email = data.email;
				mobile = data.mobile;
			} else if (data.contactName && data.contactEmail && data.contactMobile) { //如资料不全再检查联系人资料，全就使用联系人资料
				name = data.contactName;
				email = data.contactEmail;
				mobile = data.contactMobile;
			}
			var nameEn;//常客英文名
			nameEn=(_.isEmpty(data.nameEn)&&_.isEmpty(data.psgNameEn))?(data.name || data.psgName):(data.nameEn||data.psgNameEn);
			return {
				/*基础信息*/
				passengerId: "", //主键
				/*预订Pnr需要字段*/
				book1: "", //预订相关1		                   
				book2: "", //预订相关2		                   
				book3: "", //预订相关3		                   
				book4: "", //预订相关4		                   
				book5: "", //预订相关5		                   
				book6: "", //预订相关6                   
				book7: "", //预订相关7		                   
				book8: "", //预订相关8		                   
				book9: "", //预订相关9		                   
				book10: "", //预订相关10
				dBook1: "", //国内预订相关1
				dBook2: "", //国内预订相关2		                
				dBook3: "", //国内预订相关3
				dBook4: "", //国内预订相关4		                
				dBook5: "", //国内预订相关5
				dBook6: "", //国内预订相关6		                
				dBook7: "", //国内预订相关8
				dBook8: "", //国内预订相关8	                
				dBook9: "", //国内预订相关9
				dBook10: "", //国内预订相关10

				/*行程下,航空单元内的乘机人信息 */
				agentId: data.agentId, //代理商Id	
				certNo: data.idCard || data.passport || data.certNo, //证件号码(前端传入)
				certType: "1", //证件类型(前端传入) 1－身份证；
				certId:'',//证件id add 2014-5-24
				contactEmail: email, //联系人Email
				contactName: name, //联系人姓名
				contactTel: mobile, //联系人电话					
				corpCode: data.corpCode, //公司代码
				corpId: data.corpId, //公司Id
				email: data.email, //乘机人的常客中的email						
				hostName: data.hostName, //主机姓名（在乘机人常客信息里能取到）							
				journeyCreateTime: null, //行程创建时间
				
				memCard: data.memCard, //所使用的常客卡							
				mobile: data.mobile, //乘机人手机号码			
				psgName: data.name || data.psgName, //乘机人的姓名
				psgNameEn:nameEn,
				psgSex:data.sex||data.psgSex,
				psgParId: data.parId || data.psgId, //乘机人常客Id							
				sequenceNo: i || data.sequenceNo, //乘机的序号
				oftenTripCardInfoList: data.oftenTripCardInfoList, //常客卡列表
				credentialsInfoList:data.credentialsInfoList, //常客证件列表 add 2014-5-14
				/**
				 * 成本中心id
				 * 个人预订：默认为空
				 * 多人预订：默认为选择人的id
				 */
				costCenterId:(params.isGroupBook && data.ccInfo) ? data.ccInfo.costcenterinfId : '',//成本中心id
//				costCenterId:'',//成本中心id默认为空
				costCenterInfo:data.ccInfo == null ? '':data.ccInfo.costcenterinf,//成本中心信息
				ccRemark:'',//成本中心备注
//				costcenterinfName: data.costcenterinfName || data.ccInfo == null ? "":data.ccInfo.costcenterinfName,
				costcenterinfName: ccinfoName,
				employeeNo: data.employeeNo,

				mealPrefCode:'',//餐食
				seatPrefCode:'',//座位
				//明日航空需求
				/*applicationNo:'',//申请单号
				projectAndApplication:'',//项目及用途
				costOwnership:'',//费用归属
				eRPNo:'',//ERP号
				airlineSeats:'',//航班座位
				insurance:''//保险
*/			};
		},
		/**
		 * 运通乘机人属性补充
		 * psgUser 组装后的乘机人对象
		 * data 常客数据
		 */
		_amexConvertUser:function(psgUser,data){
			if(psgUser){
				psgUser.amexPassengerId=data.obtUserId||(!data.amexPassengerId?'':data.amexPassengerId);
				//psgUser.psgNameEn=data.name_en||data.psgNameEn;
				psgUser.psgParCode=data.parCode||(!data.psgParCode?'':data.psgParCode);
				psgUser.obtUserId=data.obtUserId;
				//运通增加属性 add zcy
				psgUser.psgGivenName=data.name_ch||(!data.psgGivenName?'':data.psgGivenName);
				psgUser.psgSurName=data.surname_ch||(!data.psgSurName?'':data.psgSurName);
				psgUser.psgGivenNameEn=data.name_en||(!data.psgGivenNameEn?'':data.psgGivenNameEn);
				psgUser.psgSurNameEn=data.surname_en||(!data.psgSurNameEn?'':data.psgSurNameEn);
			}
			return psgUser;
		},
		/**
		 * 合并数组
		 */
		mergeArray:function(arr1,arr2){
			return arr1.concat(arr2);
		},
		/**
		* 清空我的订单缓存数据
		*/
		clearMyOrderAndApverCache:function(){
			//myOrder
			params.myOrderTempData.allTempData=[];
			params.myOrderTempData.planTempData=[];
			params.myOrderTempData.apverTempData=[];
			params.myOrderTempData.submitTempData=[];
			params.myOrderTempData.finishTempData=[];
			//apver
			params.apverListTempData.waitApverTempData=[];
			params.apverListTempData.passApverTempData=[];
			params.apverListTempData.refuseApverTempData=[];
		},
		parseDate: function(dt) {
			var date = Date.parse(dt);
			
			if(isNaN(date) && /\/|\-/.test(dt)){
				var arys= new Array();
				arys = dt.split('-');
				date = new Date(arys[0],arys[1]-1,arys[2]);
			}
			
			return date;
		},
		/**
		日期时间格式化
		**/
		formatDate: function(dateObj, fmtStr, cap) {
			var self=this;
			if (/^\d+$/.test(dateObj)) {
				dateObj = new Date(dateObj);
			} else if (/\/|\-/.test(dateObj)) {
				dateObj = new Date(dateObj.replace(/\-/g, "/"));
			}
			var y = dateObj.getFullYear().toString();
			var m = dateObj.getMonth() + 1;
			var d = dateObj.getDate();
			var h = dateObj.getHours();
			var i = dateObj.getMinutes();
			var s = dateObj.getSeconds();
			var w = dateObj.getDay();
			var f = function(n) {
				return function(s) {
					return s.length > 1 && n < 10 ? "0" + n : n;
				};
			};
			var attr = cap ? "" : "i";
			return fmtStr.replace(new RegExp("Y+", attr), function(s) {
				return y.slice(-s.length);
			})
				.replace(new RegExp("M+", attr), f(m))
				.replace(new RegExp("D+", attr), f(d))
				.replace(new RegExp("H+", attr), f(h))
				.replace(new RegExp("I+", attr), f(i))
				.replace(new RegExp("S+", attr), f(s))
				.replace(/w/i, function(s) {
				return s == "w" ? w : self.lang.short_week[w];
			});
		},
		/**
		日期时间格式化为xx月xx日
		fmtStr ==mm-dd
		**/
		formatShortDate: function(dateObj, fmtStr,store) {
			var self=this;
			var dateObj=self.formatDate(dateObj, fmtStr);
			var arr=dateObj.split('-');
			var date="";
			if(store.getLang()== 'zh-cn'){//针对英文修改日期显示
				date=(arr[0].charAt(0)=='0'?arr[0].charAt(1):arr[0])+self.lang.month+(arr[1].charAt(0)=='0'?arr[1].charAt(1):arr[1])+self.lang.day;
			}else{
				date=arr[1]+self.lang.enMonths[arr[0]];
			}
			return date;
		},
		/**
		日期时间格式化为xx月xx日
		fmtStr ==mm-dd 
		**/
		formatEnChShortDate: function(dateObj, fmtStr,store) {
			var self=this;
			var dateObj=self.formatDate(dateObj, fmtStr);
			var arr=dateObj.split('-');
			var date="";
			if(store.getLang()== 'zh-cn'){
				date=(arr[0].charAt(0)=='0'?arr[0].charAt(1):arr[0])+self.lang.month+(arr[1].charAt(0)=='0'?arr[1].charAt(1):arr[1])+self.lang.day;
			}else{//针对英文修改日期显示 格式改为10Jul
				date=arr[1]+self.lang.enMonths[arr[0]].substring(0,self.lang.enMonths[arr[0]].length-1);
			}
			return date;
		},
		/**
		 * 英文日期格式
		 */
		enFormatDate:function(curData,tripType){
			var dt = curData; 
		    var m=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"); 
		    var w=new Array("Sun","Mon","Tue","Wed","Thu","Fri","Sat"); 
		    //var d=new Array("st","nd","rd","th"); 
		    mn=dt.getMonth(); 
		    wn=dt.getDay(); 
		    dn=dt.getDate(); 
		    /*//var dns; 
		    if(((dn%10)<1) ||((dn%10)>3)){ 
		    	//dns=d[3]; 
		    }else{ 
			    //dns=d[(dn%10)-1];
			    if((dn==11)||(dn==12)){ 
			    //dns=d[3]; 
			    } 
		    }*/
		    if(tripType){//行程日历英文格式Sun,15 Jun，不显示年份
		    	return w[wn]+","+dn+" "+m[mn];
		    }
		    else {
		    	return w[wn]+","+dn+" "+m[mn]+","+dt.getFullYear();
		    }
		},
		/**
		* 字符串转化日期类型，判断当前是星期几
		*/
		stringToWeek:function(dateStr){
			var self=this;
			//var _weekDay = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
			
			var _dateValue = new Date(Date.parse(dateStr.replace(/-/g, "/"))); 
			return self.lang.short_week[_dateValue.getDay()];
			
			/*if(lang){
				return self.lang.short_week[_dateValue.getDay()];
			}
			else {
				return _weekDay[_dateValue.getDay()];
			}*/
		},
		/**
	     * 替换数组中的元素
	     * orderArr 订单数组
	     * key      比较参数，通过它找到被替换item的位置
	     * item     将要替换成的数据
	     */
	    replaceOrderItem:function(orderArr,key,item){
	    	var bln = false;  
	        try {  
	            for (i = 0; i < orderArr.length; i++) {  
	                if (orderArr[i].journeyno == key) {  
	                	orderArr.splice(i, 1,item);  
	                    return true;  
	                }  
	            }  
	        } catch (e) {  
	            bln = false;  
	        }  
	        return bln;
	    },
		/**
	     * 判断缓存数组中是否包含该订单
	     * @param key
	     * @returns {Boolean}
	     */
	    containsOrder:function(orderArr,key) {  
	        var bln = false;  
	        try {  
	            for (i = 0; i <orderArr.length; i++) {  
	                if (orderArr[i].journeyno == key) {  
	                    bln = true;  
	                }  
	            }  
	        } catch (e) {  
	            bln = false;  
	        }  
	        return bln;  
	    },
	    /**
	     * 往返特价计算折扣价
	     * @param discount
	     * @returns
	     */
	    convertDiscount:function(discount,store){
	    	var self =this;
			if(discount==10)
				return self.lang.full_price;
			else if(discount==0)
				return '';
			else if(discount==-1)
				return '';
			else 
				return this.getDiscount(discount,store);
		},
		//获取中英文的折扣UI
		getDiscount: function(n,store) {
			var self =this;
			//英文版的折扣计算，保留一位小数 Math.round((10-n) * 10) / 10
			n=store.getLang()==='zh-cn'?n:Math.round((10-n) * 10) / 10;
			return self.lang.discount.replace("{n}", store.getLang() == "zh-cn" ? n : n * 10);
		},
		/**
		 * 舱位数
		 */
		converCabinCount:function(count){
			var self=this;
			if(count=='A'){
				return '＞'+self.lang.cabinCount.replace("{n}",9);
			}else if(count!='A'&&!_.isEmpty(count)){
				return self.lang.cabinCount.replace("{n}",count);
			}else{
				return self.lang.cabinCountOther;
			}
		},
		/**
		 * 我的订单数据刷新
		 * @param data
		 */
		updateAllOrderList:function(data){
			var self = this;
	    	var len = data.length;
	    	if(null == params.myOrderTempData.allTempData || params.myOrderTempData.allTempData.length < 1){
	    		params.myOrderTempData.allTempData = data;
	    	}
	    	else {
	    		//获取allTempData中最新数据的创建时间
	    		var allTempDataLastestTime = params.myOrderTempData.allTempData[0].createDate;
	    		//循环更新替换列表中的旧数据
	    		for(var i=0;i<len;i++){
	    			var curNewOrder=data[i];
	    			var curOrderCreateDate = curNewOrder.createDate;
	    			if(self.containsOrder(params.myOrderTempData.allTempData,curNewOrder.journeyno)){
	    				self.replaceOrderItem(params.myOrderTempData.allTempData,curNewOrder.journeyno,curNewOrder);
	    			} else if (curOrderCreateDate - allTempDataLastestTime > 0){
	    				//判断当前数据是否比allTempData的第一条数据新
	    				params.myOrderTempData.allTempData.unshift(curNewOrder);
	    			}
	    		}
	    	}
	    },
	    /**
	     * 判断缓存数组中是否包含该订单,并返回结果
	     * @param key
	     * @returns {Boolean}
	     */
	    containsOrderItem:function(orderArr,key) {  
	        var bln = null;  
	        try {  
	            for (i = 0; i <orderArr.length; i++) {  
	                if (orderArr[i].journeyno == key) {  
	                    bln = orderArr[i];  
	                }  
	            }  
	        } catch (e) {  
	            bln = null;  
	        }  
	        return bln;  
	    },
	    /**
		 * 移除缓存订单数组中的某个元素
		 * orderArr 目标数组
		 * key 数组中某个元素的属性
		 */
		removeOrderItem:function(orderArr,key) {  
	        var bln = false;  
	        try {  
	            for (i = 0; i < orderArr.length; i++) {  
	                if (orderArr[i].journeyno == key) {  
	                	orderArr.splice(i, 1);  
	                    return true;  
	                }  
	            }  
	        } catch (e) {  
	            bln = false;  
	        }  
	        return bln;  
	    },
	    /**
	     * 获取当前级别审批人信息
	     * @param curLevel 当前级别
	     */
	    getFirstApprovPersonInfo:function(curLevel,params){
	    	//var data = app.store.getMyInfo().approveRuleInfo.approverUserInfoList;
	    	var data = [];
	    	if(params.order.defaultApperList){
	        	data = params.order.defaultApperList;
	    	}
	    	return Enumerable.From(data).Where(function(x){
			    		return x.apverlevel==curLevel;
					}).ToArray()[0];
	    },
	    /**
	     * 
	     * @param allTempData    
	     * @param targetTempData 更新到目标临时数组
	     * @param journeyNo  航班号
	     * @param orderState 将要被更新的状态
	     */
	    updateCacheDataList:function(allTempData,targetTempData,journeyNo,orderState){
	    	var me = this;
	    	//获取item
			var oldAirItem = me.containsOrderItem(allTempData,journeyNo);
			//处理allTempData数据集
			if(oldAirItem != null){
				oldAirItem.orderState=orderState;//oldAirItem由'计划'变 '取消' 
				me.replaceOrderItem(allTempData,journeyNo,oldAirItem);
			}
			//处理finishTempData数据集
			if(oldAirItem != null && me.containsOrder(targetTempData,journeyNo)){
				//targetTempData.unshift(oldAirItem); 
				me.replaceOrderItem(targetTempData,journeyNo,oldAirItem);
			} else if(oldAirItem != null){
				if(targetTempData){
					targetTempData.unshift(oldAirItem);
				}
				//des 排序
				//targetTempData = Enumerable.From(targetTempData)["OrderByDescending"](function(x){ return x.createDate}).ToArray();
			}
			oldAirItem = null;
	    },
	    /**
		 * 字符串转化日期类型，判断当前是星期几
		 */
		stingToWeek:function(dateStr){
			var _weekDay = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
			var _dateValue = new Date(Date.parse(dateStr.replace(/-/g, "/"))); 
			return _weekDay[_dateValue.getDay()];
		},
		/**
		 * 昨天.今天.明天
		 * @param dateObj 日期对象
		 * @returns
		 */
		formatTripListDate : function(dateObj,lang){
			var self =this;
			var _today = new Date();
			var y = _today.getFullYear();
			var m = _today.getMonth();
			var d = _today.getDate();
			var time = new Date(y,m,d).getTime();
			
			var t = dateObj.getTime();
			var o = {des:"", ret:1};
			if(t<time && t>=time-86400000){
				o.des = lang.yesterday;
			}else if(t>=time && t<time+86400000){
				o.des = lang.today;
				o.ret = 0;
			}else if(t>=time+86400000 && t<time+86400000*2){
				o.des = lang.tomorrow;
			}else{
//				o.des=dateObj.getMonth()+1 + "-" + dateObj.getDate();
			}
			//历史行程
			if(t<time){
				o.ret = -1;
			}
			return o;
		},
		//开启消息推送服务 
		generatePushClientAccount: function(data){
			if(window.plugins && window.plugins.asmackPush){
				window.plugins.asmackPush.generatePushClientAccount(data);
			}
		},
		//通过广播开启消息推送服务
		startPushService: function(){
			if(window.plugins && window.plugins.asmackPush){
				window.plugins.asmackPush.startPushService();
			}
		},
		//关闭消息推送服务
		stopPushService: function(){
			if(window.plugins && window.plugins.asmackPush){
				window.plugins.asmackPush.stopPushService();
			}
		},
		//去掉字符串空格
		removeStrBlank:function(_str){
			if(_str == null || _str == undefined){
				return;
			}
			
			var tmpStr = _str;
			tmpStr = tmpStr.replace(/\s/g,"");

			return tmpStr;
		},
		getBundleVersion:function(_callback){
			var self = this;
			if(self.browerVersion('iOS') && Cordova){
				Cordova.exec(function(_versionArray){
					if(_versionArray.length == 0){
						return;
					}
					var versionStr = _versionArray[0];
					_callback(versionStr);
				},function(){},"GetSystemVersion","getBundleVersion",["getBundleVersion"]);
				
			}
		},
		/**
		更新iOS插件
		**/
		updateIOSPlugin:function(rs){
			var self = this;
			if(rs && rs.state == 1 && rs.data != null){//成功
				var pluginVersion = rs.data.pluginVersion/*test*/;

				if(pluginVersion > self.config.get('version')){
					//调用native插件更新
					if(self.browerVersion('iOS') && Cordova){
						Cordova.exec(function(){},function(){},"UpdatePlugin","updatePlugin",[rs.data.addr,self.lang]);
					}
				}
			}
			//失败不处理
		},
		/**
		针对ios7日期控件显示中文的问题进行修改
		_view为日期控件所在的view
		_className为input父节点的class
		**/
		modifyDatePicker:function(_view,_className){
			
			if(_view == null || _view == undefined || _className == null || _className == undefined || _className == ''){
				return;
			}
			
			var self  = this;
			
			if(self.browerVersion('iOS')&& Cordova){
				Cordova.exec(function(_version){
					if(_version.length == 0){
						return;
				  	}
				  
					var tmpVersion = _version[0];
					
					if(tmpVersion<'7.0'){
						return;
					}
					
					var boxes = _view.$el.find('.'+_className);
					//清除掉多余的input
					$.each(boxes,function(){
						if($(this).find('input').length == 2){
							$(this).find('input:first').remove();
						}
					});
					
					var inputList = _view.$el.find('.'+_className+' input');
					
					$.each(inputList,function(){
						$(this).parent().css('position','relative');							
						$(this).css('opacity','0');
						$(this).attr('style','position:absolute;top:0;z-index:1;opacity:0;');
						
						var dateValue = $(this).val();
						
						$(this).before('<input data-role="none" class="gx-date-input" type="text" readonly="readonly" style="position:absolute;top:0;z-index:2;background:none;"  value="'+dateValue+'" />');
				
						$(this).prev().click(function(){
							$(this).next().trigger('focus');
						});
						$(this).change(function(){
							var dateVal = $(this).val();
							$(this).prev().val(dateVal);
						});
					});
				},function(){},"GetSystemVersion", "getSystemVersion", ["getVersion"]);
			}
			
			
		},
		/**
		 * 获取当前应用的语言（中/英）
		 */
		getAppLang:function(store){
			var self =this;
			if(store.getLang()==='zh-cn'){
				self.lang = Chinese;
			}else{
				self.lang = English;
			}
		},
		getEnLang:function(){
			return English;
		},
		getZhLang:function(){
			return Chinese;
		},
		/**
		 * 设置主题样式
		 */
		setTheme:function(store){
			var theme = store.getTheme();
			//判断主题
			if(theme == 'blue'){
				store.setLinkTheme('blue');
			}
			
			if(theme =='green'){
				store.setLinkTheme('green');
			}
		},
		
		/**
		 * 对象克隆
		 * obj 被克隆对象
		 */
		objClone:function(obj){  
		    var o;  
		    switch(typeof obj){  
		    case 'undefined': break;  
		    case 'string'   : o = obj + '';break;  
		    case 'number'   : o = obj - 0;break;  
		    case 'boolean'  : o = obj;break;  
		    case 'object'   :  
		        if(obj === null){  
		            o = null;
		        }else{  
		            if(obj instanceof Array){  
		                o = [];  
		                for(var i = 0, len = obj.length; i < len; i++){  
		                    o.push(this.objClone(obj[i]));  
		                }  
		            }else{  
		                o = {};  
		                for(var k in obj){  
		                    o[k] = this.objClone(obj[k]);  
		                }  
		            }  
		        }  
		        break;  
		    default:          
		        o = obj;break;  
		    }  
		    return o;     
		},
		/**
		 * 将null与undefined字段转为''
		 * 确保返回数据格式为字符串
		 */
		killNull:function(str){
			return str===null||str===undefined||str==='null'?'':str+'';
		},
		/**
		 * 判断对象是否为null，undefined，''
		 */
		ifEmpty:function(str){
			return str===null||str===undefined||str==''||str==='null';
		},
		/**
		 * 判断字符串中是否包含中文
		 */
		ifHasChinese:function(str){
			if(escape(str).indexOf("%u")<0){   
				return false;
			}else{  
				return true; 
			}  
		},
		/**
		 * 初始化添加新(机票/酒店)单元的参数
		 * type 0:机票，1:酒店
		 */
		initItemParams:function(store,type){
			var self=this;
			params.isNew=false;//非新行程
			params.order.serviceCodeId = store.getMyInfo().serviceCodeId;
			params.order.serviceCode = store.getMyInfo().serviceCode;
			//新增航空单元，旅客联系人信息不可变
			if(params.order.jourState != -1){
				var airItemList= params.order.airItemInfoList;
				var hotelItemList=params.order.hotelItemInfoList;
				if(!_.isEmpty(airItemList)){
					var airItemListT= _.clone(airItemList).reverse();
					var passenger=airItemListT[0].passengerInfoList[0];
					self._initContact(passenger);
					//保存最新订单的酒店入住城市、入住日期、离店日期
					//取最近(时间)的航段
					var segment = airItemListT[0].segmentInfoList[0];
					var takeoffDate = segment.takeoffTime.substring(0,10);
					var date = new Date(takeoffDate);
					date.setDate(date.getDate() + 1);
					if(!_.isEmpty(segment)){
						if(_.isEqual(type,0)){
							params.query.depApt=segment.arriveStn;
							params.query.arrApt=segment.takeoffStn;
							params.query.depDate=self.formatDate(date,"yyyy-mm-dd");
							params.query.retDate=self.formatDate(date.setDate(date.getDate() + 1),"yyyy-mm-dd");
						}else{
							params.order_hotel.arrDate = segment.arriveTime.substring(0,10);
							//如果入店日期和离店日期相同 ,则离店日期+1
							if(_.isEqual(params.order_hotel.arrDate,takeoffDate)){
								params.order_hotel.depDate = self.formatDate(date,"yyyy-mm-dd");
							}else{
								params.order_hotel.depDate = takeoffDate;
							}
							//在机票订单里添加酒店，应该默认抵达地城市为入住城市 add 2014-7-10
							params.order_hotel.arriveStn=segment.arriveStn;
						}
					}
					airItemListT=null;
					date=null;
				}else if(!_.isEmpty(hotelItemList)){
					var passenger=hotelItemList[0].passengerVOList[0];
					self._initContact(passenger);
					//日期
					if(!_.isEmpty(hotelItemList)){
						params.query.depDate=hotelItemList[0].checkInDate.substring(0,10);
						params.query.retDate=hotelItemList[0].checkOutDate.substring(0,10);
						//在酒店订单里添加机票，应该默认入住城市为目的地城市 add 2014-7-10
						params.query.arrApt=hotelItemList[0].hotelCity;
					}
				}
			}
		},
		/**
		 * 获取订单中机票和酒店单元中的所有乘客列表为默认的已选乘客 add zcy
		 */
		initOrderPassenger:function(){
			var self=this;
			var hotelItemInfoList=params.order.hotelItemInfoList;
			var airItemInfoList=params.order.airItemInfoList;
			var checkInPeopleList=[];
			if(airItemInfoList&&airItemInfoList.length!=0){
				for(var i in airItemInfoList){
					var passengerInfoList=airItemInfoList[i].passengerInfoList;
					for(var j in passengerInfoList){
						if(!self._arrPassengerIndex(checkInPeopleList,passengerInfoList[j])){
							checkInPeopleList.push(passengerInfoList[j]);
						}
					}
				}
			}
			if(hotelItemInfoList&&hotelItemInfoList.length!=0){
				for(var i in hotelItemInfoList){
					var passengerVOList=hotelItemInfoList[i].passengerVOList;
					for(var j in passengerVOList){
						if(!self._arrPassengerIndex(checkInPeopleList,passengerVOList[j])){
							checkInPeopleList.push(passengerVOList[j]);
						}
					}
				}
			}
			params.selectedUserList=checkInPeopleList;
		},
		/**
		 * 判断数组中是否含相同的入住人 add zcy
		 */
		_arrPassengerIndex:function(arr,obj){
			if(arr&&arr.length!=0){
				for(var i in arr){
					if(arr[i].psgParId==obj.psgParId){
						return true;
					}
				}
			}
			return false;
		},
		/**
		 * 同步联系人信息
		 */
		_initContact:function(passenger){
			var self=this;
			for(var i in params.selectedUserList){
				var user = params.selectedUserList[i];
				user.contactEmail=passenger.contactEmail;
				user.contactName=passenger.contactName;
				user.contactTel=passenger.contactTel;
			}
		},
		/**
		 * 退出清除数据
		 */
		logoutClearData:function(sgClient,store){
			var self = this;
			store.setToken(null);
			sgClient.clearAirportCache();
			store.setData("$myinfo", null);
			store.setData("$myservicecode", null);
			store.setData("$DeliveryAddress",null);
			store.setData('$agentConfig',null);//清空多供应商选择
			store.setData('$agentFlag',null);//清空多供应商标志
			store.setData('$userHistory',null);//清空乘机人历史
			store.setData('$reasonArray',null);//清空拒绝历史原因
			store.setApprModel(null);//运通清空当前缓存的审批模式
			store.setTimePoint(null);//清除判断更新数据的时间点
			var router = self.getRouter();
			router.homeView = null;
			store.setOrderListIndex(0);
			store.setReviewListIndex(0);
			self.clearMyOrderAndApverCache();
			params.query.depTime='';//初始化(中英文切换,初始化数据)
			params.query.retTime='';//初始化(中英文切换,初始化数据)
			if(store.getTempOftenTripCardInfoList() !=null)
				store.setTempOftenTripCardInfoList(null);
			// 当当前用户注销登录之后关闭推送服务
			self.stopPushService();
		},
		/*
		 * 校验身份证号
		 */  
		IdCardValidate:function(idCard) { 
		    idCard = this.trim(idCard.replace(/ /g, ""));               //去掉字符串头尾空格                     
		    if (idCard.length == 15) {   
		        return this.isValidityBrithBy15IdCard(idCard);       //进行15位身份证的验证    
		    } else if (idCard.length == 18) {   
		        var a_idCard = idCard.split("");                // 得到身份证数组   
		        if(this.isValidityBrithBy18IdCard(idCard)&&this.isTrueValidateCodeBy18IdCard(a_idCard)){   //进行18位身份证的基本验证和第18位的验证
		            return true;   
		        }else {   
		            return false;   
		        }   
		    } else {   
		        return false;   
		    }   
		},   
		/**  
		 * 判断身份证号码为18位时最后的验证位是否正确  
		 * @param a_idCard 身份证号码数组  
		 * @return  
		 */  
		isTrueValidateCodeBy18IdCard:function(a_idCard) {   
		    var sum = 0;                             // 声明加权求和变量   
		    if (a_idCard[17].toLowerCase() == 'x') {   
		        a_idCard[17] = 10;                    // 将最后位为x的验证码替换为10方便后续操作   
		    }   
		    for ( var i = 0; i < 17; i++) {   
		        sum += this.Wi[i] * a_idCard[i];            // 加权求和   
		    }   
		    valCodePosition = sum % 11;                // 得到验证码所位置   
		    if (a_idCard[17] == this.ValideCode[valCodePosition]) {   
		        return true;   
		    } else {   
		        return false;   
		    }   
		},   
		/**  
		  * 验证18位数身份证号码中的生日是否是有效生日  
		  * @param idCard 18位书身份证字符串  
		  * @return  
		  */  
		isValidityBrithBy18IdCard:function(idCard18){   
		    var year =  idCard18.substring(6,10);   
		    var month = idCard18.substring(10,12);   
		    var day = idCard18.substring(12,14);   
		    var temp_date = new Date(year,parseFloat(month)-1,parseFloat(day));   
		    // 这里用getFullYear()获取年份，避免千年虫问题   
		    if(temp_date.getFullYear()!=parseFloat(year)   
		          ||temp_date.getMonth()!=parseFloat(month)-1   
		          ||temp_date.getDate()!=parseFloat(day)){   
		            return false;   
		    }else{   
		        return true;   
		    }   
		},   
		  /**  
		   * 验证15位数身份证号码中的生日是否是有效生日  
		   * @param idCard15 15位书身份证字符串  
		   * @return  
		   */  
		isValidityBrithBy15IdCard:function(idCard15){   
		      var year =  idCard15.substring(6,8);   
		      var month = idCard15.substring(8,10);   
		      var day = idCard15.substring(10,12);   
		      var temp_date = new Date(year,parseFloat(month)-1,parseFloat(day));   
		      // 对于老身份证中的你年龄则不需考虑千年虫问题而使用getYear()方法   
		      if(temp_date.getYear()!=parseFloat(year)   
		              ||temp_date.getMonth()!=parseFloat(month)-1   
		              ||temp_date.getDate()!=parseFloat(day)){   
		                return false;   
		        }else{   
		            return true;   
		        }   
		  },   
		//去掉字符串头尾空格   
		trim:function(str) {   
		    return str.replace(/(^\s*)|(\s*$)/g, "");   
		}
	};
		
	
	return utils;
});