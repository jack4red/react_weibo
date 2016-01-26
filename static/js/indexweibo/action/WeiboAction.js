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
	}
}

module.exports = WeiboAction;