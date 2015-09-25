'use strict';
var Backbone = require('backbone');
var SpotModel = require('../models/SpotModel');
module.exports = Backbone.Collection.extend ({
	model: SpotModel,
	url: 'https://find-a-spot.herokuapp.com/'
})