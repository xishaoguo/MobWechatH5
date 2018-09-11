define(['utils','store'],function(utils,store){

	var params = {
			_self:this,
			isGroupBook:false,
			isSpecial:false,//是否是特价列表
			initNewOrder: function(store) {
				this.costcenterinfName = null;
				this.order = this.orderTemplate;
				//app.params.isNew=true;
				this.order.submitDirectly = store.getMyInfo().autotopend || 0;
				this.order.journeyNo = -1;
				this.order.jourState = -1;
				this.order.airItemInfoList = [];
				this.order.hotelItemInfoList=[];//清空酒店单元数据
				/*差旅政策*/
				if (store.getMyInfo().travelPolicyInfo) {
					this.order.travelPolicyId = store.getMyInfo().travelPolicyInfo.travelid; //差旅政策id 
				}
				/*预订人相关信息 */
				this.order.bookerId = store.getMyInfo().obtUserId; //预定人对应的OBT用户ID
				this.order.bookerName = store.getMyInfo().name; //预定人对应的常客信息中的姓名	    
				this.order.bookerParId = store.getMyInfo().parId; //预定人对应的常客信息中常客ID
				this.order.serviceCodeId = store.getMyInfo().serviceCodeId;
				this.order.serviceCode = store.getMyInfo().serviceCode;
				
				this.order.travelPolicyId = store.getMyInfo().travelPolicyId; //差旅政策id

				/*预订人相关信息 */
				/*this.order.bookerId = store.getMyInfo().obtUserId; //预定人对应的OBT用户ID
				this.order.bookerName = store.getMyInfo().name; //预定人对应的常客信息中的姓名	    
				this.order.bookerParId = store.getMyInfo().parId;//预定人对应的常客信息中常客ID
				this.order.serviceCodeId = store.getMyInfo().serviceCodeId;
				this.order.serviceCode = store.getMyInfo().serviceCode;*/
				
				this.order.description = null;
				this.order.travelPurpose = null;
				if(this.order.journeyDescription){
					this.order.journeyDescription=null;
				}
			},
			query:{
				journeyType: "1", //行程类型		
				depApt:'', //起飞机场三字码
				arrApt: '', //到达机场三字码
				depDate:'',
				retDate:'',
				depTime: '',
				retTime: '',
				agentId: '', //代理人id
				direct: "Y", //是否直达 Y
				orgCode:'', //所属公司编码
				userNum: 1, //旅客数量
				userType: "AD", //旅客类型
				policyInfo: {}, //差旅政策信息对象
				corpId:''
			},
			
			//我的订单临时数据
			myOrderTempData:{
				allTempData:[],
				planTempData:[],
				apverTempData:[],
				submitTempData:[],
				finishTempData:[]
			},
			//审批列表临时数据
			apverListTempData:{
				waitApverTempData:[],
				passApverTempData:[],
				refuseApverTempData:[]
			},
			
			/**
			 * 临时定单数据
			 */
			orderTemplate: {
				/*基本信息*/
				journeyNo: -1, //行程主键
				agentId: 0, //代理商ID
				createTime: 0, //行程的创建时间		
				description: "", //行程的描述信息	
				jourState: -1, //行程状态（0-已取消，1-计划中，2-审批中，3-已通过，4-已拒绝，5-待订妥，6-已订妥）		    
				stateUpTime: 0, //行程状态改变的最后时间		   
				di: "d", //国际国内标识（d-国内，i-国际）
				submitDirectly: 1, //标记审批通过后是否自动提交订单 （0 - 不直接提交 1 - 直接提交）
				travelPurpose: "", //旅行目的,数据来源于公司信息内

				/*成本中心*/
				costCenterId: "", //所使用的成本中心ID
				costCenterInfo: "", //所使用的成本中心信息

				/*邮件设置*/
				needMailPassenger: "0", //是否给乘机人发邮件 （0 - 不需要 1 - 需要）
				icsAttachment: "", //附件路径

				/*差旅政策*/
//				travelPolicyId: _self.store.getMyInfo().travelPolicyId, //差旅政策id
//
//				/*预订人相关信息 */
//				bookerId: _self.store.getMyInfo().obtUserId, //预定人对应的OBT用户ID
//				bookerName: _self.store.getMyInfo().name, //预定人对应的常客信息中的姓名	    
//				bookerParId: _self.store.getMyInfo().parId, //预定人对应的常客信息中常客ID
//				serviceCodeId: _self.store.getMyInfo().serviceCodeId,
//				serviceCode: _self.store.getMyInfo().serviceCode,
				
				/*差旅政策*/
				travelPolicyId: '', //差旅政策id

				/*预订人相关信息 */
				bookerId:'', //预定人对应的OBT用户ID
				bookerName: '', //预定人对应的常客信息中的姓名	    
				bookerParId: '', //预定人对应的常客信息中常客ID
				serviceCodeId: '',
				serviceCode: '',

				/*审批信息*/
				apvRuleId: "", //所有使用的审批规划Id
				apverLevel: "1", //审批人的级别
				apverParId: "", //当前审批人的常客Id
				oriApverParId: "", //原审批人(被代理人)的parId
				selectedApvers: "", //已选的审批人列表（审批链）(如：ID1,ID2,ID3,ID4)

				/*移动OBT使用不到字段*/
				ticketNumber: "", //票号，机票的唯一标识
				ccRemark: "", //TODO 待定
				emailType: "", //邮件类型 TODO：待确认
				/*TODO 待定*/
				psgRemark: "", //psg备注
				tcRemark1: "", //tc备注1
				tcRemark2: "", //tc备注2
				tcRemark3: "", //tc备注3
				tcRemark4: "", //tc备注4		    
				tcRemark5: "", //tc备注5		    
				tcRemark6: "", //tc备注6

				/*航空单元列表*/
				airItemInfoList: [],
				/*酒店单元列表*/
				hotelItemInfoList:[]
			},
			
			//我的行程
			myTripListTempData:[],
			
			/**
			 * 当前订单数据
			 */
			order: {},
			//存储home页行程数据和未审批订单条数
			home:{
				'journeyData':null,
				'reviewData':0
			},
			
			//标识当前是不是一个全新的订单
			isNew: true,
			//标识当前是不是一个个人型
			isPersonal: true,
			//选择的航班列表
			selectedResult: {},
			//参考最低价选择列表
			selectedLowetResult:{},
			//原航班和参考最低价混和列表
			hybridResult:{},
			//判断当前航段是原航班还是参考最低价航班
			/**
			 * {当前航段索引 ：是否是预订最低价价航班true,还是原航班false}
			 * 
			 * 单程： [{1:true}],[{1:false}]
			 * 
			 * 往返： [{1:true}，{2:true}]
			 * 		[{1:false}，{2:false}]
			 *		[{1:true}，{2:false}]
			 * 		[{1:false}，{2:true}]
			 */
			sementCase:[],
			//选择的乘机人列表
			selectedUserList: [],
			costcenterinfId:-1,
			costcenterinfName: false,
			costcenterinf: false,//add 2014-2-8
			amexParams:{},//运通策略参数 add 2014-5-13
			amexHotelParams:{},//运通酒店部分策略参数 add 2014-6-12
			amexPolicyUserId:null,//运通多人预订策略id add 2014-5-20
			amexSubmit:{
			    journeyNo:-1, 			//"订单号"
			    policyApplied: false, 	//"false/true"
			    contrContent:'',
			    contrContentEn:'',
			    contrReason:'',
			    contrReasonEn:'',
			    submitTAData: {
			        companyCode: "",	//服务代码
			        taNo: "", 		//amexOrderNo
			        userId:"",
			        approvalConfig: {}, //"reasonCode": ResultHandlerDto.id#ReasonCodeDto.id
			        tamasterOrderSubmitNeedDataVo: {
			            ta_master_order_no: '',		//amexOrderNo
			            ta_master_purpose: '',		//SelectDataDto.dataValue_foreShowCN$SelectDataDto.dataValue_foreShowEN
			            ta_master_costcenter: '',	//SelectDataDto.dataValue
			            ta_master_orderTotalFare: '',//null
			            ta_master_orderProductCode: '',//SelectDataDto.dataValue
			            ta_master_issue_ticket_mode: 'Y'//Y/N
			        },
			        customControlSaveDataItemVo: {
			            ta_master_remark: '',//存输入内容
			            custom_control_item1: '',
			            custom_control_item2: '',
			            custom_control_item3: '',
			            custom_control_item4: '',
			            custom_control_item5: '',
			            custom_control_item6: '',
			            custom_control_item7: '',
			            custom_control_item8: '',
			            approveTypeChoose: '',//待定
			            selectTypes: '',//按顺序存select类型框的id(CustomControlDto.id，CustomControlDto.id)
			            selectItems: '',//按顺序存select类型框的选项id(SelectDataDto.id，SelectDataDto.id)
			        }
			    }
			},
			/**
			 * 航班预订临时常旅客卡信息
			 */
			memCard:{
				memCard1:'',
				memCard2:''
			},
			//当前查询的航班结果
			queryResult: {
				flightLists: {}
			},
			//嘉信现有公司的差旅政策优化：全天的情况下，以航班为基准叠加时间窗口来判断最低价航班列表
			queryLowestResult:{},
			orderInfoUseMode: 'order',
			//审批节点单
			review: {
				ruleData: {}, //一级审批:8a86a41a3359390d013362c82fd85644 二级审批:8a86a41a3359390d013362c82fd85643
				apverLevel: -1,
				selectedResult: {}
			},
			flight_list_segmentIndex:1,
			//查询审批人
			selectedAproval:{
				level:1,
				data:[],
				apverUser:'',
			},
			//已选审批人 data里包含level , apverUser
			selectedApver:{
				data:[],
			},
			/**
			 * 选择审批人临时旅行目的 和 行程说明
			 */
			tempNode:{
				travelPurpose:'',
				otherReason:'',
				tripDesc:'',
			},
			/**
			 * 订单详情页选择乘机人信息
			 */
			selectPsgrInfo:{
				parIdx:'',
				userInfo:'',
			},
			/**
			 * 清空审批人临时旅行目的 和 行程说明
			 */
			clearTempNode:function(){
				var self = this;
				self.tempNode.travelPurpose = '';
				self.tempNode.otherReason = '';
				self.tempNode.tripDesc = '';
			},
			/**
			 * 航班动态信息临时参数
			 */
			flight_trends:{
				type:1,
				flag:1,
			},
			//新建常客
			newPsrs:false,
			//修改常客
			modifyPsrs:false,
			order_info_otherReason:{
				selectedIndex:0,//订单详情违背差旅政策原因索引
				des:'',//其他原因描述
			},
			isTicketImmediately:0,//订单详情是否立即出票
			//明日航空临时数据
			miriTempData:{
				book1:'',
				book2:'',
				book3:'',
				book4:'',
				book5:0,
				book6:'',
			},
			toOrderInfo:1,//1-flight_list 2-flight_special 3-order_list 4-review_list
			hotCity:["PEK","CAN","CKG","CTU","PVG","SHA","XIY","SZX","WUH","XMN"],
			/**
			 * 从机票判断存储酒店默认值
			 */
			order_hotel:{
				arriveStn:'',//入住城市三字码
				arrDate:'',//入住日期
				depDate:'',//离店日期
			},
			/**
			 * 提前选座当前票面信息
			 */
			nowTicket:{
//				    airCd: "",
//					airScn: "",
//					airScnNum: "",
//					arAirport: "",
//					arCity: "",
//					arCode: "",
//					arDate: "",
//					arTerminal: "",
//					arTime: "",
//					arWeek: "",
//					attontionContext: "",
//					buttonContext: "",
//					buttonStatus: "",
//					cabin: "",
//					cardLevel: "",
//					childCabin: "",
//					childPlantype: "",
//					couponId: "",
//					couponNumber: "",
//					deAirpot: "",
//					deCity: "",
//					deCode: "",
//					deDate: "",
//					deTerminal: "",
//					deTime: "",
//					deWeek: "",
//					ffNumber: "",
//					fltNumber: "",
//					gate: "",
//					idNumber: "",
//					isFlightInit: "",
//					mainCabin: "",
//					opAirCode: "",
//					opAirCodeFltNumber: "",
//					opFltNumber: "",
//					passengerName: "",
//					passengerType: "",
//					planetype: "",
//					pnr: "",
//					price: "",
//					ticketNumber: "",
			},
			operating:"",//1：预选座 2:值机
			/**
			 * 当前取消选座票面信息
			 */
			nowCancelTicket:{
				
			},
			/**
			 * 取消值机用户信息
			 */
			cancelUserInfo:{
				
			},
			/**
			 * 我的座位航班列表
			 */
			myFlightInfo:{
				
			},
			/**
			 * 我的座位当前航班卡
			 */
			nowMyFlightInfo:{
				
			},
			/**
			 * 同行人航班列表
			 */
			othersFlightInfo:{
				
			},
			/**
			 * 行程轨迹参数
			 */
			guideRsp:{
				
			},
			/**
			 * 计数：预留/选座旅客数量，最多4人，默认本人1人
			 */
			travelerCount:1,
			/**
			 * 当前旅客证件类型
			 */
			certType:"",
			/**
			 * 记录当前操作1：本人航班卡 2：同行人航班卡
			 */
			mySeatType:1,
			/**
			 * 乘客须知、危险品公告标志位 1:乘客须知 2:危险品公告
			 */
			informationType:1,
	};
	return params;
});