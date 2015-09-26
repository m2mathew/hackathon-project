'use strict';
var Backbone = require('backbone');
module.exports = Backbone.Model.extend ({
	defaults: {
		id: null,
		spot_num: null,
		available: true,
		restaurant_id: null,
		user_id: null
	},
	urlRoot:'http://find-a-spot.herokuapp.com/spots',
	idAttribute: 'id'
});
