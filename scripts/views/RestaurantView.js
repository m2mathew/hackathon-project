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
        this.$el.on('click', this.toggleSpot);
        this.model.on('change', this.render);
        this.render();
    },
    render: function() {
        $('header').show();
        $('nav').show();
        $('section').hide();
        $('#restaurants').show();
        console.log(this.$el);

        this.$el.html(this.template(this.model.toJSON()));
    },
    toggleSpot: function() {
        // var spotModel = new SpotModel(spot1);
        // if(!this.$el.available) {
        //     spotModel.save({
        //         available: true
        //     });
        //     this.$el.css({ background: '#D5D8DC' });
        //     console.log('Spot 1 taken');
        // }
        // else {
        //     spotModel.save({
        //         available: false
        //     });
        //     this.$el.css({ background: '#F5B041' });
        //     console.log('spot 1 is now yellow!');
        // }
    }
});
