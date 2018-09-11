/**
_root为page所在div,既通常的self.$el
_touchId为点击触发弹出框的元素id
_callback为点击面板每一项的回调方法
_animationType为判断显示的时候是从上往下还是从下往上，默认为从上往下,FromTop,FromBottom
**/

define(['jquery'],function($){
	SelectPanel = function(_root,_touchId,_callback,_animationType){
		var self = this;
		self.panel = _root.find('.select-panel');
		
		//初始状态隐藏面板
		self.panel.css('display','none');
		
		
		var contentDiv = _root.find('div[data-role="content"]');
		contentDiv.css('position','relative');
		
		
		self.touchObj = _root.find('#'+_touchId);
		
		var maskDiv = '<div class="select-mask"></div>';
		
		//显示隐藏事件
		/*self.touchObj.toggle(function(){
			self.showPanel();
			contentDiv.append(maskDiv);
			contentDiv.addClass('frosted-glass');
		},function(){
			self.hidePanel(function(){
				contentDiv.find('.select-mask').remove();
				contentDiv.removeClass('frosted-glass');
			});
			
		});*/
			
		self.touchObj.unbind('click').bind('click',function(){
			if(self.panel.css('display') == 'none'){
				self.showPanel();
				contentDiv.append(maskDiv);
				contentDiv.addClass('frosted-glass');
			}else{
				self.hidePanel(function(){
					contentDiv.find('.select-mask').remove();
					contentDiv.removeClass('frosted-glass');
				});
			}
		});
		
		
		var selectDiv = '<div class="icon-bg icon-selected"></div>';
		
		var panelItems = self.panel.find('li');
		var lastSelectIndex = 0;
		$.each(panelItems,function(){
			var li = $(this);
			li.click(function(){
				panelItems.eq(lastSelectIndex).find('.icon-selected').remove();
				panelItems.eq(lastSelectIndex).removeClass('selected-title');
				
				li.append(selectDiv);
				li.addClass('selected-title');
				lastSelectIndex = panelItems.index(li);
				
				self.selectIndex = panelItems.index(li);	
						
				self.touchObj.find('.top-select-title').text(li.text());
				//self.selectCallback(self.callback(self.selectIndex));
				_callback(self.selectIndex);
				
				self.hidePanel(function(){
					contentDiv.find('.select-mask').remove();
					contentDiv.removeClass('frosted-glass');
				});
			});
			
		});
		
	};
	
	SelectPanel.prototype = {
		selectedIndex:null,
		//点击触发面板显示或隐藏
		touchObj:null,
		//选择面板
		panel:null,
		//显示面板
		showPanel:function(){
			var self = this;
			self.panel.slideDown();
		},
		//隐藏面板
		hidePanel:function(_callback){
			var self = this;
			self.panel.slideUp(_callback);
		},
		//点击每一项时候的回调
		callback:function(){},
		selectCallback:function(callback){
			
		}
	};
})