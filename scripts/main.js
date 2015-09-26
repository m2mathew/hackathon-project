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
            '': 'showRestaurants',
            'restaurants': 'showRestaurants',
            'login': 'goToLogin'
        },
        showRestaurants: function() {
            console.log('restraurants link clicked');
            $('section').hide();
            $restaurants.show();
        },
        goToLogin: function() {
            console.log('login link clicked');
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
    var users = new UserCollection();
    var spots = new SpotCollection();

    // get the name of restaurant from each collection to put in the HTML element
    restaurants.fetch();
    restaurants.on('add', function(newRestaurantModel) {

        var newName = restaurantNameTemplate(newRestaurantModel.toJSON());
        var $newName = $(newName);

        $restaurants.append($newName);
        var newDetailName = restaurantDetailsTemplate(newRestaurantModel.toJSON());
        var $newDetailName = $(newDetailName);

        $newName.on('click', function() {
            $restaurants.hide();
            $parkingSpots.show();
            $parkingSpots.html('');
            $parkingSpots.append($newDetailName[0]);
        });
    });

    spots.fetch();
    spots.on('add', function() {
        console.log(this.model);

        var newSpotRestaurant = this.model.get('restaurant_name');
        var newSpot = this.model.get('spot_num');
        var availableSpot = this.model.get('available');


            if(availableSpot === false)
                this.model.set({
                    available: !this.model.get('available')
                });


    });


    // future user data interaction
    // users.fetch();
    // users.on('add', function() {
    //     console.log(this.models);
    //     this.render;
    // });


});
