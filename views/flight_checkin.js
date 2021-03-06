define(['jquery','underscore','backbone','SGView','text!templates/flight_checkin.html'],
function($,_,Backbone,SGView,viewtTpl){
	var FlightCheckIn = SGView.extend({
		pageId:'flight_list',
		template:_.template(viewtTpl),
		render:function(){
			var self = this;
			this.$el.empty();
			var ticketList = self.getCache("ticketList");//值机航班列表
			var userAuthStatus = self.store.getUserAuthStatus();
			self.$el.append(self.template({lang:self.lang,data:ticketList,userAuthStatus:userAuthStatus}));
			this.$el.attr('class','ui-page-active ui-page');
			self.$el.on('pageshow',function(){
				if(userAuthStatus.certify_status=="1"){
					$("#wrapper").height(document.body.clientHeight - 92);
				}else{
					$("#wrapper").height(document.body.clientHeight - 22);
				}
				self.initScroll("wrapper");
			}); 
			return this;
		},
		events: {
			"click #notice": "noticemsg",
			"click a": "cancelBoarding",
			"click .write-icon": "editUserNum",
			"blur input": "saveUserNum",
			"click #reserveSeat": "reserveSeat",
			"click .Checkin-color": "CheckinSeat",
			"click .follow-flight": "followFlight",
			"click .j-addOthers": "addOthers",
		},
		/*
		 * 添加其他证件
		 */
		addOthers:function(){
			var self = this;
			self.jumpTo("forward/boardingpass");
		},
		/*
		 * 取消值机
		 */
		cancelBoarding:function(){
			var self = this;
			var ropenid = self.store.getOpenId();
			var query= {
				    "rpid":"3012",
				    "ropenid":ropenid,
				    "version":"1.0",
				    "rip":"127.0.0.1",
				    "rpara":{
				    }
				};
			self.utils.showMessage("",'',self.sgClient);
			self.sgClient.post(query,'',function(_data){			
				if(_data && _data.code == 0){//查询成功
					var cancelUserList = _data.rsp;
					self.addCache("cancelUserList",cancelUserList);
					self.jumpTo("forward/canceluserlist");
				}else if(_data.code != 0){//查询失败
					self.utils.showAlert({text:(_data.msg)});
				}
				self.utils.hideMessage();
			},"json");
		},
		/**
		 * 关注航班
		 */
		followFlight:function(e){
			var self = this;
			var ropenid = self.store.getOpenId();
			var target = $(e.target);
			var liIndex = target.parent('li').index();//当前被点击的票面数组位置
			self.params.nowTicket = self.getCache("ticketList")[liIndex];//将当前被点击票面信息放入参数集
			var query = {
				    "rpid": "2006",
				    "ropenid": ropenid,
				    "version": "1.0",
				    "rip":"127.0.0.1",
				    "rpara": {
				    "airCode": self.params.nowTicket.airCd,
				    "fltNum": self.params.nowTicket.fltNumber,
				    "deDate": self.params.nowTicket.deDate,
				    "deTime": self.params.nowTicket.deTime,
				    "arTime": self.params.nowTicket.arTime,
				    "deCode":self.params.nowTicket.deCode,
				    "arCode":self.params.nowTicket.arCode,
				    "arDate":self.params.nowTicket.arDate,
				    "carrierFltNum":self.params.nowTicket.opFltNumber,
				    "carrierAirCode":self.params.nowTicket.opAirCode,
				    "ticketNumber":self.params.nowTicket.ticketNumber
				    }
				}; 
			self.utils.showMessage("",'',self.sgClient);
			self.sgClient.post(query,'',function(_data){			
				if(_data && _data.code == 0){//查询成功
					self.utils.showAlert({text:("关注成功")});
				}else{//失败
					self.utils.showAlert({text:(_data.msg)});
				}
				self.utils.hideMessage();
			},"json");		
		},
		/*
		 * 值机选座座位图
		 */
		CheckinSeat:function(e){
			var self = this;
			var ropenid = self.store.getOpenId();
			var target = $(e.target);
			var liIndex = target.parent('li').index();//当前被点击的票面数组位置
			self.params.nowTicket = self.getCache("ticketList")[liIndex];//将当前被点击票面信息放入参数集
			var flightDate = target.attr("deDate");
			var flightNo = target.attr("opAirCodeFltNumber");
			var toCity = target.attr("arCode");
			var fromCity = target.attr("deCode");
			var mainCabin= target.attr("mainCabin");		
			var query = {
				    "rpid": "3006",
				    "ropenid": ropenid,
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
			self.utils.showAlert({text:"您已阅读并同意<div><a href='#information'>乘客须知、</a><a href='#DanGoodsNotice'>危险品公告</a></div>",title:"乘客须知",onOktext:"同意",onCanceltext:"不同意",onOK:function(){
			self.sgClient.post(query,'',function(_data){					
				if(_data && _data.code == 0){//查询成功
					var checkinSeat = _data.rsp;
					self.addCache("checkinSeat",checkinSeat);
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
		/*
		 * 查询同PNR旅客
		 */
		getPNRtravler(e,operating){
			var self = this;
			self.params.operating = operating;
			var ropenid = self.store.getOpenId();
			var target = $(e.target);
			var certNo = target.attr("idNumber");
			var certType = "NI";
			if(self.params.certType!="0"){
				certType = "PP";
			}
			var pnrNo = target.attr("pnr");
			var flightDate = target.attr("deDate");
			var flightTime = target.attr("deTime");
			var flightNo = target.attr("opAirCodeFltNumber");
			var formCity = target.attr("deCode");
			var toCity = target.attr("arCode");
			var flightInit = target.attr("isFlightInit");
			var query = {
				    "rpid": "3009",
				    "ropenid": ropenid,
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
					var pnrTraList = _data.rsp;
					self.addCache("pnrTraList",_data);
					if(operating==1){//预留座位不跑推荐座位协议
						self.jumpTo("forward/seatselection");
					}else{
						self.getRecommendSeat(e,operating);
					}
			}else if(_data.code != 0){//查询失败
				self.addCache("pnrTraList",_data);
				self.getRecommendSeat(e,operating);
				
			}
		},"json");
		},
		/*
		 * 获取推荐座位
		 */
		getRecommendSeat:function(e,operating){
			var self = this;
			var ropenid = self.store.getOpenId();
			self.params.operating = operating;
			var target = $(e.target);
			var idCard = target.attr("idNumber");
			var etCode = target.attr("ticketNumber");
			var AirLine = target.attr("airCd");
			var FltNbr = target.attr("opFltNumber");
			var AirCrftType = target.attr("planetype");
			var AirCrftMDL = target.attr("childPlantype");
			var Class = target.attr("mainCabin");
			var passengerName = target.attr("passengerName");
			var flightNum = target.attr("opAirCodeFltNumber");
			var pnr = target.attr("pnr");
			var deDate = target.attr("deDate");
			var deTime = target.attr("deTime");
			var ticketDate = deDate+" "+deTime;
			var depAirportCode = target.attr("deCode");
			var arrAirportCode = target.attr("arCode");
			var ffpOption = target.attr("cardLevel");
			var passengerType = target.attr("passengerType");
			var classOfService = target.attr("childCabin");
			var query = {
				    "rpid": "3001",
				    "ropenid": ropenid,
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
		},
		/**
		 * 预留座位
		 */
		reserveSeat:function(e){
			var self = this;
			var ropenid = self.store.getOpenId();
			var target = $(e.target);
			var liIndex = target.parent('li').index();//当前被点击的票面数组位置
			self.params.nowTicket = self.getCache("ticketList")[liIndex];//将当前被点击票面信息放入参数集
			var fltNumber = target.attr("fltNumber");
			var airCd = target.attr("airCd");
			var flightNum = airCd+fltNumber;
			var pnr = target.attr("pnr");
			var ticketDate = target.attr("deDate");
			var depAirportCode = target.attr("deCode");
			var arrAirportCode = target.attr("arCode");
			var ffpOption = target.attr("cardLevel");
			var passengerType = target.attr("passengerType");
			var classOfService = target.attr("childCabin");
			var query = {
				    "rpid": "3002",
				    "ropenid": ropenid,
				    "version": "1.0",
				    "rip":"127.0.0.1",
				    "rpara": {
				    "flightNum": flightNum,
				    "pnr": pnr,
				    "ticketDate": ticketDate,
				    "depAirportCode": depAirportCode,
				    "arrAirportCode": arrAirportCode,
				    "ffpOption": ffpOption,
				    "passengerType": passengerType,
				    "classOfService":classOfService
				    }
				};
			var aaa = self.store.getData("$checkFlag");
			if(self.store.getData("$checkFlag")==false || self.store.getData("$checkFlag")==null){
			self.utils.showCheckAlert(self.store,{text:"您仍需在线或柜台办理值机选座<br>预留座位可能发生变更",title:"乘客须知",checkbox:"下次不在提醒",onOktext:"我知道了",onOK:function(){
				self.utils.showMessage("",'',self.sgClient);
				self.sgClient.post(query,'',function(_data){					
					if(_data && _data.code == 0){//查询成功
						var checkinSeat = _data.rsp;
						self.addCache("checkinSeat",checkinSeat);
						self.getPNRtravler(e,"1");//获取同PNR旅客	
				}else if(_data.code != 0){//查询失败
					self.utils.showAlert({text:(_data.msg)});
					self.utils.hideMessage();
				}
			},"json");
			}});
			}else{
				self.utils.showMessage("",'',self.sgClient);
				self.sgClient.post(query,'',function(_data){					
					if(_data && _data.code == 0){//查询成功
						var checkinSeat = _data.rsp;
						self.addCache("checkinSeat",checkinSeat);
						self.getPNRtravler(e,"1");//获取同PNR旅客	
				}else if(_data.code != 0){//查询失败
					self.utils.showAlert({text:(_data.msg)});
					self.utils.hideMessage();
				}
			},"json");
			};
		},
		/*
		 *编辑常旅客号 
		 */
		editUserNum:function(e){
			var self = this,
            event = $(e.currentTarget);
			var html = "常旅客号："+"<input class='edit' type='text' data-role='none' />";
			event.next().html(html);
			self.$el.find(".edit").focus();//另文本框获取焦点
		},
		/*
		 * 保存常旅客号
		 */
		saveUserNum:function(e){
			var self = this;
			var html = "常旅客号：" + $('.edit').val();
			self.$el.find(".edit").parent().html(html);
		},
		/**
		 * 温馨提示样式切换
		 */
		noticemsg:function(){
			var self = this;
			var uldom = self.$el.find("#noticeli");
			uldom.toggle();
		}
	});
	return FlightCheckIn;
});