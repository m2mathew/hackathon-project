'use strict';
var Backbone = require('backbone');
module.exports = Backbone.Model.extend ({
	defaults: {
		_id: null,
		spot_num: null,
		available: true,
		restaurant_id: null,
		user_id: null,
	},

	urlRoot:'https://find-a-spot.herokuapp.com/',
	idAttribute: '_id'
});