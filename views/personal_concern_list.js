define([ 'jquery','underscore','backbone','SGView','text!templates/personal_concern_list.html' ], 
		function($, _, Backbone,SGView, viewtTpl) {
	var PersonalConcertList = SGView.extend({
		pageId : 'personal_concern_list',
		template : _.template(viewtTpl),
		render : function() {
			var self = this;
			this.$el.empty();
			this.$el.attr('class', 'ui-page-active ui-page');
			/*-------------------------------------------------------------------------*/
			setTimeout(function(){document.title = "关注列表";},100);
			var CurrentFlights = this.CurrentFlights();
			//this.ButtonSwitchChange();
			var HisFlights = this.HisFlights();
			var hisrsp = {};
			/*setTimeout(function(){self.GetThePicture()},500);*/
			self.$el.append(self.template({
				CurrentFlights:CurrentFlights,HisFlights:HisFlights
			}));
			return this;
		},
		events : {
			"click #deleteButton" : "DeleteList",
			"click #edit" : "ButtonSwitch",
			"click #cancel" : "ButtonCancel",
			"click .Check_in_seat_selection" : "CheckinSeat",
			"click .historic_interest" : "CheckinSeat",
		},
		/**
		 * 获得正在关注的缓存的关注列表数据
		 */
		CurrentFlights : function(e) {
			var CurrentFlights = this.getCache("CurrentFlights");
			return CurrentFlights;
		},
		
		/**
		 * 获得已经关注的缓存列表数据
		 */
		HisFlights : function() {
			var HisFlights = this.getCache("HisFlights");
			return HisFlights;
		},
		
		/**
		 * 取消按钮功能
		 */
		ButtonCancel : function() {
			var cancel = document.getElementById("cancel");
			cancel.className = "personal_concernList_div_01 dispalyNone";
			
			var edit = document.getElementById("edit");
			edit.className = "personal_concernList_div_01";
			
			var deleteFollow = document.getElementById("deleteFollow");
			deleteFollow.className = "personal_concernList_div_01 dispalyNone";
			
			var deleteButton = document.getElementById("deleteButton");
			deleteButton.className = "personal_concernList_div_03 delete_disable";
			
			var headImg = document.getElementById("imghead");
			headImg.className= "avatarImg";
			var checkBox = document.getElementsByName("checkboxitems");
			for (var i=checkBox.length-1; i>=0;i--){
				var boxDiv=checkBox[i].parentNode;
				boxDiv.className = "personal_concernList_div_04 dispalyNone";
				checkBox[i].checked = false;
			}
		},
		/**
		 * 编辑删除按钮切换
		 */
		ButtonSwitch : function() {
			var cancel = document.getElementById("cancel");
			cancel.className = "personal_feedback_write_div_02";
			
			var edit = document.getElementById("edit");
			edit.className = "personal_concernList_div_01 dispalyNone";
			
			var headImg = document.getElementById("imghead");
			headImg.className= "avatarImg";
			
			var deleteFollow = document.getElementById("deleteFollow");
			deleteFollow.className = "personal_concernList_div_01";
			
			var checkBox = document.getElementsByName("checkboxitems");
			for (var i=checkBox.length-1; i>=0;i--){
				var boxDiv=checkBox[i].parentNode;
				boxDiv.className = "personal_concernList_div_04";
			}
		},
		
		/**
		 * 删除选中列表
		 */
		DeleteList : function() {
			var checkedNum=0;
			var checkBox = $("input[name='checkboxitems']");
			var idList = new Array();
			var idJson='[';
			for (var i = 0; i < checkBox.length; i++) {
				if(checkBox[i].checked){
					checkedNum=1;
					idJson+='{"id":"'+checkBox[i].id+'","identity":'+'"'+checkBox[i].parentNode.id+'"},';
					idList[i]=checkBox[i].id;
				}
			}
			if(checkedNum==0){
				return false;
			}
			idJson=idJson.substring(0,idJson.length-1);
			idJson+=']';
			var objJson=JSON.parse(idJson);
			var self = this;
			var openid = self.store.getOpenId();
			//var openid = "100000000000151";
			var _query = {
				    "rpid": "2008", 
				    "ropenid": openid, 
				    "version": "1.0", 
				    "rip": "127.0.0.1", 
				    "rpara": {
				        "concernIds": objJson
				    }
				};
			self.utils.showMessage("onLoading", '', self.sgClient);
			self.sgClient.post(_query, '', function(customs_data) {
				if (customs_data && customs_data.code == 0){
					self.utils.showAlert({
						text : ("删除成功")
					});
				for(var j=0;j<idList.length;j++){
					var tableId = 't'+idList[j];
					$("#"+tableId).hide();
				}
				resortStyle();
				}
			}, "json");
			self.utils.hideMessage();
		},
		/**
		 * 值机选座座位图
		 */
		CheckinSeat:function(e){
			//var openid = self.store.getOpenId();
			var openid = "100000000000146";
			var self = this;
			var target = $(e.target);
			var targetParent = target.parent("td");
			var flightDate = targetParent.attr("deDate");//起飞日期
			var airCode = targetParent.attr("airCode");
			var carrierFlightNo = targetParent.attr("carrierFlightNo");//承运航班号
			var flightNo = airCode+carrierFlightNo;//承运航班号
			var toCity = targetParent.attr("arCode");//到达城市
			var fromCity = targetParent.attr("deCode");//起飞城市
			var mainCabin = targetParent.attr("mainCabin");//主舱位
			var query = {
				    "rpid": "3006",
				    "ropenid": openid,
				    "version": "1.0",
				    "rip":"127.0.0.1",
				    "rpara": {
				    "flightNo": flightNo,
				    "flightDate": flightDate,
				    "toCity": toCity,
				    "flightClass": mainCabin,
				    "fromCity": fromCity
				    }
				};
			self.utils.showMessage("",'',self.sgClient);
			self.utils.showAlert({text:"您已阅读并同意<div><a href='#'>乘客须知、</a><a href='#'>危险品公告</a></div>",title:"乘客须知",onOktext:"同意",onCanceltext:"不同意",onOK:function(){
			self.sgClient.post(query,'',function(_data){					
				if(_data && _data.code == 0){//查询成功
					var CheckinSeat = _data.rsp;
					self.addCache("checkinSeat",CheckinSeat);
					self.getPNRtravler(e,"2");//获取同PNR旅客
			}else if(_data.code != 0){//查询失败
				self.utils.showAlert({text:(_data.msg)});
				self.utils.hideMessage();
			}
		},"json");
			},onCancel:function(){
				self.utils.hideMessage();
				return false;
			}});
		},
		
		/**
		 * 查询同PNR旅客
		 */
		getPNRtravler:function(e,operating){
			//var openid = self.store.getOpenId();
			var openid = "100000000000146";
			var self = this;
			var target = $(e.target);
			var targetParent = target.parent("td");
			var certNo = targetParent.attr("certId");//证件号
			var certType = targetParent.attr("certType");//证件类型
			var pnrNo = targetParent.attr("pnr");//Pnr号
			var flightDate = targetParent.attr("deDate");//起飞日期
			var flightTime = targetParent.attr("deTime");//起飞时间
			var flightNo = targetParent.attr("carrierFlightNo");//航班号
			var formCity = targetParent.attr("deCode");//始发机场三字码
			var toCity = targetParent.attr("arCode");//到达机场三字码
			var flightInit = targetParent.attr("isFlightInit");//是否初始化
			var query = {
				    "rpid": "3009",
				    "ropenid": openid,
				    "version": "1.0",
				    "rip":"127.0.0.1",
				    "rpara": {
				    "certNo": certNo,
				    "certType": certType,
				    "pnrNo": pnrNo,
				    "flightDate": flightDate,
				    "flightTime": flightTime,
				    "flightNo": flightNo,
				    "formCity": formCity,
				    "toCity": toCity,
				    "flightInit": flightInit
				    }
				};
			self.sgClient.post(query,'',function(_data){					
				if(_data && _data.code == 0){//查询成功
					self.addCache("pnrTraList",_data);
					self.getRecommendSeat(e,operating);
					
			}else if(_data.code != 0){//查询失败
				self.addCache("pnrTraList",_data);
				self.getRecommendSeat(e,operating);
			}
		},"json");
		},
		/**
		 * 获取推荐座位
		 */
		getRecommendSeat:function(e,operating){
			//var openid = self.store.getOpenId();
			var openid = "100000000000146";
			var self = this;
			var target = $(e.target);
			var targetParent = target.parent("td");
			var idCard = targetParent.attr("certId");
			var etCode = targetParent.attr("ticketNumber");
			var AirLine = targetParent.attr("carrierAirCode");
			var FltNbr = targetParent.attr("carrierFlightNo");
			var AirCrftType = targetParent.attr("planeType");
			var AirCrftMDL = targetParent.attr("childPlaneType");
			var Class = targetParent.attr("mainCabin");
			var passengerName = targetParent.attr("passengerName");
			var flightNum = targetParent.attr("carrierFlightNo");
			var pnr = targetParent.attr("pnr");
			var deDate = targetParent.attr("deDate");
			var deTime = targetParent.attr("deTime");
			var ticketDate = deDate+" "+deTime;
			var depAirportCode = targetParent.attr("deCode");
			var arrAirportCode = targetParent.attr("arCode");
			var ffpOption = targetParent.attr("ffType");
			var passengerType = targetParent.attr("passengerType");
			var classOfService = targetParent.attr("cabin");
			var query = {
				    "rpid": "3001",
				    "ropenid": openid,
				    "version": "1.0",
				    "rip":"127.0.0.1",
				    "rpara": {
				    "paxInfo": {
				    	"idCard":idCard,
				    	"etCode":etCode	,
				    },
				    "fltInfo":{
				    	"AirLine":AirLine,
				    	"FltNbr":FltNbr,
				    	"AirCrftType":AirCrftType,
				    	"AirCrftMDL":AirCrftMDL,
				    	"Class":Class,
				    },
				    "passengerName": passengerName,
				    "flightNum": flightNum,
				    "pnr": pnr,
				    "ticketDate": ticketDate,
				    "depAirportCode": depAirportCode,
				    "operating": operating,
				    "arrAirportCode": arrAirportCode,
				    "ffpOption": ffpOption,
				    "passengerType":passengerType,
				    "classOfService":classOfService
				    }
				};
			self.sgClient.post(query,'',function(_data){					
				if(_data && _data.code == 0){//查询成功
					self.addCache("RecommendSeat",_data);
					self.jumpTo("forward/seatselection");
			}else if(_data.code != 0){//查询失败
				self.addCache("RecommendSeat",_data);
				self.jumpTo("forward/seatselection");
			}
				self.utils.hideMessage();
		},"json");
		}
	});
	return PersonalConcertList;
});

/**
 * 删除按钮样式变化
 */
function ButtonSwitchChange(){
	var checkedNum=0;
	var checkBox = document.getElementsByName("checkboxitems");
	var deleteButton = document.getElementById("deleteButton");
	for (var i = checkBox.length-1;i >=0;i--) {
		if(checkBox[i].checked){
			checkedNum=1;
		}
	}
	if(checkedNum==1){
		deleteButton.className = "personal_concernList_div_03 delete_able";
	}else{
		deleteButton.className = "personal_concernList_div_03 delete_disable";
	}
}
/**
* 删除后恢复样式
*/
function resortStyle(){
	var cancel = document.getElementById("cancel");
	cancel.className = "personal_concernList_div_01 dispalyNone";
	
	var edit = document.getElementById("edit");
	edit.className = "personal_concernList_div_01";
	
	var deleteFollow = document.getElementById("deleteFollow");
	deleteFollow.className = "personal_concernList_div_01 dispalyNone";
	
	var headImg = document.getElementById("imghead");
	headImg.className= "avatarImg";;
	
	var deleteButton = document.getElementById("deleteButton");
	deleteButton.className = "personal_concernList_div_03 delete_disable";
	
	var checkBox = document.getElementsByName("checkboxitems");
	for (var i=checkBox.length-1; i>=0;i--){
		var boxDiv=checkBox[i].parentNode;
		boxDiv.className = "personal_concernList_div_04 dispalyNone";
		checkBox[i].checked = false;
	}
}
