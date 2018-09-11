define(['jquery'],function($){
	var SGSelectPanel = function(){
		var self = this;
		var html = '<ul class="refuse-panel">';
		html += '</ul>';
		self.rootEl = $(html);
		self.maskEl = $('<div class="select-mask"></div>');
		/**
		绑定遮罩层点击消失事件
		**/
		self.maskEl.unbind('click').bind('click',function(){
			self.hide();
			self.hideMask();
		});
	}
	
	SGSelectPanel.prototype = {
		/**
		初始化显示面板弹出数组
		**/
		reasonArray:null,
		/**
		选择面板根元素
		**/
		rootEl:null,
		/**
		遮罩背景层
		**/
		maskEl:null,
		/**
		当前选中项的索引
		**/
		selectIndex:-1,
		setReasonArray:function(_reasonArray){
			var self = this;
			self.reasonArray = _reasonArray;
			//先将根元素清空
			self.rootEl.empty();
			for(var i = 0; i < self.reasonArray.length; i ++){
				var tmpReasonStr = self.reasonArray[i];
				var itemHtml = '<li><p>'+tmpReasonStr+'</p><div class="icon-bg icon-selected" style="display:none"></div></li>';
				self.rootEl.append(itemHtml);
			}
			self.initPositionPanel();
			$('body').append(self.rootEl);
		},
		/**
		初始化面板位置
		**/
		initPositionPanel:function(){
			var self = this;
			var bodyHeight = document.body.clientHeight;
			self.rootEl.css('top',bodyHeight+'px');
		},
		/**
		显示面板,回调方法返回当前选择的字符串内容
		**/
		show:function(_callback){
			var self = this;
			var bodyHeight = document.body.clientHeight;
			var height = self.rootEl.height();
			self.rootEl.animate({
				top:bodyHeight-height+'px'
			},'fast');
			self.showMask();
			
			self.initClickEvent(function(_selectTxt){
				setTimeout(self.hide(function(){
					_callback(_selectTxt);
				}),500);
			});
		},
		showMask:function(){
			var self = this;
			$('body').append(self.maskEl);
		},
		/**
		隐藏面板
		**/
		hide:function(_callback){
			var self = this;
			var bodyHeight = document.body.clientHeight;
			self.rootEl.animate({
				top:bodyHeight+'px'
			},'fast',function(){
				_callback();
			});
			self.hideMask();
		},
		hideMask:function(){
			var self = this;
			self.maskEl.detach();
		},
		/**
		清理
		**/
		clear:function(){
			var self = this;
			self.rootEl.remove();
			self.maskEl.remove();
		},
		/**
		初始化点击事件
		**/
		initClickEvent:function(_argCallBack){
			var self = this;
			self.selectIndex = -1;
			var list = self.rootEl.find('li');
			$.each(list,function(){
				
				$(this).click(function(){
					$(this).find('p').addClass('selected');
					$(this).find('.icon-selected').show();
					

					if(self.selectIndex != -1){
						list.eq(self.selectIndex).find('p').removeClass('selected');
						list.eq(self.selectIndex).find('.icon-selected').hide();
					}
					
					var tmpIndex = list.index($(this));
					self.selectIndex = tmpIndex;
					
					_argCallBack(self.reasonArray[self.selectIndex]);
				});
			});
		}
		
	}
	
	return SGSelectPanel;
});