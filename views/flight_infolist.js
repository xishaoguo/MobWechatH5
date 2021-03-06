define(['jquery','underscore','backbone','SGView','text!templates/flight_infolist.html'],
function($,_,Backbone,SGView,viewtTpl){
	var FlightInfoList = SGView.extend({
		pageId:'flight_list',
		template:_.template(viewtTpl),
		render:function(){
			var self = this;
			this.$el.empty();
			this.$el.attr('class','ui-page-active ui-page ui-page-theme-g');
//			var myFlightInfo = self.getCache("myFlightInfo");
			self.$el.append(self.template({lang:self.lang,data:self.params.myFlightInfo,othersFlightInfo:self.params.othersFlightInfo}));
			setTimeout(function(){
				$("#wrapper").height(document.body.clientHeight - $("#wrapper").position().top);
				self.initScroll("wrapper");
			},300);
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
            case 1://本人航班
            	
            	historyflightTab.addClass('hideTab');
            	myflightTab.removeClass('hideTab'); 
            	self.params.mySeatType = 1;
            	break;
            case 2://同行人
            	$("#wrapperHistory").height(document.body.clientHeight - $("#wrapperHistory").position().top);
				self.initScroll("wrapperHistory");
				
            	myflightTab.addClass('hideTab');
            	historyflightTab.removeClass('hideTab');
            	self.params.mySeatType = 2;
            	break;
        }
		}, 
		/**
		 * 行程轨迹页面
		 */
		flightGuide:function(e){
			var self = this;
			var ropenid = self.store.getOpenId();
			var target = $(e.target);
			var liIndex = target.parent('li').index();//当前被点击的票面数组位置
			if(self.params.mySeatType == 1){
				self.params.nowMyFlightInfo = self.params.myFlightInfo[liIndex];//将当前被点击票面信息放入参数集
			}else{
				self.params.nowMyFlightInfo = self.params.othersFlightInfo[liIndex];//将当前被点击票面信息放入参数集
			}
			if(target[0].tagName!="LI"){
				target = target.parents("LI");
			}
			var couponId = target.attr("couponId");
			var _query = {
				    "rpid":"2001",
				    "ropenid":ropenid,
				    "version":"1.0",
				    "rip":"127.0.0.1",
				    "rpara":{
				        "couponId":couponId
				    }
				};
			self.utils.showMessage("",'',self.sgClient);
			self.sgClient.post(_query,'',function(_data){			
				if(_data && _data.code == 0){//查询成功
					var TripTrail = _data.rsp;
					self.params.guideRsp = TripTrail;
					self.addCache("TripTrail",TripTrail);
					self.jumpTo("forward/flightguide");
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
		}
	});
	return FlightInfoList;
});