define([ 'jquery', 'underscore', 'backbone', 'SGView',
		'text!templates/personal_profile_birthday.html' ], function($, _, Backbone,
		SGView, viewtTpl) {
	var PersonalProfileBirthday = SGView.extend({
		pageId : 'personal_profile_birthday',
		template : _.template(viewtTpl),
		render : function() {
			var self = this;
			this.$el.empty();
			this.$el.attr('class', 'ui-page-active ui-page');
			/*-------------------------------------------------------------------------*/
			/*setTimeout(function(){self.GetThePicture()},500);*/
			setTimeout(function(){document.title = "个人资料";},100);
			var myDate = new Date();
			var currentYear = myDate.getFullYear();
			var currentMonth = myDate.getMonth()+1; 
			var currentDay = myDate.getDate(); 
			var fullYear = initYear(currentYear);
			var fullMonth=initMonth(currentMonth);
			var fullDay = initDay(currentYear,currentMonth,currentDay);
			self.$el.append(self.template({lang:self.lang,dataYear:fullYear,
				dataMonth:fullMonth,dataDay:fullDay
				}));
			
			return this;
		},
		events : {
			"click #personal_birthday_buttonDiv" : "PersonalBirthdayButtonDiv",
			"change #personal_year" : "PersonalYear",
			"change #personal_month" : "PersonalYear",
		},
		PersonalYear : function(){
			var currentYear=$("#personal_year ").get(0).value;
			var currentMonth=$("#personal_month ").get(0).value;
			var date = new Array(31, 28+is_leap(currentYear), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
			var options = [];
			for(var i=0;i<date.length;i++){
				if((i+1)==currentMonth){
					for(var j=1;j<=date[i];j++){
					if(j<10){
						j=0+""+j;
					}
					options.push("<option value='" + j + "'> " + j + " </option>");
					}
				}
			}
			$("#personal_day option").remove(); 
			$("#personal_day").append(options.join(''));
		},
		
		/**
		 * 确定提交
		 * 
		 */
		PersonalBirthdayButtonDiv : function() {
			var self = this;
			
			
			
			//获得年的列表选中信息
			var personalYear = document.getElementById("personal_year"); 
			var yearIndex = personalYear.selectedIndex; 
			var yearText = personalYear.options[yearIndex].text; 
			//获得月的列表选中信息
			var personalMonth = document.getElementById("personal_month"); 
			var monthIndex = personalMonth.selectedIndex; 
			var monthText = personalMonth.options[monthIndex].text; 
			//获得日的列表选中信息
			var personalDay = document.getElementById("personal_day"); 
			var dayIndex = personalDay.selectedIndex; 
			var dayText = personalDay.options[dayIndex].text; 
			var date = yearText+"-"+monthText+"-"+dayText;
			var openid = self.store.getOpenId();
			//var openid = "oG3L4wvgC1BaFc-PTdjFAb2DF7xk";
		var _query = {
				    "rpid": "1008", 
				    "ropenid": openid, 
				    "version": "1.0", 
				    "rip": "127.0.0.1", 
				    "rpara": {
				        "birthday": date
				    }
				};
			self.utils.showMessage("onLoading",'',self.sgClient);
			self.sgClient.post(_query,'',function(customs_data){
				if (customs_data && customs_data.code == 0) {// 查询成功
					self.removeCache("Birthday");
					var Birthday = JSON.parse(customs_data.rsp);//整理json字符串
					self.addCache("Birthday", Birthday.birthday);
					self.utils.showAlert({
						text : ("已保存"),onOK:function(){
							self.jumpTo("forward/personalProfile");
						}
					});
				} else if (customs_data && customs_data.code != 0) {//查询失败
					self.utils.showAlert({
						text : (customs_data.msg)
					});
					self.jumpTo("forward/personalProfile");
				}
				self.utils.hideMessage();
			},"json");
		},
		/**
		 * 回复反馈
		 * 
		 */
		FeedBack : function() {
			//this.jumpTo("forward/feedback");
		}
	});
	return PersonalProfileBirthday;
});
//判断是否是瑞年
function is_leap(year) {
    if((year%4==0 && year%100!=0)||(year%400==0)){
        return 1;
    }
    return 0;
}
//初始化年
function initYear(currentYear){
	var options = [];
	for(var i=0;i<30;i++){
		options.push("<option value='" + (currentYear-i) + "'> " + (currentYear-i) + " </option>");
	}
	return options.join('');
}
//初始化月
function initMonth(currentMonth){
	var options = [];
	for(var i=1;i<=12;i++){
		if(i<10){
			i=0+""+i;
		}
		if(i==currentMonth){
			options.push("<option value='" + i + "' selected = 'selected'> " + i + " </option>");
		}else{
		options.push("<option value='" + i + "'> " + i + " </option>");
		}
	}
	return options.join('');
}
//初始化日期天
function initDay(currentYear,currentMonth,currentDay){
	var date = new Array(31, 28+is_leap(currentYear), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
	var options = [];
	for(var i=0;i<date.length;i++){
		if((i+1)==currentMonth){
			for(var j=1;j<=date[i];j++){
			if(j<10){
				j=0+""+j;
			}
			if(j==currentDay){
				options.push("<option value='" + j + "' selected = 'selected'> " + j + " </option>");
			}else{
			options.push("<option value='" + j + "'> " + j + " </option>");
			}
			}
		}
	}
	return options.join('');
}