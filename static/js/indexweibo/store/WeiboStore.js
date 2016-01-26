/*
Copyright (c) 2011-2012 Weizoom Inc
*/
var ProductDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter
var MicroEvent = require('../../util/MicroEvent')
// var assign = require('object-assign');

var WeiboStore = {
	name: 'WeiboStore',

	items: {},

	getAll: function() {
	    return this.items;
	  }

};
WeiboStore = MicroEvent.mixin(WeiboStore);
ProductDispatcher.register( function( payload ) {
	  switch( payload.eventName ) {
	    case 'init':
	      WeiboStore.items[payload.eventName]=payload.newItem.initData;
	      WeiboStore.trigger('change');
	      break;
	    case 'contentchange':
	      WeiboStore.items[payload.eventName]=payload.newItem;
	      WeiboStore.trigger('change');

	  }
	  return true;
	});
module.exports = WeiboStore;