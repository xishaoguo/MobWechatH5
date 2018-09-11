define(['jquery','underscore','backbone','SGView','text!templates/primaryseat_details.html'],
function($,_,Backbone,SGView,viewtTpl){
	var PrimaryseatDetails = SGView.extend({
		pageId:'PrimaryseatDetails',
		template:_.template(viewtTpl),
		render:function(){
			var self = this;
			this.$el.empty();
			var PrimaryRsp = self.getCache("PrimaryRsp");
			self.$el.append(self.template({lang:self.lang,data:self.params.nowTicket,PrimaryRsp:PrimaryRsp.returnList,BoardingTime:self.BoardingTime()}));
			setTimeout(function(){self.getCheckInRule();},300);//拼装自动值机复选框
			this.$el.attr('class','ui-page-active ui-page');
			self.$el.on('pageshow',function(){ 
				$("#wrapper").height(document.body.clientHeight - $("#wrapper").position().top);
				self.initScroll("wrapper");
			}); 
			return this;
		},
		events: {
//			"click .primaryseat-addcard": "addcard",
			"click .Complete-PrimarySeat": "CompletePrimarySeat",
		},
		/**
		 * 选座完成
		 */
		CompletePrimarySeat:function(){
			var self = this;
			var ropenid = self.store.getOpenId();
			var checkInRule = self.getCache("checkInRule");
			var ciInfoList = [];
			var seatInfoList = $(".j-seat-info");
			if(checkInRule.ciFlag==0){//支持在线值机
				for(var i=0;i<seatInfoList.length;i++){
					if(seatInfoList.children(".j-checkin").attr('checked')){//如果选中
						ciInfoList[i] = {
								"ciInfoID":$(seatInfoList[i]).attr("checkinfoId"),
								"ciStartTime":checkInRule.ciStartTime
						};	
					}
				}
				var query = {
					    "rpid":"3015",
					    "ropenid":ropenid,
					    "version":"1.0",
					    "rip":"127.0.0.1",
					    "rpara":{
					    	ciInfoList
					    }
					};
				self.utils.showMessage("",'',self.sgClient);
				self.sgClient.post(query,'',function(_data){			
					if(_data && _data.code == 0){//查询成功
						var ciRsp = _data.rsp;
						for(var i=0;i<ciRsp.length;i++){
							if(ciRsp[i].result!="1"){
								
							}
						}
//						self.jumpTo("forward/flightcheckin");
					}else if(_data.code != 0){//查询失败
						self.utils.showAlert({text:(_data.msg)});
					}
					self.utils.hideMessage();
				},"json");
			}else{
				
			}
		},
		/**
		 * 计算登机时间
		 */
		BoardingTime:function(){
			var self = this;
			var x = self.params.nowTicket.deDate+" "+self.params.nowTicket.deTime; // 取得离开日期+时间
		    var time = new Date(x.replace("-","/"));
		          
		    var b = 45; //分钟数
		    time.setMinutes(time.getMinutes() - b, time.getSeconds(), 0);
		    var BoardingTime = (time.getHours()<10?'0'+time.getHours():time.getHours()) + ":" + (time.getMinutes()<10?'0'+time.getMinutes():time.getMinutes());
		    return BoardingTime;
		},
		/**
		 * 获取值机规则
		 */
		getCheckInRule:function(){
			var self = this;
			var ropenid = self.store.getOpenId();
			var airCd = self.params.nowTicket.airCd;
			var fltNumber = self.params.nowTicket.fltNumber;
			var flightNo = airCd+fltNumber;
			var html = "";
			var checkinList = $(".j-checkin");
			var seatInfoList = $(".j-seat-info");
			var query = {
				    "rpid":"3015",
				    "ropenid":ropenid,
				    "version":"1.0",
				    "rip":"127.0.0.1",
				    "rpara":{
				    	"flightNo": flightNo,
					    "flightDate": self.params.nowTicket.deDate,
					    "toCity": self.params.nowTicket.arCode,
					    "fromCity": self.params.nowTicket.deCode,
					    "flightTime": self.params.nowTicket.deTime
				    }
				};
			self.utils.showMessage("",'',self.sgClient);
			self.sgClient.post(query,'',function(_data){			
				if(_data && _data.code == 0){//查询成功
					var checkInRule = _data.rsp;
					self.addCache("checkInRule",checkInRule);
					if(checkInRule.ciFlag==0){//支持在线值机
						var PrimaryRsp = self.getCache("PrimaryRsp");
						html = "<input type='checkbox' value='1' checked='true'>";
						for(var i=0;i<checkinList.length;i++){
							$(checkinList[i]).append(html);
							$(seatInfoList[i]).attr("checkinfoId",PrimaryRsp.returnList[i].checkinfoId);
						}
					}else{
						html= "<div class='primaryseat-list-font'>-</div>";
						for(var i=0;i<checkinList.length;i++){
							$(checkinList[i]).append(html);
					}
				}
				}else{//查询失败
					self.utils.showAlert({text:(_data.msg)});
				}
				self.utils.hideMessage();
			},"json");
		},
		/**
		 * 加到卡包
		 */
		addcard:function(){
			var self = this;
			var query = {
				    "rpid":"3015",
				    "ropenid":ropenid,
				    "version":"1.0",
				    "rip":"127.0.0.1",
				    "rpara":{
				        "card":
				    	{
				            "boarding_pass":
				    		{
				                "air_model":"airLine111",				                
				    		"base_info":
				    			{
				                    "brand_name":"航空加",				                    
				    			"can_give_friend":true,				                    
				    			"can_share":true,				                    
				    			"code_type":"CODE_TYPE_QRCODE",				                    
				    			"color":"Color010",				                    
				    			"custom_url":"http://www.baidu.com",				                    
				    			"custom_url_name":"飞机信息",				                    
				    			"custom_url_sub_title":"更多惊喜",				                    
				    			"date_info":
				    				{
				                        "begin_timestamp":"1440559167",				                        
				    				"end_timestamp":"1443146760",				                        
				    				"type":1				    				
				                    },
				                    "description":"飞机票",				                    
				    				"get_limit":1,				                    
				    				"logo_url":"http://mmbiz.qpic.cn/mmbiz/hZz0fEJh4REm3M4OgibOBBQOguUvqVMeia0CbhV5YRsfNtCgRLhcePqv5YqN8Ih0a6yoCIiaIKEpicibZKsZYguHP2g/0",				                    
				    				"notice":"请在安检和登机时出示二维码",				                    
				    				"promotion_url":"http://www.qq.com",				                    
				    				"promotion_url_name":"产品介绍",				                    
				    				"promotion_url_sub_title":"卖场大优惠",				                    
				    				"sku":
				    					{
				                        "quantity":1000				    					
				                    },				                    
				    					"title":"海航飞机票"				    			
				                },				                
				    			"boarding_time":"1443144600",				                
				    			"check_in_url":"http://www.baidu.com",				                
				    			"departure_time":"1440559167",				                
				    			"flight":"HU7195",				                
				    			"from":"北京",				                
				    			"gate":"E",				                
				    			"landing_time":"1443146760",				                
				    			"to":"福州"				    		
				            },				            
				    		"card_type":"BOARDING_PASS"				    	
				        }
				    }
				};
			
		}
	});
	return PrimaryseatDetails;
});