define(['jquery','underscore','backbone','SGView','text!templates/early_flightInfoList.html'],
function($,_,Backbone,SGView,viewtTpl){
	var EarlyFlightInfoList = SGView.extend({
		pageId:'flight_list',
		template:_.template(viewtTpl),
		render:function(){
			var self = this;
			this.$el.empty();
//			self.$el.addClass('login-bg ui-page-active');
			this.$el.attr('class','ui-page-active ui-page ui-page-theme-g');
			
			var rsp = self.currentTrip();//当前航班
			var hisrsp = self.HistTrip();
//			var hisrsp = self.getCache("hisCache");
			self.$el.append(self.template({lang:self.lang,data:rsp.couponList,coupon_num:rsp.coupon_num,hisrsp:hisrsp.yearCouponList}));
			self.$el.on('pageshow',function(){ 
				$("#wrapper").height(document.body.clientHeight - $("#wrapper").position().top);
				self.initScroll("wrapper");
			}); 
			return this;
		},
		events: {
			"click .journey_tab li": "TabChange",
			"click .item-content" : "flightGuide",
			"click #addcard" : "addcard",
			"click #textajax" : "textajax",
			"click #authentication" : "authentication",
			"click .history-left" : "historyleft",
			"click .history-right" : "historyright",
			"click .item-history" : "historydetails",
		},
		/*
		 * 飞行历史年份减一
		 */
		historyleft:function(){
			var self = this;
			var year = self.$el.find(".history-year");
			var oldyear = parseInt(year.text());
			year.text(oldyear-1);
		},
		/*
		 * 飞行历史年份加一
		 */
		historyright:function(){
			var self = this;
			var date=new Date;
			var nowyear = date.getFullYear();
			var year = self.$el.find(".history-year");
			var oldyear = parseInt(year.text());
			if(oldyear < nowyear){
				year.text(oldyear+1);
			}
		},
		/*
		 * 加到卡包
		 */
		addcard:function(){
			//TODO
		},
		/*
		 * 当前航班
		 */
		currentTrip:function(){
			var self = this;
			var _query = {//请求参数
				    "rpid":"2000001",
				    "ropenid":"001",
				    "version":"1.0",
				    "rip":"122.119.111.51",
				    "rpara":{ }
			};
			var rsp = {};
//			self.sgClient.post(_query,'',function(_data){
			    var aaa;
				var _data = {
				    "code":0,
				    "msg":"success",
				    "rsp":{
				        
				    "coupon_num": "2",
				        
				    "couponList": [
				            
				        {
				                
				            "air_scn_num": "国航CA1326",
				                
				            "de_city": "北京",
				                
				            "de_name_ter": "首都T3",
				                
				            "de_date_week": "08/10/周一",
				                
				            "de_time": "06: 30",
				                
				            "ar_city": "广州",
				                
				            "ar_name_ter": "白云机场",
				                
				            "ar_time": "10: 00",
				                
				            "couponId": "23432432432",
				                
				            "tripContext": "距起飞还有2小时, 请前去托运行李"
				        
				            },
				            
				        {
				                
				            "air_scn_num": "南方航空CZ2334",
				                
				            "de_city": "北京",
				                
				            "de_name_ter": "首都T2",
				                
				            "de_date_week": "08/15/周六",
				                
				            "de_time": "14: 35",
				                
				            "ar_city": "上海",
				                
				            "ar_name_ter": "浦发机场",
				                
				            "ar_time": "17: 30",
				                
				            "couponId": "23423432432",
				                
				            "tripContext": "出票成功, 快去抢占好座位吧"
				        
				            }
				    
				        ]

				    }
				};
				if(_data && _data.code == 0){//查询成功
					rsp = _data.rsp;
					self.addCache("currentTripRsp",rsp);
					
				}else if(_data_data.code != 0){//查询失败
					self.utils.showAlert({text:(_data.msg)});
				}
				self.utils.hideMessage();
				return rsp;
//			},"json");
		},
		/*
		 * 飞行历史
		 */
		HistTrip:function(){
			var self = this;
			var _query = {
				    "rpid":"2000002",
				    "ropenid":"4526948",
				    "version":"1.0",
				    "rip":"127.0.0.1",
				    "rpara":{
				        
				    }
				};
			var rsp = {};
			var _data = {
				    "code":0,
				    "msg":"success",
				    "rsp":{
				        
				    "yearCouponList": [
				            
				        {
				                
				            "year": "2015",
				                
				            "couponList": [
				                    
				                {
				                        
				                    "fltNumber": "CA1345",
				                        
				                    "air_cd": "CA",
				                        
				                    "de_city": "上海",
				                        
				                    "de_date": "2015/04/28",
				                        
				                    "de_time": "14:30",
				                        
				                    "ar_city": "北京",
				                        
				                    "ar_time": "17:00",
				                        
				                    "couponId": "23432432432"
				                
				                    },
				                    
				                {
				                        
				                    "fltNumber": "CA3434",
				                        
				                    "air_cd": "CZ",
				                        
				                    "de_city": "北京",
				                        
				                    "de_date": "2015/04/29",
				                        
				                    "de_time": "08:30",
				                        
				                    "ar_city": "大连",
				                        
				                    "ar_time": "09:40",
				                        
				                    "couponId": "23432432432"
				                
				                    },
				                    
				                {
				                        
				                    "fltNumber": "CA3434",
				                        
				                    "air_cd": "HU",
				                        
				                    "de_city": "南京",
				                        
				                    "de_date": "2015/06/11",
				                        
				                    "de_time": "09:30",
				                        
				                    "ar_city": "兰州",
				                        
				                    "ar_time": "10:55",
				                        
				                    "couponId": "23432432432"
				                
				                    }
				            
				                ]
				        
				            },
				            
				        {
				                
				            "year": "2014",
				                
				            "couponList": ""
				        
				            }
				    
				        ]

				    }
				};
			if(_data && _data.code == 0){//查询成功
				rsp = _data.rsp;
				self.addCache("hisCache",rsp);
				
			}else if(_data_data.code != 0){//查询失败
				self.utils.showAlert({text:(_data.msg)});
			}
			self.utils.hideMessage();
			return rsp;
		},
		/**
		 * 初始化滚轮
		 */
		initIScroll:function(wrapper){
			this.myScroll = new iScroll(wrapper);
		},
		/**
		 * 切换当前航班、飞行历史
		 */
		TabChange:function(e){
			var self = this,
            curli = $(e.currentTarget),
            _journeyType = curli.data("journey"),
			tabItems = self.$el.find(".journey_tab li"),
			myflightTab = self.$el.find("#myflight"),
			historyflightTab = self.$el.find("#historyflight");
			tabItems.removeClass('journeyTabCrt');
			tabItems.filter("[data-journey='" + _journeyType + "']").addClass("journeyTabCrt")
			switch(_journeyType){
            case 1://当前航班
            	
            	historyflightTab.addClass('hideTab');
            	myflightTab.removeClass('hideTab');            	
            	break;
            case 2://飞行历史
//            	var currentTripRsp = self.getCache("currentTripRsp");
//            	var hisrsp = self.HistTrip();
//            	self.$el.append(self.template({lang:self.lang,data:currentTripRsp.couponList,coupon_num:currentTripRsp.coupon_num,hisrsp:hisrsp}));
            	$("#wrapperHistory").height(document.body.clientHeight - $("#wrapperHistory").position().top);
				self.initScroll("wrapperHistory");
				
            	myflightTab.addClass('hideTab');
            	historyflightTab.removeClass('hideTab');
            	
            	break;
        }
		}, 
		/**
		 * 行程轨迹页面
		 */
		flightGuide:function(e){
			var self = this;
			var target = $(e.target);
			if(target[0].tagName!="LI"){
				target = target.parents("LI");
			}
			var couponId = target.attr("couponId");
			var _query = {
				    "rpid":"2002",
				    "ropenid":"4526948",
				    "version":"1.0",
				    "rip":"127.0.0.1",
				    "rpara":{
				        "couponId":"232793EC568B3699E0530657060AA629"
				    }
				};
			self.utils.showMessage("",'',self.sgClient);
			self.sgClient.post(_query,'',function(_data){			
				if(_data && _data.code == 0){//查询成功
					var TripTrail = JSON.parse(_data.rsp);
					self.addCache("TripTrail",TripTrail);
					self.jumpTo("forward/flightguide");
				}else if(_data.code != 0){//查询失败
					self.utils.showAlert({text:(_data.msg)});
				}
				self.utils.hideMessage();
			},"json");
		},
		/*
		 * 历史航班详情
		 */
		historydetails:function(e){
			var self = this;
			var target = $(e.target);
			var couponId = target.attr("couponId");
			var query = {
				    "rpid":"2003",
				    "ropenid":"4526948",
				    "version":"1.0",
				    "rip":"127.0.0.1",
				    "rpara":{
				        "couponId":"17E2DEE7140445899F7F0F73F1220E8D",
				    }
				};
			self.utils.showMessage("",'',self.sgClient);
			self.sgClient.post(query,'',function(_data){			
				if(_data && _data.code == 0){//查询成功
					var TicketDetail = JSON.parse(_data.rsp);
					self.addCache("TicketDetail",TicketDetail);
					self.jumpTo("forward/flightdetails");
				}else if(_data.code != 0){//查询失败
					self.utils.showAlert({text:(_data.msg)});
				}
				self.utils.hideMessage();
			},"json");
		},
		/*
		 * 实名认证
		 */
		authentication:function(){
			this.jumpTo("forward/authentication");
		},
		/**
		 * 返回
		 */
		back:function(){
			this.jumpTo("back/flightsearch");
		}
	});
	return EarlyFlightInfoList;
});