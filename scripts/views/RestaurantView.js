'use strict';

var Backbone = require('backbone');
var _ = require('backbone/node_modules/underscore');
var RestaurantModel = require('../models/RestaurantModel.js');

module.exports = Backbone.View.extend({

    className: 'parking_lot_wrapper',
    initialize: function() {
        _.bindAll(
            this,
            'render',
            'toggleSelectSpot'
            );
        this.$el.on('click', this.toggleSelectSpot);
        console.log(this.model);
        // this.model.on('change', this.render);
        this.render();
    },
    render: function() {
        var newSpot = this.model.get('spots');
        console.log(newSpot);
        $('header').show();
        $('nav').show();
        $('section').hide();
        $restaurants.show();
    },
    toggleSelectSpot: function() {
        this.model.set({
            available: !this.model.get('available')
        });
    }
});
