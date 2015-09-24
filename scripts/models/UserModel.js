'use strict';
var Backbone = require('backbone');
module.exports = Backbone.Model.extend ({
	defaults: {
		_id: null,
		first_name: '',
		last_name: '',
		email: '',
		password: '',
		profile: ''
	},

	urlRoot:'https://find-a-spot.herokuapp.com/',
	idAttribute: _id
}); 