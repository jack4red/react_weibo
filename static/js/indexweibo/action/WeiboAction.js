/*
Copyright (c) 2011-2012 Weizoom Inc
*/
var AppDispatcher = require('../dispatcher/AppDispatcher');

var WeiboAction = {
	contentInit:function() {
	    $.ajax({
	      url:'/init',
	      success:function(resp) {
	        AppDispatcher.dispatch({
	        	eventName: 'init',
        		newItem: { initData: resp.data }
        		 });
	      }
	    });
	},
	add:function(eventName,newItem) {
		AppDispatcher.dispatch({
	        	eventName: eventName,
        		newItem: newItem
        		 });
	},
	postcontent:function(postdata) {
		$.ajax({
			url:'/postdata',
			type:'POST',
			data:{data:postdata},
			success:function() {
				this.contentInit();
			}
		})
	}
}

module.exports = WeiboAction;