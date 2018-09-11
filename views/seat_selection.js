define(['jquery','underscore','backbone','SGView','text!templates/seat_selection.html','SeatCharts'],
function($,_,Backbone,SGView,viewtTpl){
	var SeatSelection = SGView.extend({
		pageId:'flight_search',
		template:_.template(viewtTpl),
		recommendedSeat:[],//推荐座位
		map:[],//座位图
		unavailable:[],//已占用的座位
		columns:[],//座位列名
		rows:[],//座位行名
		exit:[],//安全出口所在位置
		locked:[],//已锁座位
		price:[],//付费座位
		nowindex:"1",
		sc:new Object(),
		render:function(){
			var self = this;
			this.$el.empty();
			self.recommendedSeat = [];//清空推荐座位
			var pnrTraList = self.getCache("pnrTraList");//获取pnr旅客
			var RecommendSeat = self.getCache("RecommendSeat");//获取推荐座位
			var priceList = self.getCache("checkinSeat").priceList;
			self.$el.append(self.template({lang:self.lang,data:self.recommendedSeat,pnrTraList:pnrTraList,RecommendSeat:RecommendSeat,name:self.params.nowTicket.passengerName,operating:self.params.operating,priceList:priceList}));
			this.$el.attr('class','ui-page-active ui-page seat-background-color');
			self.map = [];//清空座位图
			self.unavailable = [];//清空已占座位列表
			self.exit = [];//清空安全出口
			self.columns = [];//座位列名
			self.rows = [];//座位行名
			self.price = [];//清空付费座位
			self.$el.on('pageshow',function(){ 
				$("#wrapper").height(document.body.clientHeight - $("#wrapper").position().top - 48);
//				$("#wrapper").width(document.body.clientWidth);
				self.initScroll( "wrapper");
			}); 
			if(RecommendSeat!=null){
			if(RecommendSeat.code==0 && RecommendSeat.rsp.seatInfo!=null && RecommendSeat.rsp.seatInfo!=""){
				if(RecommendSeat.rsp.seatInfo.seatNum!=null && RecommendSeat.rsp.seatInfo.seatNum!=""){
					self.recommendedSeat.push(RecommendSeat.rsp.seatInfo.seatNum);
					this.showRecommendedSeat();//显示推荐座位框
				}
				
			}
			}
			this.initSeatMap();//初始化座位图
			this.AppendExit();//向座位图添加安全出口
			if(RecommendSeat!=null){
			if(RecommendSeat.code==0 && RecommendSeat.rsp.seatInfo!=null && RecommendSeat.rsp.seatInfo!=""){
				if(RecommendSeat.rsp.seatInfo.seatNum!=null && RecommendSeat.rsp.seatInfo.seatNum!=""){
					setTimeout(function(){self.appendSeatNum();},300);//拼装推荐座位用户序号
				}
			}
			}
			setTimeout(function(){self.appendTopHeader();},300);//拼装顶部座位号
			setTimeout(function(){self.initManuallyAdd();},300);//手动添加同行人
			setTimeout(function(){self.greyButton();},300);
			return this;
		},
		events: {
			"click .j-PrimarySeatSelect": "PrimarySeatSelect",
			"click .floor-button-circle": "Upperandlower",
			"click .recommend-window": "hideWindow",
			"click .fork-icon": "removeUser",
			"click .j-notadded": "addReperson",
			"click .select-head-portrait": "switchHead",
			"click .j-Check-in": "doCheckin",
			"click .add-together-button": "addtogether",
		},
		/*
		 * 置灰选座按钮
		 */
		greyButton:function(){
			var self = this;
			if(self.utils.trim($("#seatnumber").text().replace(/ /g, ""))==""){
				if(self.params.operating==1){//预选座
					$(".button").removeClass("j-PrimarySeatSelect").addClass("grey-button");
				}else{//值机
					$(".button").removeClass("j-Check-in").addClass("grey-button");
				}
			}
		},
		/*
		 * 恢复选座按钮
		 */
		recoveryButton:function(){
			var self = this;
			if(self.params.operating==1){
				$(".button").removeClass("grey-button").addClass("j-PrimarySeatSelect");
			}else{
				$(".button").removeClass("grey-button").addClass("j-Check-in");
			}
		},
		/*
		 * 置灰添加同行人按钮
		 */
		greyAddTogetherButton:function(){
			$(".add-together-button").removeClass("add-together-button").addClasss("grey-add-together-button");
			$(".add-together-font").addClass("grey-font");
		},
		/*
		 * 恢复同行人按钮
		 */
		recovery:function(){
			$(".grey-add-together-button").removeClass(".grey-add-together-button").addClass("add-together-button");
			$(".add-together-font").removeClass("grey-font");
		},
		/**
		 * 拼装顶部座位号
		 */
		appendTopHeader:function(){
			var self = this;
			var html = $('.seatCharts-header').html();
			$('.seatCharts-top-header').append(html);
			$('.seatCharts-header').hide();//隐藏原座位图行号
		},
		/**
		 * 预定座位
		 */
		PrimarySeatSelect:function(){
			var self = this;
			var ropenid = self.store.getOpenId();
			var pnrNo = self.params.nowTicket.pnr;
			var certType = "NI";
			if(self.params.certType!="0"){
				certType = "PP";
			}
			var cabin = self.params.nowTicket.mainCabin;;
			var phoneNO = "";
			var airCd = self.params.nowTicket.airCd;
			var fltNumber = self.params.nowTicket.fltNumber;
			var flightNo = airCd+fltNumber;
			var depAirportCode = self.params.nowTicket.deCode;
			var arrAirportCode = self.params.nowTicket.arCode;
			var arrDate = self.params.nowTicket.arDate;
			var arrTime = self.params.nowTicket.arTime;
			var depDate = self.params.nowTicket.deDate;
			var depTime = self.params.nowTicket.deTime;
			var flightDate = depDate+" "+depTime;
			var carrierFlightNo = self.params.nowTicket.opAirCodeFltNumber;
			var couponNum = self.params.nowTicket.couponNumber;
			var userInfoList = $('#headList').children('li');
			var passengerList = [];
			passengerList[0] = {//本人选座信息
					"passengerName":self.params.nowTicket.passengerName,
					"passengerMark":"0",
					"seatNum":userInfoList.eq(0).attr("seatNum"),
					"cardNo":self.params.nowTicket.ffNumber,
					"recommendSeat":"",
					"certId":self.params.nowTicket.idNumber,
					"ticketNum":self.params.nowTicket.ticketNumber,
					"certType":certType,
					"pnrNo":pnrNo
			};
			for(var i=1;i< userInfoList.length;i++){
				if(userInfoList.eq(i).attr("seatNum")!=""){
					passengerList[i] = {
							"passengerName":userInfoList.eq(i).attr("passengerName"),
							"passengerMark":"1",
							"seatNum":userInfoList.eq(i).attr("seatNum"),
							"cardNo":"",
							"recommendSeat":"",
							"certId":userInfoList.eq(i).attr("certNo"),
							"ticketNum":userInfoList.eq(i).attr("ticketNum"),
							"certType":userInfoList.eq(i).attr("certType"),
							"pnrNo":userInfoList.eq(i).attr("pnrNo"),
					}
				}
			}
			var query = {
				    "rpid": "3003",
				    "ropenid": ropenid,
				    "version": "1.0",
				    "rip": "127.0.0.1",
				    "rpara": {				        			        
				        "flightDate": flightDate,				        
				        "cabin": cabin,				        
				        "phoneNO": phoneNO,				        
				        "flightNo": flightNo,			        
				        "depAirportCode": depAirportCode,				        
				        "arrAirportCode": arrAirportCode,				        
				        "arrDate": arrDate,				        
				        "arrTime": arrTime,				        
				        "depDate": depDate,				        
				        "depTime": depTime,				        
				        "carrierFlightNo": carrierFlightNo,				        
				        "couponNum": couponNum,				        
				        "passengerList": passengerList
				    }
				};
			self.utils.showMessage("",'',self.sgClient);
			self.sgClient.post(query,'',function(_data){			
				if(_data && _data.code == 0){//查询成功
					var PrimaryRsp = _data.rsp;
					self.addCache("PrimaryRsp",PrimaryRsp);
					self.jumpTo("forward/primaryseatdetails");
				}else{//失败
					self.utils.showAlert({text:(_data.msg)});
				}
				self.utils.hideMessage();
			},"json");		
		},
		/*
		 * 确定值机
		 */
		doCheckin:function(){
			var self = this;
			var ropenid = self.store.getOpenId();
			var certType = "NI";
			if(self.params.certType!="0"){
				certType = "PP";
			}
			var flightDate = self.params.nowTicket.deDate;
			var airCd = self.params.nowTicket.airCd;
			var fltNumber = self.params.nowTicket.fltNumber;
			var flightNo = airCd+fltNumber;
			var fromCity = self.params.nowTicket.deCode;
			var toCity = self.params.nowTicket.arCode;
			var tourIndex = self.params.nowTicket.couponNumber;
			var flightClass = self.params.nowTicket.mainCabin;
			var phoneNo = "";
			var arrDate = self.params.nowTicket.arDate;
			var depTime = self.params.nowTicket.deTime;
			var arrTime = self.params.nowTicket.arTime;
			var actualFlyDate = self.params.nowTicket.deDate;
			var carrierFlightNo = self.params.nowTicket.opAirCodeFltNumber;
			var userInfoList = $('#headList').children('li');
			var passengerList = [];
			passengerList[0] = {
					"seatNo": userInfoList.eq(0).attr("seatNum"),
	                "isSNR": "",
	                "cardID": self.params.nowTicket.ffNumber,
	                "passengerName": self.params.nowTicket.passengerName,
	                "cardAirLine": "",
	                "etCode": self.params.nowTicket.ticketNumber,
	                "asrSeatNo": "",
	                "gender": "",
	                "certNo": self.params.nowTicket.idNumber,
	                "passengerMark": "0",
	                "recommendSeat": "",
	                "certType": certType
			};
			for(var i=1;i< userInfoList.length;i++){
				if(userInfoList.eq(i).attr("seatNum")!=""){
					passengerList[i] = {
							"seatNo":userInfoList.eq(i).attr("seatNum"),
							"isSNR": "",
			                "cardID": "",
							"passengerName":userInfoList.eq(i).attr("passengerName"),
							"cardAirLine": "",
			                "etCode": userInfoList.eq(i).attr("ticketNum"),
			                "asrSeatNo": "",
			                "gender": "",
			                "certNo": userInfoList.eq(i).attr("certNo"),
			                "passengerMark": "1",
			                "recommendSeat": "",
			                "certType": userInfoList.eq(i).attr("certType"),
					}
				}
			}
			var query = {
				    "rpid": "3007",
				    "ropenid": ropenid,
				    "version": "1.0",
				    "rip": "127.0.0.1",
				    "rpara": {				        
				        "flightDate": flightDate,				        
				        "flightNo": flightNo,				        
				        "fromCity": fromCity,				        
				        "toCity": toCity,				        
				        "tourIndex": tourIndex,			        
				        "flightClass": flightClass,				        
				        "reissue": null,				        
				        "phoneNo": phoneNo,				        
				        "arrDate": arrDate,				        
				        "depTime": depTime,				        
				        "arrTime": arrTime,				        
				        "actualFlyDate": actualFlyDate,				        
				        "carrierFlightNo": carrierFlightNo,				        
				        "passengerList": passengerList
				    }
				};
			self.utils.showMessage("",'',self.sgClient);
			self.sgClient.post(query,'',function(_data){			
				if(_data && _data.code == 0){//查询成功
					var CheckInRsp = _data.rsp;
					self.addCache("CheckInRsp",CheckInRsp);
					self.jumpTo("forward/seatselectiondetails");
				}else{//失败
					self.utils.showAlert({text:(_data.msg)});
				}
				self.utils.hideMessage();
			},"json");		
		},
		/**
		 * 初始化滚轮
		 */
		initIScroll:function(){
			this.myScroll = new iScroll("wrapper");
		},
		/**
		 * 获取滚轮高度
		 */
		getScrollHeight:function(){
			var bodyHeight = document.body.clientHeight;
			//此处减去头部高度
			var scrollHeight = bodyHeight-44;
			var footerHeight = self.$el.find('.footer').height();
			scrollHeight = scrollHeight - footerHeight;
			
			return scrollHeight;
		},	
		/*
		 * 获取座位图
		 */
		getSeatData:function(){
			var self = this;
			var checkinSeat = self.getCache("checkinSeat");//从后台查的
			var seatData = checkinSeat.seatDataL;//下层座位
			for(var i = 0;i<seatData.length;i++){//遍历建立座位图模型
				var row = seatData[i];
				if(row[0].seatRow == '-1'){//-1为安全出口排
					self.exit.push(i);
				}else{
					self.map.push('');
					self.rows.push(row[0].seatRow);//行名
				
				for(var j = 0;j<row.length;j++){
					var count = self.map.length-1;
					if(row[j].seatRow != '-1'){
						if(self.columns.length<checkinSeat.lineNum){
							self.columns.push(row[j].seatColumn);//列名
						}
						
					if(row[j].seatStatus=='*'){//可选
						self.map[count]+='y';
					}else if(row[j].seatStatus=='!' || row[j].seatStatus=='.'){//占用
						self.map[count]+='y';
						self.unavailable.push(row[j].seatRow + row[j].seatColumn);
					}else if(row[j].seatStatus=='X'){
						self.map[count]+='y';
						self.locked.push(row[j].seatRow + row[j].seatColumn);
					}else if(row[j].seatStatus=='=' || row[j].seatStatus=='E' || row[j].seatStatus==' ' || row[j].seatStatus=='N'){//过道
						self.map[count]+='_';
					}else if(row[j].seatStatus=='$'){//付费
						self.map[count]+='y';
						self.price.push(row[j].seatRow + row[j].seatColumn);
					}
				}
				}
				}
			}
			return self.map;
		},
		/**
		 * 初始化座位图
		 */
		initSeatMap:function(){
			var firstSeatLabel = 1;
			var self = this;
            self.getSeatData();//获取座位图
//			$(document).ready(function() {
//				var $cart = self.$el.find('#selected-seats'),
				var $seatnumber = self.$el.find('#seatnumber');
//					$counter = self.$el.find('#counter'),
//					$total = self.$el.find('#total'),
					self.sc = self.$el.find('#seat-map').seatCharts({
                    map: self.map,
					seats: {
						f: {
							price   : 100,
							classes : 'first-class', //your custom CSS class
							category: '头等舱'
						},
						y: {
							price   : 40,
							classes : 'economy-class', //your custom CSS class
							category: 'Y'
						}					
					
					},
					naming : {
						columns: self.columns,
						rows: self.rows,
//						top : false,
						getLabel : function (character, row, column) {
							return column;
						},
					},
					legend : {
						node : $('#legend'),
					    items : [
							[ 'f', 'available',   '头等舱' ],
							[ 'y', 'available',   'Y'],
							[ 'y', 'unavailable', '已预定'],
							[ 'y', 'recommended', '推荐']
							['y','locked','已锁']
					    ]					
					},
					click: function () {
						var fdsfd = this.status();
						if (this.status() == 'available') {
							var dd = this.data().category;
							/* $('<li>'+this.data().category+this.settings.label+'号座位'+'：<br/>价格：<b>$'+this.data().price+'</b> <a href="#" class="cancel-cart-item">[删除]</a></li>') */
//							$('<div class="seatCharts-number"><li class="seatCharts-number-font">座位号：'+this.settings.id+'</li></div>')
//								.attr('id','cart-item-'+this.settings.id)
//								.data('seatId', this.settings.id)
//								.appendTo($cart);
							var seatNum = self.utils.trim($seatnumber.text().replace(/ /g, ""));
							
							if(seatNum !=""){//清除已选座位
							if(self.nowindex==$('#'+seatNum).children('.usernum').text()){//如果当前操作用户编号等于被点击座位所属旅客编号
								self.$el.find('#'+seatNum).removeClass('unavailable').removeClass('recommended').removeClass('selected').addClass('available').attr('aria-checked','false');
								self.sc.get([seatNum]).status('available');
								self.$el.find('.selected-head-portrait').parent('li').attr('seatNum',"");//清除头像li座位号属性
								$('#'+seatNum).children('.usernum').remove();//清掉座位用户编号
							}
							//当头像切换的时候清掉之前选的座位
							var usernumList = self.$el.find('.usernum');
							if(usernumList.length>0){
								for(var i=0;i<usernumList.length;i++){//如果该同行人有选座则清除所选座位，恢复可选状态。
									if($(usernumList[i]).text()==self.nowindex){
										$(usernumList[i]).parent().removeClass('unavailable').removeClass('recommended').removeClass('selected').addClass('available').attr('aria-checked','false');
										self.sc.get([$(usernumList[i]).parent().attr("id")]).status('available');
										$(usernumList[i]).remove();//清掉座位用户编号
									}
								}
							}
//							else{
//								var usernumList = self.$el.find('.usernum');
//								if(usernumList.length>0){
//									for(var i=0;i<usernumList.length;i++){//如果该同行人有选座则清除所选座位，恢复可选状态。
//										if(self.$el.find('.usernum').text()==self.nowindex){
//											$(usernumList[i]).parent().removeClass('unavailable').removeClass('recommended').removeClass('selected').addClass('available').attr('aria-checked','false');
//											$(usernumList[i]).remove();//清掉座位用户编号
//											sc.get([$(usernumList[i]).parent().attr("id")]).status('available');
//										}
//									}
//								}
//							}
						}
							$seatnumber.text(this.settings.id);
//							$counter.text(sc.find('selected').length+1);
//							$total.text(recalculateTotal(sc)+this.data().price);
							var userNum = self.$el.find('.selected-head-portrait').parent('li').children('.head-num').text();//当前操作的旅客编号
							self.$el.find('.selected-head-portrait').parent('li').attr('seatNum',this.settings.id);//将选中座位号放入头像li属性中
							var html = '<div class="usernum">'+userNum+'</div>';
							$('#'+this.settings.id).append(html);//拼装编号
							var headList = $('#headList').children('li');
							var userNumList = self.$el.find('.usernum');
							if(headList.length>1 && userNumList.length>1){//当选座人超过一个，将除当前操作人的座位样式置成绿色样式
								for(var i=0;i<userNumList.length;i++){
									if($(userNumList[i]).text()!=self.nowindex){
										$(userNumList[i]).parent().removeClass('unavailable').removeClass('recommended').addClass('selected').attr('aria-checked','false');
										self.sc.get([$(userNumList[i]).parent().attr("id")]).status('selected');
									}
								}
							}
							if(self.utils.trim($seatnumber.text().replace(/ /g, ""))!=""){//如果有选座恢复按钮可选
								self.recoveryButton();
							}else{
								self.greyButton();
							};
							return 'recommended';
							
						} else if (this.status() == 'recommended') {
							//update the counter
//							$counter.text(sc.find('selected').length-1);
							//and total
//							$total.text(recalculateTotal(sc)-this.data().price);
						
							//remove the item from our cart
//							$('#cart-item-'+this.settings.id).remove();
							
							$seatnumber.text("");
							if(self.nowindex==$('#'+this.settings.id).children('.usernum').text()){//如果当前操作用户编号等于被点击座位所属旅客编号
								self.$el.find('#'+this.settings.id).removeClass('unavailable').removeClass('recommended').addClass('available').attr('aria-checked','false');
								self.sc.get([this.settings.id]).status('available');
								self.$el.find('.selected-head-portrait').parent('li').attr('seatNum',"");//清除头像li座位号属性
								$('#'+this.settings.id).children('.usernum').remove();//清掉座位用户编号
								if(self.utils.trim($seatnumber.text().replace(/ /g, ""))!=""){//如果有选座恢复按钮可选
									self.recoveryButton();
								}else{//如果未选座置灰按钮
									self.greyButton();
								};
								return 'available';
							}else{
								return this.style();	
							}
						} else if (this.status() == 'unavailable') {
							//seat has been already booked
							return 'unavailable';
						} else if (this.status() == 'price') {//付费
							self.utils.showAlert({text:"此座位为付费座位，需拨打电话预定<br>座位信息："+this.settings.id+"",title:"付费座位电话预定",onOktext:"拨打<a href='tel:95583' style='color: #fff;'>95585</a>",onCanceltext:"再看看",onOK:function(){
								return false;
							},onCancel:function(){
								return false;
							}});
							return this.style();
						} else {
							return this.style();
						}
					}
				});

				//this will handle "[cancel]" link clicks
//				$('#selected-seats').on('click', '.cancel-cart-item', function () {
//					//let's just trigger Click event on the appropriate seat, so we don't have to repeat the logic here
//					sc.get($(this).parents('li:first').data('seatId')).click();
//				});

				//let's pretend some seats have already been booked
				self.sc.get(self.unavailable).status('unavailable');//不可选
				self.sc.get(self.recommendedSeat).status('recommended');//推荐座位
				self.sc.get(self.locked).status('locked');//已锁
				self.sc.get(self.price).status('price');//付费座位
				
//		});

//		function recalculateTotal(sc) {
//			var total = 0;
//		
//			//basically find every selected seat and sum its price
//			sc.find('selected').each(function () {
//				total += this.data().price;
//			});
//			
//			return total;
//		}
		},
		/*
		 * append推荐座位用户序号
		 */
		appendSeatNum:function(){
			var self = this;
			self.$el.find('.selected-head-portrait').parent('li').attr('seatNum',self.recommendedSeat);//将选中座位号放入头像li属性中
			var html = '<div class="usernum">'+"1"+'</div>';
			$('#'+self.recommendedSeat).append(html);//拼装编号
		},
		/*
		 * append安全出口
		 */
		AppendExit:function(){
			var self = this;
			if(self.exit.length>0){
				var seatDivList = self.$el.find("#seat-map");
				var html = '';
				html += '<div style="width:100%;height: 35px;"><ul><li class="Emergency-Exit-leftline"></li><li class="Emergency-Exit-text">紧急出口</li><li class="Emergency-Exit-leftline"></li></ul></div>';
				for(var i = 0;i<self.exit.length;i++){
					$(seatDivList.children()[self.exit[i]+1]).before(html);
				}
			}
		},
		/*
		 * 上下层
		 */
		Upperandlower:function(){
			$('.floor-button-circle').animate({left:'2px'});
//			$('.floor-button-circle').removeClass('left');
//			$('.floor-button-circle').addClass('right');
//			$('.floor-button').text("下层");
		},
		/*
		 * show推荐座位window
		 */
		showRecommendedSeat:function(){
			var self = this;
			if(self.getCache("RecommendSeat").code==0){
			var seatInfo = self.getCache("RecommendSeat").rsp.seatInfo;
			var likeInfo = self.getCache("RecommendSeat").rsp.likeInfo;
			var html = '';
			html += '<div class="recommend-window" style="display:none">';
			html += '<div class="recommend-window-left">';
			html += '<ul>';
			if(self.getCache("RecommendSeat").rsp.seatType=="2"){
				html += '<li class="window-left-title"><div class="recommend-li-div">您已预选座位</div><div class="recommend-num">'+seatInfo.seatNum+'</div></li>';
			}else{
				html += '<li class="window-left-title"><div class="recommend-li-div">为您推荐座位</div><div class="recommend-num">'+seatInfo.seatNum+'</div></li>';
			}
			if(seatInfo.window=="Y"){
				html += '<li class="window-left-li"><div class="window-circle"></div><div class="recommend-window-text">靠窗</div></li>';
			}
			if(seatInfo.frontBack=="F"){
				html += '<li class="window-left-li"><div class="window-circle"></div><div class="recommend-window-text">前排</div></li>';
			}
			if(seatInfo.frontBack=="B"){
				html += '<li class="window-left-li"><div class="window-circle"></div><div class="recommend-window-text">后排</div></li>';
			}
			if(seatInfo.aisle=="Y"){
				html += '<li class="window-left-li"><div class="window-circle"></div><div class="recommend-window-text">靠过道</div></li>';
			}
			if(seatInfo.leftRight=="L"){
				html += '<li class="window-left-li"><div class="window-circle"></div><div class="recommend-window-text">左侧</div></li>';
			}
			if(seatInfo.leftRight=="R"){
				html += '<li class="window-left-li"><div class="window-circle"></div><div class="recommend-window-text">右侧</div></li>';
			}
			html += '</ul>';
			html += '</div>';
			if(seatInfo.window=="Y"){
				html += '<div class="recommend-window-right"><div class="all-icon recommend-img recommend-img-margin"></div></div>';
			}else if(seatInfo.aisle=="Y"){
				html += '<div class="recommend-window-right"><div class="all-icon recommend-aisle-img recommend-img-margin"></div></div>';
			}else{
				html += '<div class="recommend-window-right"><div class="all-icon recommend-none-img recommend-img-margin"></div></div>';
			}
			html += '</div>';
			$('body').append(html);
			var bodyClientHeight = document.body.clientHeight;
			var bodyClienWidth = document.body.clientWidth;
			var box = $('.recommend-window');
			var boxHeight = box.height();
			var boxWidth = box.width();
			box.css({'top':bodyClientHeight/2-boxHeight/2+'px','left':bodyClienWidth/2-boxWidth/2+'px'});//居中
			box.show();
			$('.recommend-window').unbind('click').bind('click',function(){
				box.css('display','none');
				box.remove();
			});
			};
		},
		hideWindow:function(){
			$(".recommend-window").hide();
		},
		/*
		 * 移除同行人
		 */
		removeUser:function(e){
			var self = this;
			var element = $(e.currentTarget);
			var ulelement = element.parent('li');
			var usernumList = self.$el.find('.usernum');
//			var sc = self.$el.find('#seat-map').seatCharts({});
			for(var i=0;i<usernumList.length;i++){//如果该同行人有选座则清除所选座位，恢复可选状态。
				if($(usernumList[i]).text()==ulelement.attr("Index")){
					$(usernumList[i]).parent().removeClass('unavailable').removeClass('recommended').removeClass('selected').addClass('available').attr('aria-checked','false');
					var available = [];
					available.push($(usernumList[i]).parent().attr("id"));
					self.sc.get(available).status('available');
					$(usernumList[i]).remove();//清掉座位用户编号
				}
			}
//			self.$el.find('#'+seatNum).removeClass('unavailable').removeClass('recommended').addClass('available').attr('aria-checked','false');
////			sc.get([seatNum]).status('available');
//			$('#'+seatNum).children('.usernum').remove();//清掉座位用户编号
			if(usernumList.length>1){
				$(usernumList[0]).parent().removeClass('unavailable').removeClass('recommended').removeClass('selected').addClass('recommended').attr('aria-checked','false');//将第一个人所选座位置成选中状态
				var recommended  = [];
				recommended.push($(usernumList[0]).parent().attr("id"));
				self.sc.get(recommended).status('recommended');
			}
			ulelement.remove();
			var Index = parseInt(ulelement.attr("Index"))-1;
			$('#repersonList').children('li').eq(Index).addClass('j-notadded');//推荐同行人列表对应人添加可选标识
			$('#headList').children('li').eq(0).children('.all-icon').removeClass('select-head-portrait').addClass('selected-head-portrait');//将第一个头像置成选中状态
			self.nowindex = "1";
			self.$el.find('#seatnumber').text($('#headList').children('li').eq(0).attr("seatnum"));//显示本人所选座位号
			self.params.travelerCount = self.params.travelerCount - 1;//计数
			self.recovery();
		},
		/*
		 * 添加推荐同行人
		 */
		addReperson:function(e){
			var self = this;
			var target = $(e.target);
			var Index = target.parent('li').index();
			var asrSeatNum = target.attr("asrSeatNum");
			var certNo = target.attr("certNo");
			var certType = target.attr("certType");
			var passengerName = target.attr("passengerName");
			var ticketNum = target.attr("ticketNum");
			var pnrNo = target.attr("pnrNo");
			if($('#headList').children('li').length<4){
				var count = $('#headList').children('li').length+1;
				self.$el.find('.selected-head-portrait').removeClass('selected-head-portrait').addClass('select-head-portrait');
				var html = '<li Index='+count+' seatNum='+' '+' asrSeatNum='+asrSeatNum+' certNo='+certNo+' certType='+certType+' passengerName='+passengerName+' ticketNum='+ticketNum+' pnrNo='+pnrNo+'><div class="all-icon selected-head-portrait"></div><div class="checkin-name-font">'+passengerName+'</div><div class="head-num">'+count+'</div><div class="all-icon fork-icon remove-location"></div></li>';
				self.nowindex = count;
				$(e.currentTarget).removeClass('j-notadded');//移除未添加标识
				$('#headList').append(html);
			}
			self.params.travelerCount = self.params.travelerCount + 1;//计数
			if(self.params.travelerCount >3){
				self.greyAddTogetherButton();
			}
		},
		/*
		 * 切换操作头像
		 */
		switchHead:function(e){
			var self = this;
			var target = $(e.target);
			self.$el.find('.selected-head-portrait').removeClass('selected-head-portrait').addClass('select-head-portrait');
			target.removeClass('select-head-portrait').addClass('selected-head-portrait');
			self.nowindex = target.parent('li').attr("Index");
		},
		/*
		 * 跳转添加同行人页面
		 */
		addtogether:function(){
			var self = this;
			self.jumpTo("forward/addtogetherpersonal");
		},
		/*
		 * 手动添加同行人
		 */
		initManuallyAdd:function(){
			var self = this;
			var Rsp3010 = self.getCache("Rsp3010");//获取pnr旅客
			if(Rsp3010){
				for(var i=0;i< Rsp3010.length;i++){
					if($('#headList').children('li').length<4){
						var count = $('#headList').children('li').length+1;
						self.$el.find('.selected-head-portrait').removeClass('selected-head-portrait').addClass('select-head-portrait');
						var html = '<li Index='+count+' seatNum='+''+' asrSeatNum='+Rsp3010[i].asrSeatNum+' certNo='+Rsp3010[i].certNo+' certType='+Rsp3010[i].certType+' passengerName='+Rsp3010[i].passengerName+' ticketNum='+Rsp3010[i].ticketNum+' pnrNo='+Rsp3010[i].pnrNum+'><div class="all-icon selected-head-portrait"></div><div class="checkin-name-font">'+Rsp3010[i].passengerName+'</div><div class="head-num">'+count+'</div><div class="all-icon fork-icon remove-location"></div></li>';
						self.nowindex = count;
						$('#headList').append(html);
					}
					self.params.travelerCount = self.params.travelerCount + 1;//计数
				}
			}
			self.removeCache("Rsp3010");
		}
	});
	return SeatSelection;
});