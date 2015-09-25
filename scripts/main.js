'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('backbone/node_modules/underscore');

var SpotModel = require('./models/SpotModel.js');
var RestaurantModel = require('./models/RestaurantModel.js');
var UserModel = require('./models/UserModel.js');

var SpotCollection = require('./collections/SpotCollection.js');
var RestaurantCollection = require('./collections/RestaurantCollection.js');
var UserCollection = require('./collections/UserCollection.js');

$(document).ready(function() {

    var $login = $('#login');
    var $restaurants = $('#restaurants');
    var $parkingSpots = $('#parking_spots');
    var restaurantTemplate = _.template($('#restaurant-list').html());

    var Router = Backbone.Router.extend({
        routes: {
            'home': "goHome",
            'login': "goToLogin"
        },
        goHome: function() {
            $('section').hide();
            $restaurants.show();
        },
        goToLogin: function() {
            $('section').hide();
            $login.show();
        }
    });

    var r = new Router();
    Backbone.history.start();

    $('header').show();
    $('nav').show();
    $('section').hide();
    $restaurants.show();

    var restaurants = new RestaurantCollection();

    // get the name of restaurant from each collection to put in the HTML element
    restaurants.fetch();
    restaurants.on('add', function(x) {
        var restaurantName = x.get('name');
        console.log(this);
        $('#restaurant-list').append(restaurantName);
        console.log(restaurantName);
    });




    $restaurants.on('click', function() {


        restaurantTemplate(model.toJSON());
        console.log(restaurantTemplate(model.toJSON()));

    // restaurantTemplate()


    });

});
