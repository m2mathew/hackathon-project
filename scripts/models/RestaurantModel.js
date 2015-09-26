'use strict';
var Backbone = require('backbone');
module.exports = Backbone.Model.extend ({
	defaults: {
		id: null,
		name: '',
		street_address: '',
		zipcode: '',
		restaurant_img: '',
        spots: []
	},
	urlRoot:'https://find-a-spot.herokuapp.com/restaurants',
	idAttribute: 'id'
});
