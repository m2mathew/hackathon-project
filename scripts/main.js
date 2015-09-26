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
            '': 'showAllRestaurants',
            'restaurants': 'showRestaurants',
            'login': 'goToLogin'
        },
        showAllRestaurants: function() {
            console.log('Find a spot logo clicked');
            $('section').hide();
            $restaurants.show();
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
        // console.log(newRestaurantModel.attributes.restaurant_img);

        // adding data to the 'restaurant name' template
        var newName = restaurantNameTemplate(newRestaurantModel.toJSON());
        var $newName = $(newName);

        // adding data to the 'restaurant details' template
        $restaurants.append($newName);
        var newDetailName = restaurantDetailsTemplate(newRestaurantModel.toJSON());
        var $newDetailName = $(newDetailName);
        var newUrl = newRestaurantModel.attributes.restaurant_img;

        // when the restaurant name is clicked, show/hide these pages
        $newName.on('click', function() {
            $restaurants.hide();
            $parkingSpots.show();
            $parkingSpots.html('');
            $(this).css({ backgroundImage: newUrl });

            $parkingSpots.append($newDetailName[0]);
        });

        // create an array of objects with parking spot information
        var newSpotsArray = newRestaurantModel.get('spots');
        // console.log(newSpotsArray);

        var spot1 = newSpotsArray[0].id;
        var spot2 = newSpotsArray[1].id;
        var spot3 = newSpotsArray[2].id;
        var spot4 = newSpotsArray[3].id;
        var spot5 = newSpotsArray[4].id;
        var spot6 = newSpotsArray[5].id;
        var spot7 = newSpotsArray[6].id;
        var spot8 = newSpotsArray[7].id;

        /* target the restaurant id
         *      -> newSpotsArray[i].restaurant_id
         *
         * target the specific id for the spot
         *      -> newSpotsArray[i].id
         *
         * target the available boolean value of the spot
         *      -> newSpotsArray[i].available
         */

        $.ajax({
            type: 'PUT',
            url: 'http://find-a-spot.herokuapp.com/spots',
            data: {id: 1, available: false},
            success: function(response) {
                console.log(response);
            },
            error: function(response) {
                console.log(response);
            }
        });

        if(newRestaurantModel.attributes.name === 'Hopdoddy') {
            for(var i = 0; i < newSpotsArray.length; i++) {

                newSpotsArray[i].available = 'false';
                // console.log(newSpotsArray[i].available);

                // newRestaurantModel.save();

                // if(newSpotsArray[i].available === true){
                //     // console.log( 'YEAH!!!!');
                // }
            }
        }

        // model.set.css{textDecoriation: 'none'}

        // spots.fetch();
            // console.log(spots.models);

    });

    //     var newSpotRestaurant = this.model.get('restaurant_name');
    //     var newSpot = this.model.get('spot_num');
    //     var availableSpot = this.model.get('available');


    //         if(availableSpot === false)
    //             this.model.set({
    //                 available: !this.model.get('available')
    //             });


    // });


    // future user data interaction
    // users.fetch();
    // users.on('add', function() {
    //     console.log(this.models);
    //     this.render;
    // });


});
