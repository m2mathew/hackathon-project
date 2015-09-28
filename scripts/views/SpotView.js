'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('backbone/node_modules/underscore');
var RestaurantModel = require('../models/RestaurantModel.js');

module.exports = Backbone.View.extend({
    template: _.template($('#restaurant-details').html()),
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
        this.$el.html(this.template(this.model.toJSON()));
        if(!this.model.attributes.spots[0].available){
            this.$el.css({ background: '#F5B041' });
        }
        console.log(this.model.attributes.spots[0].available);
    }
});

