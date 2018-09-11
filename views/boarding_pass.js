define(['jquery','underscore','backbone','SGView','text!templates/boarding_pass.html','MD5'],
function($,_,Backbone,SGView,viewtTpl){
	var BoardingPass = SGView.extend({
		pageId:'flight_list',
		template:_.template(viewtTpl),
		selectcount:0,//选中人数
		render:function(){
			var self = this;
			this.$el.empty();
			self.$el.append(self.template({lang:self.lang}));
//			self.$el.addClass('login-bg ui-page-active');
			this.$el.attr('class','ui-page-active ui-page');
			return this;
		},
		events: {
			"click .journey_tab li": "TabChange",
			"click #cancleSelected": "cancelBoarding",
			"click #adduser": "adduser",
			"click .remove": "removeuser",
			"click #next": "next",
			"click .common-contact-checkbox": "chgCheIcon",
			"click .common-contact": "comuser",
			"click .add-userlist-button": "AddUserList",
			"click .recommend-window": "hideWindow",
			"change #mytype":"btnOnchange"
		},
		btnOnchange:function(){
			var btnSelect = document.getElementById("btn_select");
			var curSelect = btnSelect.getElementsByTagName("span")[0];
			var oSelect = btnSelect.getElementsByTagName("select")[0];
			var aOption = btnSelect.getElementsByTagName("option");
			//oSelect.onchange = function () {
			var text=oSelect.options[oSelect.selectedIndex].text;
			curSelect.innerHTML = text;
			//}
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
		/*
		 * 本人值机/他人值机
		 */
		TabChange:function(e){
			var self = this,
            curli = $(e.currentTarget),
            _journeyType = curli.data("journey"),
			tabItems = self.$el.find(".journey_tab li"),
			myflightTab = self.$el.find("#myflight"),
			othersflightTab = self.$el.find("#doothers");
			tabItems.removeClass('journeyTabCrt');
			tabItems.filter("[data-journey='" + _journeyType + "']").addClass("journeyTabCrt")
			switch(_journeyType){
            case 1:
            	//本人值机
            	othersflightTab.addClass('hideTab');
            	myflightTab.removeClass('hideTab');            	
            	break;
            case 2:
            	//他人值机
            	myflightTab.addClass('hideTab');
            	othersflightTab.removeClass('hideTab');
            	$("#doothers").height(document.body.clientHeight - $("#doothers").position().top);
				self.initScroll("doothers");
//				self.utils.showAlert({text:"请选择相同航班乘客",title:"温馨提示"});
            	break;
        }
		},
		/**
		 * 添加乘客
		 */
		adduser:function(){
			var self = this;
			var userlist = self.$el.find("#userlist");
			var lastul = userlist.find("ul").last();
			var cardid = lastul.children("li").eq(1).find("input").val();
			if(!cardid){
				self.utils.showAlert({text:"请填写证件号"});
				return false;
			}
			var usercount = userlist.children("ul").length +1;
			if(userlist.children("ul").length<4){
			var html = "";
			html+="<ul class='personinfo'>";
			html+="<li class='personinfo-li personList-title-font'>"+"乘客"+usercount+"<div class='all-icon trash-icon remove remove' style='display:inline-block;float: right;'></div></li>";
			html+="<li class='personinfo-li'><div class='personinfolist-half-round' ></div><div style='width:25%;display:inline-block;float:left;'>";
			html+="<select data-role='none' class='selectstyle'>";
			html+="<option value ='volvo'>"+"身份证"+"</option>";
			html+="<option value ='saab'>"+"护照"+"</option>";
			html+="<option value ='opel'>"+"其他"+"</option>";
			html+="</select></div>";
			html+="<div style='display:inline-block;'> <input style='font-family: 黑体;' type='text' data-role='none' placeholder='请输入证件号'/></div></li>";
//			html+="<li class='personinfo-li-last'><div class='personinfolist-half-round' ></div><div class='boardingpass-first-cell'>"+"手机号:"+"</div><div style='display:inline-block;'><input style='font-family: 黑体;' type='text' data-role='none' placeholder='请输入手机号 ' /></div></li>";
			html+="</ul>";
			userlist.append(html);
			$("#doothers").height(document.body.clientHeight - $("#doothers").position().top);
			self.initScroll("doothers");
			}
			self.selectcount = self.selectcount + 1;
		},
		/*
		 * 删除乘客
		 */
		removeuser:function(e){
			var element = $(e.currentTarget);
			var ulelement = element.parent('li').parent('ul');
			ulelement.remove();
		},
		/**
		 * 下一步
		 */
		next:function(){
			var self = this;
			var ropenid = self.store.getOpenId();
			var type = $('#mytype').val();
			self.params.certType = type;//将证件类型付给全局变量
			var cardId = $('#oneselfCard').val();
			cardId = self.utils.trim(cardId.replace(/ /g, "")); 
			if(type=='0'){//如果类型是身份证则进行身份证合法性校验
				if(self.utils.IdCardValidate(cardId)==false){
					self.utils.showAlert({text:"身份证号输入不正确!",title:""});
					return false;
				}
			}
			
//			var m = $.md5("I'm Persian.");//MD5加密测试
			var query= {
				    "rpid":"2004",
				    "ropenid":ropenid,
				    "version":"1.0",
				    "rip":"127.0.0.1",
				    "rpara":{
				        "idNumber":cardId,
				        "idType":type
				    }
				};
			self.utils.showMessage("",'',self.sgClient);
			self.sgClient.post(query,'',function(_data){
				if(_data.code == 0){//查询成功
					var ticketList = _data.rsp;
					self.addCache("ticketList",ticketList);
					self.jumpTo("forward/flightcheckin");
				}else{//查询失败
					self.utils.showAlert({text:(_data.msg)});
				}
				self.utils.hideMessage();
			},"json");
		},
		/*
		 * 常用联系人
		 */
		comuser:function(e){
			var self = this;
			var ropenid = self.store.getOpenId();
			var event = $(e.currentTarget).parent("li").parent("ul");//当前ul节点
			var comuserCha = self.getCache("comuser");
			if(comuserCha){//如果有缓存
				self.$el.find(".searchUserList").toggle();
				self.$el.find(".add-userlist-button").attr("display","none");
				event.children(".personinfo-li-last").toggle();
				$("#doothers").height(document.body.clientHeight - $("#doothers").position().top);
				self.initScroll("doothers");
				return false;
			}
			var query = {
				    "rpid":"3010",
				    "ropenid":"4526948",
				    "version":"1.0",
				    "rip":"127.0.0.1",
				    "rpara":{
				        "openId": "111",
				        "passengerMark": "0"
				    }
				};
			self.utils.showMessage("",'',self.sgClient);
			self.sgClient.post(query,'',function(_data){			
				if(_data && _data.code == 0){//查询成功
					var comuser = JSON.parse(_data.rsp);
					event.children(".personinfo-li-last").hide();
					
					for(var i=0;i<comuser.selectResult.length;i++){
						var html = "";
						html+="<li class='personinfo-li searchUserList' >";
		     			html+=" <div class='boardingpass-first-cell'>"+comuser.selectResult[i].passengerName+"</div>"
		     			html+=" <div style='display:inline-block;' mobile="+comuser.selectResult[i].mobile+" ><input class='cardNum' type='text' data-role='none' placeholder='请输入手机号 ' value="+comuser.selectResult[i].certId+"/></div>";
		     			html+=" <div class='common-contact-checkbox ' ></div>";
		     			html+=" </li>";		     			
		     			event.append(html);
		     			
					}
     				var addli ="<li class='personinfo-li-last add-userlist-button'>确定添加</li>";
					event.append(addli);

					$("#doothers").height(document.body.clientHeight - $("#doothers").position().top);
					self.initScroll("doothers");
					self.addCache("comuser",comuser);//添加缓存，本页操作无需再调后台
				}else if(_data.code != 0){//查询失败
					self.utils.showAlert({text:(_data.msg)});
				}
				self.utils.hideMessage();
			},"json");
		},
		/*
		 * 添加选中的人
		 */
		AddUserList:function(e){
			var self = this,
            event = $(e.currentTarget);
			event.parent("ul").children(".personinfo-li-last").show();
			var userlist = self.$el.find("#userlist");
			var checkedList = self.$el.find(".checkboxed-icon");//选中的常客列表			
			checkedList.each(function(i){
				var name = $(this).parent('li').find(".boardingpass-first-cell").text(); 
			    var cardNum = $(this).parent('li').find(".cardNum").val();
			    var mobile = $(this).prev('div').attr("mobile");
			    if(i==0){//第一个被选中乘客在当前常客卡添加常客信息
			    $(this).parents('ul').children().eq(0).text(name);
			    $(this).parents('ul').children().eq(1).find("input").val(cardNum);
			    $(this).parents('ul').children().eq(2).find("input").val(mobile);
			    }else{
			    	var html = "";
					html+="<ul class='personinfo'>";
					html+="<li class='personinfo-li'>"+name+"<div class='all-icon trash-icon remove remove' style='display:inline-block;'></div></li>";
					html+="<li class='personinfo-li'><div style='width:25%;display:inline-block;float:left;'>";
					html+="<select data-role='none' class='selectstyle'>";
					html+="<option value ='volvo'>"+"身份证"+"</option>";
					html+="<option value ='saab'>"+"护照"+"</option>";
					html+="<option value ='opel'>"+"其他"+"</option>";
					html+="</select></div>";
					html+="<div style='display:inline-block;'> <input style='font-family: 黑体;' type='text' data-role='none' value="+cardNum+" placeholder='请输入证件号'/></div></li>";
					html+="<li class='personinfo-li-last'><div class='personinfolist-half-round' ></div><div class='boardingpass-first-cell'>"+"手机号:"+"</div><div style='display:inline-block;'><input style='font-family: 黑体;' type='text' data-role='none' value="+mobile+" placeholder='请输入手机号 ' /></div></li>";
					html+="</ul>";
					userlist.append(html);
			    }
			  });
			self.ListToggle(e);
			self.selectcount = checkedList.length;
		},
		/*
		 * 切换常旅客列表显示状态
		 */
		ListToggle:function(e){
			var self = this;
			var event = $(e.currentTarget).parent("li").parent("ul");//当前ul节点
			self.$el.find(".searchUserList").hide();
			self.$el.find(".add-userlist-button").hide();
			$("#doothers").height(document.body.clientHeight - $("#doothers").position().top);
			self.initScroll("doothers");
		},
		/*
		 * 切换选中状态
		 */
		chgCheIcon:function(e){
			var self = this,
            event = $(e.currentTarget);
		     
			var cheflag = event.hasClass("checkboxed-icon");
			if(cheflag){
				event.removeClass("all-icon checkboxed-icon");
				self.selectcount = self.selectcount - 1;
				var checkList = self.$el.find(".common-contact-checkbox");
				checkList.each(function(){//取消置灰
				    if($(this).hasClass("checkbox-disable")){
				    	$(this).removeClass("checkbox-disable");
				    }
				  });
			}else{
				if(self.selectcount<4){//选中人数不得多于4个
				event.addClass("all-icon checkboxed-icon");
				self.selectcount = self.selectcount + 1;
				if(self.selectcount == 4){
					var checkList = self.$el.find(".common-contact-checkbox");
					checkList.each(function(){//置灰
					    if(!$(this).hasClass("checkboxed-icon")){
					    	$(this).addClass("checkbox-disable");
					    }
					  });
					}
				}
			}
		},
		/*
		 * 测试推荐座位窗口
		 */
		remseatTest:function(){
			var html = '';
			html += '<div class="recommend-window" style="display:none">';
			html += '<div class="recommend-window-left">';
			html += '<ul>';
			html += '<li class="window-left-title">为您推荐座位</li>';
			html += '<li class="window-left-li">靠窗</li>';
			html += '<li class="window-left-li">前排</li>';
			html += '</ul>';
			html += '</div>';
			html += '<div class="recommend-window-right"><div class="all-icon recommend-img recommend-img-margin"></div></div>';
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
		},
		hideWindow:function(){
			$(".recommend-window").hide();
		}
	});
	return BoardingPass;
});
