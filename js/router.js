define(['CryptoJS','store','params','utils','SGClient','SGView',
        'views/flight_infolist','views/flight_guide','views/flight_details',
        'views/boarding_pass','views/seat_selection.js','views/flight_checkin',
        'views/seatselection_details','views/QRCode','views/Authentication',
        'views/authentication_success','views/authentication_photo','views/others_checkin',
        'views/personal_center','views/personal_profile','views/personal_profile_sex',
        'views/personal_profile_birthday','views/personal_feedback_write','views/personal_feedback_write2',
        'views/personal_profile_cert','views/personal_feedback_view','views/personal_concern_list',
        'views/personal_selected_history','views/cancelUserList','views/cancellTicketList',
        'views/primaryseat_details','views/add_together_personal','views/mySeatMap','views/myPrimarySeat_details','views/myseatselection_details'],
function(CryptoJS,store,params,utils,sgClient,SGView,FlightInfoList,FlightGuide,
		FlightDetails,BoardingPass,SeatSelection,FlightCheckIn,SeatSelectionDetails,QRCode,
		Authentication,AuthenticationSuccess,AuthenticationPhoto,OthersCheckin,PersonalCenter,
		PersonalProfile,PersonalProfileSex,PersonalProfileBirthday,PersonalFeedbackWrite,PersonalFeedbackWrite2,
		PersonalProfileCert,PersonalFeedbackView,PersonalConcertList,PersonalSelectedHistroy,
		CancelUserList,CancellTicketList,PrimaryseatDetails,AddTogetherPersonal,MySeatMap,MyPrimaryseatDetails,MyseatSelectionDetails){
	var Router = Backbone.Router.extend({
		routes:{
			'': 'first',
			'personal':'personalCenter',
			'mySeat':'mySeat',
			'forward/*forwardPath':'forward',
			'back/*backPath':'back'
		},
		init: true,
		first:function(){//提前选座
			var self = this;
			var sGView = new SGView();
			var ropenid = this.GetQueryString("openid");//获取用户openid
			store.setOpenId(ropenid);
//			alert(this.GetQueryString("openid"));
			var query = {
				    "rpid": "1005",
				    "ropenid": ropenid,
				    "version": "1.0",
				    "rip": "127.0.0.1",
				    "rpara": {
				        }
				};
			utils.showMessage("",'',sgClient);
			sgClient.post(query,'',function(_data){			
				if(_data && _data.code == 0){//查询成功
					store.setUserAuthStatus(_data.rsp);
					if(_data.rsp.certify_status==1){//1.认证
						params.certType = "0";//将证件类型付给全局变量
						var certId = self.decrypt(_data.rsp.cert_id,"");//解密
						var _query= {
							    "rpid":"2004",
							    "ropenid":ropenid,
							    "version":"1.0",
							    "rip":"127.0.0.1",
							    "rpara":{
							        "idNumber":certId,
							        "idType":"0"
							    }
							};
						sgClient.post(_query,'',function(_data){			
							if(_data && _data.code == 0){//查询成功
								var ticketList = _data.rsp;
								sGView.addCache("ticketList",ticketList);
								self.showFlightCheckIn();
							}else if(_data.code != 0){//查询失败
								utils.showAlert({text:(_data.msg)});
							}
							utils.hideMessage();
						},"json");
					}else{//2.非认证
						self.showBoardingPass();
					}
				}else if(_data.code != 0){//查询失败
					utils.showAlert({text:(_data.msg)});
				}
				utils.hideMessage();
			},"json");			
		},
		/*
		 * 个人中心
		 */
		personalCenter:function(){
			var ropenid = this.GetQueryString("openid");//获取用户openid
			store.setOpenId(ropenid);
			this.showPersonalCenter();
		},
		/*
		 * 获取url上参数
		 */
		GetQueryString:function(name){
		 var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
		 var r = window.location.search.substr(1).match(reg);
		 if(r!=null)return  unescape(r[2]); return null;
		},
		/*
		 * 解密
		 */
		decrypt:function(text, password){
			  var key =  CryptoJS.enc.Base64.parse("X88adQC7FgQw86nUQRZyhg==");
			  var encryptedText = CryptoJS.AES.decrypt(text, key, {
				mode: CryptoJS.mode.ECB,
				padding: CryptoJS.pad.Pkcs7
			  });
			  var result = encryptedText.toString(CryptoJS.enc.Utf8);
			  return result;
		},
		/*
		 * 我的座位
		 */
		mySeat:function(){
			var self = this;
			var ropenid = this.GetQueryString("openid");
			store.setOpenId(ropenid);
			var query = {
				    "rpid": "1005",
				    "ropenid": ropenid,
				    "version": "1.0",
				    "rip": "127.0.0.1",
				    "rpara": {
				        }
				};
			utils.showMessage("",'',sgClient);
			sgClient.post(query,'',function(_data){			
				if(_data && _data.code == 0){//查询成功
					store.setUserAuthStatus(_data.rsp);
					if(_data.rsp.certify_status==1){//1.认证
						var _query = {
							    "rpid": "2000",
							    "ropenid": ropenid,
							    "version": "1.0",
							    "rip": "127.0.0.1",
							    "rpara": {
							    	"certList":[{
							    		"idNumber":_data.rsp.cert_id,
							    		"idType":"NI"
							    	}]
							        }
							};
						sgClient.post(_query,'',function(_data){			
							if(_data && _data.code == 0){//查询成功
								var myFlightInfo = _data.rsp;
								params.myFlightInfo = myFlightInfo;//本人航班卡
								var _query= {
									    "rpid":"3012",
									    "ropenid":ropenid,
									    "version":"1.0",
									    "rip":"127.0.0.1",
									    "rpara":{
									    }
									};
								sgClient.post(_query,'',function(_data){			
									if(_data && _data.code == 0){//查询旅客取消值机的证件列表成功
										var cancelUserList = _data.rsp;
										var certList = [];
										for(var i = 0;i<cancelUserList.length;i++){
											var certInfo = {"idNumber":"",
											        "idType":""};
											certInfo.idNumber = cancelUserList[i].certNo;
											certInfo.idType = cancelUserList[i].certType;
											certList.push(certInfo);
										}
										
										var queryflight = {
											    "rpid": "2000",
											    "ropenid": ropenid,
											    "version": "1.0",
											    "rip": "127.0.0.1",
											    "rpara": {
											    	"certList":certList
											        }
											};
										sgClient.post(queryflight,'',function(_data){			
											if(_data && _data.code == 0){//查询航班成功
												var myFlightInfo = _data.rsp;
												params.othersFlightInfo = othersFlightInfo;//同行人航班卡
												self.showFlightInfoList();
											}else if(_data.code != 0){//查询失败
												utils.showAlert({text:(_data.msg)});
											}
											utils.hideMessage();
										},"json");	
									}else if(_data.code != 0){//查询失败
										utils.showAlert({text:(_data.msg)});
									}
									utils.hideMessage();
								},"json");
							}else if(_data.code != 0){//查询失败
								utils.showAlert({text:(_data.msg)});
							}
							utils.hideMessage();
						},"json");
					}else{//2.非认证
						var _query= {
							    "rpid":"3012",
							    "ropenid":ropenid,
							    "version":"1.0",
							    "rip":"127.0.0.1",
							    "rpara":{
							    }
							};
						sgClient.post(_query,'',function(_data){			
							if(_data && _data.code == 0){//查询旅客取消值机的证件列表成功
								var cancelUserList = _data.rsp;
								var certList = [];
								if(cancelUserList.length>0){
									for(var i = 0;i<cancelUserList.length;i++){
										var certInfo = {"idNumber":"",
										        "idType":""};
										certInfo.idNumber = cancelUserList[i].certNo;
										certInfo.idType = cancelUserList[i].certType;
										certList.push(certInfo);
									}
								}else{
									certList = [{"idNumber":"",
								                 "idType":""}];
								}
								var queryflight = {
									    "rpid": "2000",
									    "ropenid": ropenid,
									    "version": "1.0",
									    "rip": "127.0.0.1",
									    "rpara": {
									    	"certList":certList
									        }
									};
								sgClient.post(queryflight,'',function(_data){			
									if(_data && _data.code == 0){//查询航班成功
										var myFlightInfo = _data.rsp;
										params.myFlightInfo = myFlightInfo;
										self.showFlightInfoList();
									}else if(_data.code != 0){//查询失败
										utils.showAlert({text:(_data.msg)});
									}
									utils.hideMessage();
								},"json");
								
							}else if(_data.code != 0){//查询失败
								utils.showAlert({text:(_data.msg)});
							}
							utils.hideMessage();
						},"json");
					}
				}else if(_data.code != 0){//查询失败
					utils.showAlert({text:(_data.msg)});
				}
				utils.hideMessage();
			},"json");			
		},
		forward:function(forwardPath){
			if(forwardPath == 'flightsearch'){
				this.showFlightSearch();
			}else if(forwardPath == "flightlist"){
				this.showFlightList();
			}else if(forwardPath == "flightinfolist"){
				this.showFlightInfoList();
			}else if(forwardPath == "flightguide"){
				this.showFlightGuide();
			}else if(forwardPath == "flightdetails"){
				this.showFlightDetails();
			}else if(forwardPath == "boardingpass"){
				this.showBoardingPass();
			}else if(forwardPath == "seatselection"){
				this.showSeatSelection();
			}else if(forwardPath == "flightcheckin"){
				this.showFlightCheckIn();
			}else if(forwardPath == "seatselectiondetails"){
				this.showSeatSelectionDetails();
			}else if(forwardPath == "qRCode"){
				this.showQRCode();
			}else if(forwardPath == "authentication"){
				this.showAuthentication();
			}else if(forwardPath == "authenticationsuccess"){
				this.showAuthenticationSuccess();
			}else if(forwardPath == "authenticationphoto"){
				this.showAuthenticationPhoto();
			}else if(forwardPath == "otherscheckin"){
				this.showOthersCheckin();
			}else if(forwardPath == "personalProfile"){//点击首页个人资料
				this.showPersonalProfile();
			}else if(forwardPath == "personalProfileSex"){//点击个人资料页的性别
				this.showPersonalProfileSex();
			}else if(forwardPath == "personalProfileBirthday"){//点击个人资料页的生日
				this.showPersonalProfileBirthday();
			}else if(forwardPath == "personalFeedbackWrite"){//点击个人中心的意见反馈
				this.showPersonalFeedbackWrite();
			}else if(forwardPath == "personalProfileCert"){//点击意见反馈页里的看回复
				this.showPersonalProfileCert();
			}else if(forwardPath == "personalFeedbackView"){//点击个人中心关注列表
				this.showPersonalFeedbackView();
			}else if(forwardPath == "personalConcertList"){//点击个人中心关注列表
				this.showPersonalConcertList();
			}else if(forwardPath == "personalSelectedHistroy"){//点击个人中心选座历史
				this.showPersonalSelectedHistroy();
			}else if(forwardPath == "canceluserlist"){
				this.showCancelUserList();
			}else if(forwardPath == "cancellticketlist"){
				this.showCancellTicketList();
			}else if(forwardPath == "primaryseatdetails"){
				this.showPrimaryseatDetails();
			}else if(forwardPath == "addtogetherpersonal"){
				this.showAddTogetherPersonal();
			}else if(forwardPath == "myseatmap"){
				this.showMySeatMap();
			}else if(forwardPath == "myprimaryseatdetails"){
				this.showMyPrimaryseatDetails();
			}else if(forwardPath == "myseatselectiondetails"){
				this.showMyseatSelectionDetails();
			}else if(forwardPath == "personalFeedbackWrite2"){//点击个人中心的意见反馈
				this.showPersonalFeedbackWrite2();
			}
		},
		back:function(backPath){
			if(backPath == 'flightsearch'){
				this.showFlightSearch(backPath,true);
			}else if(backPath==''){
				//TODO
			}
		},
		changePage: function(view,isBack,flag,eventFlag) {
			//add the attribute 'data-role="page" ' for each view's div
			//view.$el.attr('data-role', 'page');
			//append to dom
			var self = this;
			switch(eventFlag){
				case 1://主页进来
					self.unbind("dataChanged:perCenterViewReviewData");
					break;
				case 2://个人中心进来
					self.unbind("dataChanged:homeViewJourneyData");
					self.unbind("dataChanged:homeViewReviewData");
					break;
				case 3:
					self.stopInterval();
					break;
				default:
					self.unbind("dataChanged:homeViewJourneyData");
					self.unbind("dataChanged:homeViewReviewData");
					self.unbind("dataChanged:perCenterViewReviewData");
					break;
			}
			
			$(view.el).attr('data-role','page');
			$(view.el).attr('data-dom-cache','true');
			$(view.el).attr('id','container');
			
			
			if(view.utils.browerVersion('android')){
				$('body').empty();
			}
			
			$('body').append($(view.el));
			//$(view.el).css('max-height',$('body').height()+'px');
			//$(view.el).css('overflow','hidden');
			
			if(isBack ==undefined || isBack == null){
				isBack = false;
			}
			var tran = 'slide';
			if(flag){
				tran = 'none';
			}
			//var transition = $.mobile.defaultPageTransition;
			if (!this.init) {
				$.mobile.changePage($(view.el), {
					transition:tran,
					changeHash: false,
					showLoadMsg:false,
					reverse: isBack
				});
			} else {
				this.init = false;
			}
			
		},
		showFlightSearch:function(view,isBack){
			var flightSearch=new FlightSearch();
			flightSearch.render();
			this.changePage(flightSearch,isBack);
			this.tmpView = flightSearch;
		},
		showFlightList:function(view,isBack){
			var flightList=new FlightList();
			flightList.render();
			this.changePage(flightList,isBack);
			this.tmpView = flightList;
		},
		showFlightInfoList:function(view,isBack){
			var flightInfoList = new FlightInfoList();
			flightInfoList.render();
			this.changePage(flightInfoList,isBack);
			this.tmpView = flightInfoList;
		},
		showFlightGuide:function(view,isBack){
			var flightGuide = new FlightGuide();
			flightGuide.render();
			this.changePage(flightGuide,isBack);
			this.tmpView = flightGuide;
		},
		showFlightDetails:function(view,isBack){
			var flightDetails = new FlightDetails();
			flightDetails.render();
			this.changePage(flightDetails,isBack);
			this.tmpView = flightDetails;
		},
		showBoardingPass:function(view,isBack){
			var boardingPass = new BoardingPass();
			boardingPass.render();
			this.changePage(boardingPass,isBack);
			this.tmpView = boardingPass;
		},
		showSeatSelection:function(view,isBack){
			var seatSelection = new SeatSelection();
			seatSelection.render();
			this.changePage(seatSelection,isBack);
			this.tmpView = seatSelection;
		},
		showFlightCheckIn:function(view,isBack){
			var flightCheckIn = new FlightCheckIn();
			flightCheckIn.render();
			this.changePage(flightCheckIn,isBack);
			this.tmpView = flightCheckIn;
		},
		showSeatSelectionDetails:function(view,isBack){
			var seatSelectionDetails = new SeatSelectionDetails();
			seatSelectionDetails.render();
			this.changePage(seatSelectionDetails,isBack);
			this.tmpView = seatSelectionDetails;
		},
		showQRCode:function(view,isBack){
			var qRCode = new QRCode();
			qRCode.render();
			this.changePage(qRCode,isBack);
			this.tmpView = qRCode;
		},
		showAuthentication:function(view,isBack){
			var authentication = new Authentication();
			authentication.render();
			this.changePage(authentication,isBack);
			this.tmpView = authentication;
		},
		showAuthenticationSuccess:function(view,isBack){
			var authenticationsuccess = new AuthenticationSuccess();
			authenticationsuccess.render();
			this.changePage(authenticationsuccess,isBack);
			this.tmpView = authenticationsuccess;
		},
		showAuthenticationPhoto:function(view,isBack){
			var authenticationphoto = new AuthenticationPhoto();
			authenticationphoto.render();
			this.changePage(authenticationphoto,isBack);
			this.tmpView = authenticationphoto;
		},
		showOthersCheckin:function(view,isBack){
			var otherscheckin = new OthersCheckin();
			otherscheckin.render();
			this.changePage(otherscheckin,isBack);
			this.tmpView = otherscheckin;
		},
		showPersonalCenter:function(view,isBack){
			var personalCenter=new PersonalCenter();
			personalCenter.render();
			this.changePage(personalCenter,isBack);
			this.tmpView = personalCenter;
		},
		showPersonalProfile:function(view,isBack){
			var personalProfile=new PersonalProfile();
			personalProfile.render();
			this.changePage(personalProfile,isBack);
			this.tmpView = personalProfile;
		},
		showPersonalProfileSex:function(view,isBack){
			var personalProfileSex=new PersonalProfileSex();
			personalProfileSex.render();
			this.changePage(personalProfileSex,isBack);
			this.tmpView = personalProfileSex;
		},
		showPersonalProfileBirthday:function(view,isBack){
			var personalProfileBirthday=new PersonalProfileBirthday();
			personalProfileBirthday.render();
			this.changePage(personalProfileBirthday,isBack);
			this.tmpView = personalProfileBirthday;
		},
		showPersonalFeedbackWrite:function(view,isBack){
			var personalFeedbackWrite=new PersonalFeedbackWrite();
			personalFeedbackWrite.render();
			this.changePage(personalFeedbackWrite,isBack);
			this.tmpView = personalFeedbackWrite;
		},
		showPersonalProfileCert:function(view,isBack){
			var personalProfileCert=new PersonalProfileCert();
			personalProfileCert.render();
			this.changePage(personalProfileCert,isBack);
			this.tmpView = personalProfileCert;
		},
		showPersonalConcertList:function(view,isBack){
			var personalConcertList=new PersonalConcertList();
			personalConcertList.render();
			this.changePage(personalConcertList,isBack);
			this.tmpView = personalConcertList;
		},
		showPersonalFeedbackView:function(view,isBack){
			var personalFeedbackView=new PersonalFeedbackView();
			personalFeedbackView.render();
			this.changePage(personalFeedbackView,isBack);
			this.tmpView = personalFeedbackView;
		},
		showPersonalSelectedHistroy:function(view,isBack){
			var personalSelectedHistroy=new PersonalSelectedHistroy();
			personalSelectedHistroy.render();
			this.changePage(personalSelectedHistroy,isBack);
			this.tmpView = personalSelectedHistroy;
		},
		showCancelUserList:function(view,isBack){
			var cancelUserList=new CancelUserList();
			cancelUserList.render();
			this.changePage(cancelUserList,isBack);
			this.tmpView = cancelUserList;
		},
		showCancellTicketList:function(view,isBack){
			var cancellTicketList = new CancellTicketList();
			cancellTicketList.render();
			this.changePage(cancellTicketList,isBack);
			this.tmpView = cancellTicketList;
		},
		showPrimaryseatDetails:function(view,isBack){
			var primaryseatDetails = new PrimaryseatDetails();
			primaryseatDetails.render();
			this.changePage(primaryseatDetails,isBack);
			this.tmpView = primaryseatDetails;
		},
		showAddTogetherPersonal:function(view,isBack){
			var addTogetherPersonal = new AddTogetherPersonal();
			addTogetherPersonal.render();
			this.changePage(addTogetherPersonal,isBack);
			this.tmpView = addTogetherPersonal;
		},
		showMySeatMap:function(view,isBack){
			var mySeatMap = new MySeatMap();
			mySeatMap.render();
			this.changePage(mySeatMap,isBack);
			this.tmpView = mySeatMap;
		},
		showMyPrimaryseatDetails:function(view,isBack){
			var myPrimaryseatDetails = new MyPrimaryseatDetails();
			myPrimaryseatDetails.render();
			this.changePage(myPrimaryseatDetails,isBack);
			this.tmpView = myPrimaryseatDetails;
		},
		showMyseatSelectionDetails:function(view,isBack){
			var myseatSelectionDetails = new MyseatSelectionDetails();
			myseatSelectionDetails.render();
			this.changePage(myseatSelectionDetails,isBack);
			this.tmpView = myseatSelectionDetails;
		},
		showInformation:function(view,isBack){
			var information = new Information();
			information.render();
			this.changePage(information,isBack);
			this.tmpView = information;
		},
		showPersonalFeedbackWrite2:function(view,isBack){
			var personalFeedbackWrite2=new PersonalFeedbackWrite2();
			personalFeedbackWrite2.render();
			this.changePage(personalFeedbackWrite2,isBack);
			this.tmpView = personalFeedbackWrite2;
		},
	});
    var _router = new Router();
	
	return _router;
});