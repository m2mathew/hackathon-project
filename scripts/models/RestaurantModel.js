'use strict';
var Backbone = require('backbone');
module.exports = Backbone.Model.extend ({
	defaults: {
		_id: null,
		name: '',
		street_address: '',
	},

	urlRoot:'https://find-a-spot.herokuapp.com/',
	idAttribute: _id
});