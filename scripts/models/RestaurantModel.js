'use strict';
var Backbone = require('backbone');
module.exports = Backbone.Model.extend ({
	defaults: {
		_id: null,
		name: '',
		street_address: '',
		zipcode: '',
		restaurant_img: '',
	},

	urlRoot:'https://find-a-spot.herokuapp.com/',
	idAttribute: _id
});