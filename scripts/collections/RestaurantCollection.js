'use strict';
var Backbone = require('backbone');
var RestaurantModel = require('../models/RestaurantModel');
module.exports = Backbone.Collection.extend ({
	model: RestaurantModel,
	url: 'https://find-a-spot.herokuapp.com/',
})