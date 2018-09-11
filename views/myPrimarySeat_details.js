define(['jquery','underscore','backbone','SGView','text!templates/myPrimarySeat_details.html'],
function($,_,Backbone,SGView,viewtTpl){
	var MyPrimaryseatDetails = SGView.extend({
		pageId:'PrimaryseatDetails',
		template:_.template(viewtTpl),
		render:function(){
			var self = this;
			this.$el.empty();
			var PrimaryRsp = self.getCache("PrimaryRsp");	
			self.$el.append(self.template({lang:self.lang,data:self.params.guideRsp,data2:self.params.nowMyFlightInfo,PrimaryRsp:PrimaryRsp.returnList,BoardingTime:self.BoardingTime()}));
			setTimeout(function(){self.getCheckInRule();},300);//拼装自动值机复选框
			this.$el.attr('class','ui-page-active ui-page');
			self.$el.on('pageshow',function(){ 
				$("#wrapper").height(document.body.clientHeight - $("#wrapper").position().top);
				self.initScroll("wrapper");
			}); 
			return this;
		},
		events: {
			"click #searchsubmit": "back",
		},
		/**
		 * 计算登机时间
		 */
		BoardingTime:function(){
			var self = this;
			var x = self.params.guideRsp.deDate+" "+self.params.guideRsp.deTime; // 取得离开日期+时间
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
		}
	});
	return MyPrimaryseatDetails;
});