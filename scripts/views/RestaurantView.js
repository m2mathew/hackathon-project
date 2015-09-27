'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('backbone/node_modules/underscore');
var RestaurantModel = require('../models/RestaurantModel.js');

module.exports = Backbone.View.extend({
    template: _.template($('#restaurant-list').html()),
    tagName: 'div',
    initialize: function(options) {
        _.bindAll(
            this,
            'render'
            );
        this.model.on('change', this.render);
        this.render();
    },
    render: function() {
        // var newSpot = this.model.get('spots');
        // console.log(newSpot);
        // $('header').show();
        // $('nav').show();
        // $('section').hide();
        // $restaurants.show();

        this.$el.html(this.template(this.model.toJSON()));

    },



});
