define([ 'jquery', 'underscore', 'backbone', 'SGView',
		'text!templates/personal_selected_history.html' ], function($, _, Backbone,
		SGView, viewtTpl) {
	var PersonalSelectedHistroy = SGView.extend({
		pageId : 'personal_selected_history',
		template : _.template(viewtTpl),
		render : function() {
			var self = this;
			this.$el.empty();
			this.$el.attr('class', 'ui-page-active ui-page');
			/*-------------------------------------------------------------------------*/
			var rsp = self.getCache("PersonalHistoryData");
			var json=rsp.selectResult;
			json.sort(Sorts);
			self.$el.append(self.template({lang:self.lang,data:rsp.selectResult}));
			self.$el.on('pageshow',function(){ 
				$("#wrapper").height(document.body.clientHeight - $("#wrapper").position().top);
				self.initScroll("wrapper");
			}); 
			return this;
		},
		events : {
			"click #mycustoms" : "MyCustoms",
			"click #feedback" : "FeedBack",
			"click #personalHistoryAdd" : "OpenAll",
			"click #personalHistoryMinus" : "foldAll",
		},
		/**
		 * 初始化滚轮
		 */
		initIScroll:function(wrapper){
			this.myScroll = new iScroll(wrapper);
		},
		/**
		 * 点击加号展开
		 */
		OpenAll:function(e){
			currentTag=$(e.currentTarget);//id=personalHistoryAdd
			currentTag.removeClass("personal_s_history_add");
			currentTag.addClass("personal_s_history_lineYellow");
			if(currentTag.parent().siblings("div").first().hasClass("personal_s_history_div06")){
			currentTag.parent().siblings("div").first().removeClass("personal_s_history_div06").addClass("personal_s_history_auto");
			tmpId=currentTag.parent().siblings("div").first().attr("id");
			/*$("#"+tmpId).height(document.body.clientHeight - $("#"+tmpId).position().top);
			self.initScroll(tmpId);*/
			}
			currentTag.parent().siblings("div").first().addClass("personal_height_auto");
			heightFullValue=currentTag.parent().siblings("div").first().outerHeight(true);
			heightValue=currentTag.parent().siblings("div").first().outerHeight();
			heightSValue=currentTag.parent().siblings("div").first().height();
			currentTag.parent().css("height",heightFullValue);
			currentTag.css("margin-top","9px");
			currentTag.css("height",heightValue);
			currentTag.find("div").first().addClass("personal_display_block");
			currentTag.find("div").first().find("img").last().css("margin-top",heightSValue-27);
		},
		/**
		 * 点击减号收起
		 */
		foldAll:function(e){
			currentTag=$(e.currentTarget);
			currentTag.parent("div #display").removeClass("personal_display_block");
			currentTag.parent().parent("div #personalHistoryAdd").removeClass("personal_s_history_lineYellow").addClass("personal_s_history_add");;
			currentTag.parent().parent("div #personalHistoryAdd").css("height","20px");
			currentTag.parent().parent("div #personalHistoryAdd").css("margin-top","35px");
			currentTag.parent().parent("div #personalHistoryAdd").parent().css("height","87px");
			currentTag.parent().parent("div #personalHistoryAdd").parent().siblings("div").first().removeClass("personal_height_auto");
			if(currentTag.parent().parent("div #personalHistoryAdd").parent().siblings("div").first().hasClass("personal_s_history_auto")){
				currentTag.parent().parent("div #personalHistoryAdd").parent().siblings("div").first().removeClass("personal_s_history_auto").addClass("personal_s_history_div06");
				currentTag.parent().parent("div #personalHistoryAdd").parent().css("height","97px");
			}
			return false;
		},
		/**
		 * 回复反馈
		 * 
		 */
		FeedBack : function() {
			this.jumpTo("forward/feedback");
		},
	});
	return PersonalSelectedHistroy;
});
function operaterSpan(status,mark,seatNo){
	if(0==status&&mark==0){
		return "<span>预留座位</span>"+"<span class=\"personal_s_history_span07\">"+seatNo+"</span>";
	}else if(0==status&&mark==1){
		return "<span>值机选座</span>"+"<span class=\"personal_s_history_span07\">"+seatNo+"</span>";
	}else if(1==status&&mark==0){
		return "<span class=\"personal_s_history_span10\">取消预留</span>"+"<span class=\"personal_s_history_span07 personal_s_history_span09\">"+seatNo+"</span>";
	}else if(1==status&&mark==0){
		return "<span class=\"personal_s_history_span10\">取消选座</span>"+"<span class=\"personal_s_history_span07 personal_s_history_span09\">"+seatNo+"</span>";
	}
}
function spanByName(passengerName){
	var nameLength=passengerName.length;
	if(nameLength>=1){
		return "<div class='personal_s_history_span11'>"+passengerName+"</div>";
	}else{
		return "<span>"+passengerName+"</span>";
	}
}
function  divByindex(i,passengerName,index){
	if(passengerName&&passengerName.length>1){
		if(index==2){
	       return "<div class=\"personal_s_history_div02 personal_s_history_div06\" id='div02"+i+"'>"
		}else if(index==1){
		   return "<div class=\"personal_s_history_div01 personal_s_history_div07\" id='div01"+i+"'>"
		}
	}else{
		if(index==2){
		    return "<div class=\"personal_s_history_div02\" id='div02"+i+"'>"
		}else if(index==1){
			return "<div class=\"personal_s_history_div01\" id='div01"+i+"'>"
		}
	}
}
function opTimeStamp(timeStamp){
	if(timeStamp){
		
	}else{
		return "";
	}
}
function  Sorts(a,b){
	var start=new Date(a.depDate.replace("-", "/").replace("-", "/")); 
	var end=new Date(b.depDate.replace("-", "/").replace("-", "/"));
    return end-start;
}