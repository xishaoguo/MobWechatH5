/**
The value of _root is an jquery object  which contains the navbar and its content.
The value of _navbarID is a string which represents the ID of the navbar.
The value of _contentIDArray is an array which represents the ID of the content.

The setSelect function can make the navbar and its content jump to the correct one. 
One parameter you must is a number which represent the index of the content array.
**/
define(['jquery'],function($){
	TabController = function(_root,_navbarID,_contentIDArray){
		
		if(_root == 'undefined' || typeof _root != 'object' || _root == null){
			return;
		}
		
		if(typeof _navbarID != 'string' || _navbarID == 'undefined'){
			return;
		}
		
		if(typeof _contentIDArray != 'object' || _contentIDArray.length == 0 || _contentIDArray == 'undefined'){
			return;
		}
		
		var that = this;
		
		that.lastSelectedIndex = 0;
		
		navbar = _root.find('#'+_navbarID);
		that.btns = navbar.find('li');
		
		that.contentArray = new Array();
		for(var i = 0; i < _contentIDArray.length ; i++){
			var tmpCon = _root.find('#'+_contentIDArray[i]);
			
			if(i == 0){
				tmpCon.css('display','');
			}else{
				tmpCon.css('display','none');
			}
			that.contentArray.push(tmpCon);
		}
		
		that.callback = null;
		that.delegate = null;
		that.selectedClass = null;
		
		$.each(that.btns,function(){
			
			$(this).click(function(){
				var selectIndex = that.btns.index($(this));
				
				that.contentArray[that.lastSelectedIndex].css('display','none');
				that.contentArray[selectIndex].css('display','');
				
				if(that.selectedClass != null){
					that.btns.eq(that.lastSelectedIndex).removeClass(that.selectedClass);
					that.btns.eq(selectIndex).addClass(that.selectedClass);
				}
				
				that.lastSelectedIndex = selectIndex;
				
				if(that.callback != null){
					that.callback(selectIndex,that.delegate);
				}
			});
		})
	};
	
	TabController.prototype = {
		
		setSelect:function(_index){
			
			if(typeof _index != 'number' || _index == 'undefined' || _index < 0 || _index >= this.contentArray.length){
				return;
			}
			
			if(this.selectedClass == '' || this.selectedClass == null || this.selectedClass == 'undefined'){
				this.btns.eq(this.lastSelectedIndex).children('a').removeClass('ui-btn-active');
				this.btns.eq(_index).children('a').addClass('ui-btn-active');
			}else{
				this.btns.eq(this.lastSelectedIndex).removeClass(this.selectedClass);
				this.btns.eq(_index).addClass(this.selectedClass);
			}
			
			
			this.contentArray[this.lastSelectedIndex].css('display','none');
			this.contentArray[_index].css('display','');
			this.lastSelectedIndex = _index;
		},
		getSelectedIndex:function(){
			return this.lastSelectedIndex;
		},
		setClickCallback:function(_callback){
			this.callback = _callback;
			
		},
		setDelegate:function(_delegate){
			this.delegate = _delegate;
		},
		setSelectedClass:function(_className){
			if(_className == '' || _className == null || _className == 'undefined'){
				return;
			}
			this.selectedClass = _className;
		}
		
	};
	
});
