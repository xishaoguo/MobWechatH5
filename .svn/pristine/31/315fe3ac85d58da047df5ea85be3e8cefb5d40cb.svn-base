define(function(){
	var JourneyCalendar = function(){
	};
	JourneyCalendar.prototype = {
			/**
			 * android插入日期应用
			 * @param content
			 */
			insertJourney:function(content){
				cordova.exec(function(success){},function(fail){
//					alert("error:" + fail);
				},'JourneyCalendarPlugin','insertJourneyCalendar',content);
			},
	}
	return JourneyCalendar;
});