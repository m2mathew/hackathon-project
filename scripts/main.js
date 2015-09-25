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
    var restaurantNameTemplate = _.template($('#restaurant-list').html());
    var restaurantDetailsTemplate = _.template($('#restaurant-details').html());

    var Router = Backbone.Router.extend({
        routes: {
            'restaurants': 'showRestaurants',
            'login': 'goToLogin'
        },
        showRestaurants: function() {
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
    restaurants.on('add', function(newRestaurantModel) {

        var newName = restaurantNameTemplate(newRestaurantModel.toJSON());
        var $newName = $(newName);
        // console.log(newName);

        $restaurants.append($newName);
        // console.log(newRestaurantModel);
        var newDetailName = restaurantDetailsTemplate(newRestaurantModel.toJSON());
        var $newDetailName = $(newDetailName);
        // console.log(newDetailName);


        $newName.on('click', function() {

            $restaurants.hide();
            $parkingSpots.show();
            console.log($newDetailName[0]);
            $parkingSpots.html('');
            $parkingSpots.append($newDetailName[0]);
        });

    });
});
