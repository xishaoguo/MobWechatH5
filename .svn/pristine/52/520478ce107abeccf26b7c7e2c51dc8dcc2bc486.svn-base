define(['jquery','underscore','backbone','SGView','text!templates/flight_guide.html'],
function($,_,Backbone,SGView,viewtTpl){
	var FlightGuide = SGView.extend({
		pageId:'flight_list',
		checkFlag:null,//下次不在提醒标志位
		template:_.template(viewtTpl),
		render:function(){
			var self = this;
			this.$el.empty();
			var TripTrail = self.getCache("TripTrail");
			self.$el.append(self.template({lang:self.lang,data:TripTrail}));
			self.$el.on('pageshow',function(){ 
				$("#wrapper").height(document.body.clientHeight - $("#wrapper").position().top);
				self.initScroll("wrapper");
			}); 
			setTimeout(function(){self.initStyle();},100);
			return this;
		},
		events: {
			"click #flightdetails": "flightdetails",
			"click #seatselection": "seatselection",
			"click #QRCode": "showQRCode",
			"click #cancelPrimary": "cancelPrimary",
			"click .j-cancelCheckIn": "cancelCheckIn",
			"click .j-CheckIn": "CheckIn",
		},
		/**
		 * 取消值机
		 */
		cancelCheckIn:function(){
			var self = this;
			var ropenid = self.store.getOpenId();
			var airCode = self.params.guideRsp.airCode;
			var fltNumber = self.params.guideRsp.fltNumber;
			var flightNo = airCode + fltNumber;
			var seatNo = self.params.guideRsp.seatNumber;
			var passengerList = [];
			passengerList[0] = {
					"certType":self.params.guideRsp.idType,
					"passengerMark": "0",
					"passengerName":self.params.guideRsp.passengerName,
					"cardID":self.params.guideRsp.idNumber,
					"seatNo":seatNo,
					"ticketNum":self.params.guideRsp.ticketNo,
			};
			self.utils.showAlert({text:"您将取消航班"+flightNo+"，座位"+seatNo+"",title:"取消值机座位",onOK:function(){
				var query = {
					    "rpid": "3008",
					    "ropenid": ropenid,
					    "version": "1.0",
					    "rip": "127.0.0.1",
					    "rpara": {
					        "phoneNo": "",
					        "flightNo": flightNo,
					        "flightDate": self.params.guideRsp.deDate,
					        "toCity": self.params.guideRsp.arCode,
					        "fromCity": self.params.guideRsp.deCode,
					        "arrTime": self.params.guideRsp.atime,
					        "depTime": self.params.guideRsp.deTime,
					        "arrDate": self.params.guideRsp.adate,
					        "couponNum": self.params.guideRsp.couponNumber,
					        "actualFlyDate": self.params.guideRsp.deDate,
					        "carrierFlightNo": self.params.guideRsp.opAirFltNumber,
					        "passengerList": passengerList
					    }
					};
				self.utils.showMessage("",'',self.sgClient);
				self.sgClient.post(query,'',function(_data){			
					if(_data && _data.code == 0){//成功
						var checkinSeat = JSON.parse(_data.rsp);
						self.utils.showAlert({text:"取消值机成功",onOK:function(){
							//TODO
						}});
					}else if(_data.code != 0){//失败
						self.utils.showAlert({text:(_data.msg)});
					}
					self.utils.hideMessage();
				},"json");
			},onCancel:function(){
				return false;
			}});
		},
		/**
		 * 值机座位图
		 */
		CheckIn:function(){
			var self = this;
			var ropenid = self.store.getOpenId();
			var airCode = self.params.guideRsp.airCode;
			var fltNumber= self.params.guideRsp.fltNumber;
			var flightNum = airCode+fltNumber;
			var query = {
				    "rpid": "3006",
				    "ropenid": ropenid,
				    "version": "1.0",
				    "rip":"127.0.0.1",
				    "rpara": {
				    "flightNo": flightNum,
				    "flightDate": self.params.guideRsp.deDate,
				    "toCity": self.params.guideRsp.arCode,
				    "flightClass": self.params.guideRsp.cabin,
				    "fromCity": self.params.guideRsp.deCode,
				    }
				};
			self.utils.showMessage("",'',self.sgClient);
			self.utils.showAlert({text:"您已阅读并同意<div><a href='#'>乘客须知、</a><a href='#'>危险品公告</a></div>",title:"乘客须知",onOktext:"同意",onCanceltext:"不同意",onOK:function(){
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
		/**
		 * 初始化样式
		 */
		initStyle:function(){
			var self = this;
			var TripTrail = self.getCache("TripTrail");//获取行程估计数据缓存
			var status = parseInt(TripTrail.status);
			var itemli = self.$el.find(".item-guide");
			for(var i = 0;i <= status;i++){
				$(itemli[i]).removeClass("item-guide-todo").addClass("item-guide-done");//高亮显示当前及之前事务
			};
			switch(status){
				case 0://出票
					
					break;
				case 1://选座
					var seatselectionli = self.$el.find(".j-seatselection");					
					self.$el.find(".guide-date-color").removeClass("guide-date-color");//移除高亮样式
					seatselectionli.prev("li").addClass("guide-date-color");//日期时间高亮
					var html = "<div class='guide-circle' style='top: -691px;'><div class='all-icon guide-seat-icon guide-icon'></div></div>";
					html += '<div style="top: 53px;position: absolute;" class="all-icon have-been-icon"></div>';//出票已完成图标
					html += '<div style="top: 302px;position: absolute;" class="all-icon have-not-icon"></div>';//值机处未完成图标
					html += '<div style="top: 425px;position: absolute;" class="all-icon have-not-icon"></div>';//托运处未完成图标
					html += '<div style="top: 549px;position: absolute;" class="all-icon have-not-icon"></div>';//安检处未完成图标
					html += '<div style="top: 673px;position: absolute;" class="all-icon have-not-icon"></div>';//登机处未完成图标
					html += '<div style="top: 796px;position: absolute;" class="all-icon have-not-icon"></div>';//到达处未完成图标
					html +='<div style="top: 228px;" class="all-icon item-guide-doing"></div>';//卷边样式定位
					self.$el.find(".guide-circle").remove();
					self.$el.find("ul").append(html);//当前事务图标
					
//					self.$el.find(".item-guide-doing").css("top","228px");//卷边样式定位
					var scrollbar = self.$el.find(".scroll-bar");//滚动条
					scrollbar.css("height","200px");
					$(".grey-scroll-bar").css("height","645px");//灰色滚动条
					$(".guide-doing-font").removeClass("guide-doing-font");
					$(".j-seatselection-font").addClass("guide-doing-font");//高亮放大当前状态文字
					break;
				case 2://值机
					var boardingpassli = self.$el.find("#boardingpass");
					self.$el.find(".guide-date-color").removeClass("guide-date-color");//移除高亮样式
					boardingpassli.prev("li").addClass("guide-date-color");//日期时间高亮
					var html = "<div class='guide-circle' style='top: -570px;'><div class='all-icon guide-checkin-icon guide-icon'></div></div>";
					html += '<div style="top: 53px;position: absolute;" class="all-icon have-been-icon"></div>';//出票已完成图标
					html += '<div style="top: 177px;position: absolute;" class="all-icon have-been-icon"></div>';//预留处已完成图标
					html += '<div style="top: 425px;position: absolute;" class="all-icon have-not-icon"></div>';//托运处未完成图标
					html += '<div style="top: 549px;position: absolute;" class="all-icon have-not-icon"></div>';//安检处未完成图标
					html += '<div style="top: 673px;position: absolute;" class="all-icon have-not-icon"></div>';//登机处未完成图标
					html += '<div style="top: 796px;position: absolute;" class="all-icon have-not-icon"></div>';//到达处未完成图标
					html +='<div style="top: 352px;" class="all-icon item-guide-doing"></div>';//卷边样式定位
					self.$el.find(".guide-circle").remove();
					self.$el.find("ul").append(html);//当前事务图标
					var scrollbar = self.$el.find(".scroll-bar");//滚动条
					scrollbar.css("height","323px");
					$(".grey-scroll-bar").css("height","522px");//灰色滚动条
					$(".guide-doing-font").removeClass("guide-doing-font");
					$(".j-checkin-font").addClass("guide-doing-font");//高亮放大当前状态文字
					break;
				case 3://托运
					var consignmentli = self.$el.find("#consignment");
					self.$el.find(".guide-date-color").removeClass("guide-date-color");//移除高亮样式
					consignmentli.prev("li").addClass("guide-date-color");//日期时间高亮
					var html = "<div class='guide-circle' style='top: -446px;'><div class='all-icon guide-consignment-icon guide-icon'></div></div>";
					html += '<div style="top: 53px;position: absolute;" class="all-icon have-been-icon"></div>';//出票已完成图标
					html += '<div style="top: 177px;position: absolute;" class="all-icon have-been-icon"></div>';//预留处已完成图标
					html += '<div style="top: 302px;position: absolute;" class="all-icon have-been-icon"></div>';//值机处已完成图标
					html += '<div style="top: 549px;position: absolute;" class="all-icon have-not-icon"></div>';//安检处未完成图标
					html += '<div style="top: 673px;position: absolute;" class="all-icon have-not-icon"></div>';//登机处未完成图标
					html += '<div style="top: 796px;position: absolute;" class="all-icon have-not-icon"></div>';//到达处未完成图标
					html +='<div style="top: 476px;" class="all-icon item-guide-doing"></div>';//卷边样式定位
					self.$el.find(".guide-circle").remove();
					self.$el.find("ul").append(html);//当前事务图标
					var scrollbar = self.$el.find(".scroll-bar");//滚动条
					scrollbar.css("height","446px");
					$(".grey-scroll-bar").css("height","399px");//灰色滚动条
					$(".guide-doing-font").removeClass("guide-doing-font");
					$(".j-consign-font").addClass("guide-doing-font");//高亮放大当前状态文字
					break;
				case 4://安检
					var QRCodeli = self.$el.find("#QRCode");
					self.$el.find(".guide-date-color").removeClass("guide-date-color");//移除高亮样式
					QRCodeli.prev("li").addClass("guide-date-color");//日期时间高亮
					var html = "<div class='guide-circle' style='top: -322px;'><div class='all-icon guide-check-icon guide-icon'></div></div>";
					html += '<div style="top: 53px;position: absolute;" class="all-icon have-been-icon"></div>';//出票已完成图标
					html += '<div style="top: 177px;position: absolute;" class="all-icon have-been-icon"></div>';//预留处已完成图标
					html += '<div style="top: 302px;position: absolute;" class="all-icon have-been-icon"></div>';//值机处已完成图标
					html += '<div style="top: 425px;position: absolute;" class="all-icon have-been-icon"></div>';//托运处已完成图标
					html += '<div style="top: 673px;position: absolute;" class="all-icon have-not-icon"></div>';//登机处未完成图标
					html += '<div style="top: 796px;position: absolute;" class="all-icon have-not-icon"></div>';//到达处未完成图标
					html +='<div style="top: 599px;" class="all-icon item-guide-doing"></div>';//卷边样式定位
					self.$el.find(".guide-circle").remove();
					self.$el.find("ul").append(html);//当前事务图标
					var scrollbar = self.$el.find(".scroll-bar");//滚动条
					scrollbar.css("height","571px");
					$(".grey-scroll-bar").css("height","274px");//灰色滚动条					
					$(".guide-doing-font").removeClass("guide-doing-font");
					$(".j-security-font").addClass("guide-doing-font");//高亮放大当前状态文字
					break;
				case 5://登机
					var boardingli = self.$el.find("#boarding");
					self.$el.find(".guide-date-color").removeClass("guide-date-color");//移除高亮样式
					boardingli.prev("li").addClass("guide-date-color");//日期时间高亮
					var html = "<div class='guide-circle' style='top: -198px;'><div class='all-icon guide-boarding-icon guide-icon'></div></div>";
					html += '<div style="top: 53px;position: absolute;" class="all-icon have-been-icon"></div>';//出票已完成图标
					html += '<div style="top: 177px;position: absolute;" class="all-icon have-been-icon"></div>';//预留处已完成图标
					html += '<div style="top: 302px;position: absolute;" class="all-icon have-been-icon"></div>';//值机处已完成图标
					html += '<div style="top: 425px;position: absolute;" class="all-icon have-been-icon"></div>';//托运处已经完成图标
					html += '<div style="top: 549px;position: absolute;" class="all-icon have-been-icon"></div>';//安检已完成图标
					html += '<div style="top: 796px;position: absolute;" class="all-icon have-not-icon"></div>';//到达处未完成图标
					html +='<div style="top: 723px;" class="all-icon item-guide-doing"></div>';//卷边样式定位
					self.$el.find(".guide-circle").remove();
					self.$el.find("ul").append(html);//当前事务图标
					var scrollbar = self.$el.find(".scroll-bar");//滚动条
					scrollbar.css("height","694px");
					$(".grey-scroll-bar").css("height","151px");//灰色滚动条
					$(".guide-doing-font").removeClass("guide-doing-font");
					$(".j-goboarding-font").addClass("guide-doing-font");//高亮放大当前状态文字
					break;
				case 6://到达
					var arriveli = self.$el.find("#arrive");
					self.$el.find(".guide-date-color").removeClass("guide-date-color");//移除高亮样式
					arriveli.prev("li").addClass("guide-date-color");//日期时间高亮
					var html = "<div class='guide-circle' style='top: -74px;'><div class='all-icon guide-arrive-icon guide-icon'></div></div>";
					html += '<div style="top: 53px;position: absolute;" class="all-icon have-been-icon"></div>';//出票已完成图标
					html += '<div style="top: 177px;position: absolute;" class="all-icon have-been-icon"></div>';//预留处已完成图标
					html += '<div style="top: 302px;position: absolute;" class="all-icon have-been-icon"></div>';//值机处已完成图标
					html += '<div style="top: 425px;position: absolute;" class="all-icon have-been-icon"></div>';//托运处已经完成图标
					html += '<div style="top: 549px;position: absolute;" class="all-icon have-been-icon"></div>';//安检已完成图标
					html += '<div style="top: 673px;position: absolute;" class="all-icon have-been-icon"></div>';//登机处已完成图标
					html +='<div style="top: 847px;" class="all-icon item-guide-doing"></div>';//卷边样式定位
					self.$el.find(".guide-circle").remove();
					self.$el.find("ul").append(html);//当前事务图标
					var scrollbar = self.$el.find(".scroll-bar");//滚动条
					scrollbar.css("height","818px");
					$(".grey-scroll-bar").css("height","27px");//灰色滚动条
					$(".guide-doing-font").removeClass("guide-doing-font");
					$(".j-arrive-font").addClass("guide-doing-font");//高亮放大当前状态文字
					break;
				default:
					break;
			}
		},
		/**
		 * 安检二维码
		 */
		showQRCode:function(){
			var self = this;
			self.jumpTo("forward/qRCode");
		},
		/**
		 * 机票详情
		 */
		flightdetails:function(e){
			var self = this;
			var ropenid = self.store.getOpenId();
			var target = $(e.target);
			var couponId = target.attr("couponId");
			var query = {
				    "rpid":"2002",
				    "ropenid":ropenid,
				    "version":"1.0",
				    "rip":"127.0.0.1",
				    "rpara":{
				        "couponId":couponId,
				    }
				};
			self.utils.showMessage("",'',self.sgClient);
			self.sgClient.post(query,'',function(_data){			
				if(_data && _data.code == 0){//查询成功
					var TicketDetail = _data.rsp;
					self.addCache("TicketDetail",TicketDetail);
					self.jumpTo("forward/flightdetails");
				}else if(_data.code != 0){//查询失败
					self.utils.showAlert({text:(_data.msg)});
				}
				self.utils.hideMessage();
			},"json");
		},
		/**
		 * 预选座位图
		 */
		seatselection:function(){
			var self = this;
			var ropenid = self.store.getOpenId();
			var airCode = self.params.guideRsp.airCode;
			var fltNumber= self.params.guideRsp.fltNumber;
			var flightNum = airCode+fltNumber;
			var query = {
				    "rpid": "3002",
				    "ropenid": ropenid,
				    "version": "1.0",
				    "rip":"127.0.0.1",
				    "rpara": {
				    "flightNum": flightNum,
				    "pnr": self.params.guideRsp.pnr,
				    "ticketDate": self.params.guideRsp.deDate,
				    "depAirportCode": self.params.guideRsp.deCode,
				    "arrAirportCode": self.params.guideRsp.arCode,
				    "ffpOption": self.params.guideRsp.ffpOption,
				    "passengerType": self.params.guideRsp.passengerType,
				    "classOfService":self.params.guideRsp.cabin
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
						self.getPNRtravler("1");//获取同PNR旅客	
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
						self.getPNRtravler("1");//获取同PNR旅客	
				}else if(_data.code != 0){//查询失败
					self.utils.showAlert({text:(_data.msg)});
					self.utils.hideMessage();
				}
			},"json");
			};	
		},
		/**
		 * 同pnr旅客
		 */
		getPNRtravler:function(operating){
			var self = this;
			self.params.operating = operating;
			var ropenid = self.store.getOpenId();
			var query = {
				    "rpid": "3009",
				    "ropenid": ropenid,
				    "version": "1.0",
				    "rip":"127.0.0.1",
				    "rpara": {
				    "certNo": self.params.guideRsp.idNumber,
				    "certType": self.params.guideRsp.idType,
				    "pnrNo": self.params.guideRsp.pnr,
				    "flightDate": self.params.guideRsp.deDate,
				    "flightTime": self.params.guideRsp.deTime,
				    "flightNo": self.params.guideRsp.opAirFltNumber,
				    "formCity": self.params.guideRsp.deCode,
				    "toCity": self.params.guideRsp.arCode,
				    "flightInit": self.params.guideRsp.couponNumber
				    }
				};
			self.sgClient.post(query,'',function(_data){					
				if(_data && _data.code == 0){//查询成功
					var pnrTraList = _data.rsp;
					self.addCache("pnrTraList",_data);
					self.jumpTo("forward/myseatmap");
			}else if(_data.code != 0){//查询失败
				self.addCache("pnrTraList",_data);
				self.jumpTo("forward/myseatmap");
			}
		},"json");
		},
		/**
		 * 推荐座位
		 */
		getRecommendSeat:function(operating){
			var self = this;
			var ropenid = self.store.getOpenId();
			self.params.operating = operating;
			var airCode = self.params.guideRsp.airCode;
			var fltNumber= self.params.guideRsp.fltNumber;
			var flightNum = airCode+fltNumber;
			var query = {
				    "rpid": "3001",
				    "ropenid": ropenid,
				    "version": "1.0",
				    "rip":"127.0.0.1",
				    "rpara": {
				    "paxInfo": {
				    	"idCard":self.params.guideRsp.idNumber,
				    	"etCode":self.params.guideRsp.ticketNo	,
				    },
				    "fltInfo":{
				    	"AirLine":self.params.guideRsp.airCode,
				    	"FltNbr":self.params.guideRsp.fltNumber,
				    	"AirCrftType":self.params.guideRsp.planeType,
				    	"AirCrftMDL":self.params.guideRsp.childPlaneType,
				    	"Class":self.params.guideRsp.mainCabin,
				    },
				    "passengerName": self.params.guideRsp.passengerName,
				    "flightNum": flightNum,
				    "pnr": self.params.guideRsp.pnr,
				    "ticketDate": self.params.guideRsp.deDate,
				    "depAirportCode": self.params.guideRsp.deCode,
				    "operating": "1",
				    "arrAirportCode": self.params.guideRsp.arCode,
				    "ffpOption": self.params.guideRsp.ffpOption,
				    "passengerType":self.params.guideRsp.passengerType,
				    "classOfService":self.params.guideRsp.cabin
				    }
				};
			self.sgClient.post(query,'',function(_data){					
				if(_data && _data.code == 0){//查询成功
					self.addCache("RecommendSeat",_data);
					self.jumpTo("forward/myseatmap");
			}else if(_data.code != 0){//查询失败
				self.addCache("RecommendSeat",_data);
				self.jumpTo("forward/myseatmap");
			}
				self.utils.hideMessage();
		},"json");
		},
		/**
		 * 取消预留
		 */
		cancelPrimary:function(){
			var self = this;
			var ropenid = self.store.getOpenId();
			var airCode = self.params.guideRsp.airCode;
			var fltNumber = self.params.guideRsp.fltNumber;
			var flightNo = airCode + fltNumber;
			var flightDate = self.params.guideRsp.deDate +" "+self.params.guideRsp.deTime;
			var seatNo = self.params.guideRsp.selectSeatId;
			var passengerList = [];
			passengerList[0] = {
					"passengerName":self.params.guideRsp.passengerName,
					"passengerMark":"0",
					"seatNum":seatNo,
					"certId":self.params.guideRsp.idNumber,
					"ticketNum":self.params.guideRsp.ticketNo,
					"certType":self.params.guideRsp.idType,
					"pnrNo":self.params.guideRsp.pnr
			};
			self.utils.showAlert({text:"您将取消航班"+flightNo+"，座位"+seatNo+"",title:"取消预留座位",onOK:function(){
				var query = {
					    "rpid": "3004",
					    "ropenid": ropenid,
					    "version": "1.0",
					    "rip": "127.0.0.1",
					    "rpara": {
					        "flightNo": flightNo, 
					        "phoneNO": "",
					        "flightDate": flightDate, 
					        "depAirportCode": self.params.guideRsp.deCode,
					        "arrAirportCode": self.params.guideRsp.arCode,
					        "arrDate": self.params.guideRsp.adate,
					        "arrTime": self.params.guideRsp.atime,
					        "depDate": self.params.guideRsp.deDate,
					        "depTime": self.params.guideRsp.deTime,
					        "carrierFlightNo": self.params.guideRsp.opAirFltNumber,
					        "couponNum": self.params.guideRsp.couponNumber,
					        "passengerList": passengerList,
					        }
					};
				self.utils.showMessage("",'',self.sgClient);
				self.sgClient.post(query,'',function(_data){			
					if(_data && _data.code == 0){//成功
						var checkinSeat = _data.rsp;
						self.utils.showAlert({text:"取消预留座位成功"});
					}else if(_data.code != 0){//失败
						self.utils.showAlert({text:(_data.msg)});
					}
					self.utils.hideMessage();
				},"json");
			},onCancel:function(){
				return false;
			}});
		}
	});
	return FlightGuide;
});