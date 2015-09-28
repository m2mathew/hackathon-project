'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('backbone/node_modules/underscore');

var RestaurantView = require('./views/RestaurantView.js');
var SpotView = require('./views/SpotView.js');

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

    var restaurantDetailsTemplate = _.template($('#restaurant-details').html());

    var Router = Backbone.Router.extend({
        routes: {
            '': 'showRestaurants',
            'restaurants': 'showRestaurants',
            'login': 'goToLogin',
            'parking': 'restaurantDetails'
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
        },
        restaurantDetails: function(id) {
            console.log(id);
        }
    });

    var r = new Router();
    Backbone.history.start();

    var restaurants = new RestaurantCollection();
    var users = new UserCollection();
    var spots = new SpotCollection();

    // get the name of restaurant from each collection to put in the HTML element
    restaurants.fetch();
    spots.fetch();
    restaurants.on('add', function(newRestaurantModel) {

        var restView = new RestaurantView({ model: newRestaurantModel, collection: spots });
        $restaurants.append(restView.$el);

        var newRestaurantDetails = restaurantDetailsTemplate(newRestaurantModel.toJSON());
        var $newRestaurantDetails = $(newRestaurantDetails);

        // console.log($newRestaurantDetails.get());

        // when the restaurant name is clicked, show/hide these pages
        restView.$el.on('click', function() {
            $('header').show();
            $('nav').show();
            $('section').hide();
            $parkingSpots.html('');
            $parkingSpots.show();
            $parkingSpots.append($newRestaurantDetails[0]);

            var spotView = new SpotView({ model: newRestaurantModel });
            // $parkingSpots.append(spotView.$el);
            console.log(spotView.$el);

            var spot1 = newSpotsArray[0];

            var thisSpotId = spot1.id;
            var thisSpotAvailable = spot1.available;
            // if(spot1.available === true) {
            //     $(this).css('background', '#fff');
            //     console.log($(this));
            //     console.log('yayess!');
            // }
            console.log(thisSpotId, thisSpotAvailable);

            // if(thisSpotAvailable === true) {
            //     $($parking_spots).css({ background: '#D5D8DC' });
            //     }
            // if(thisSpotAvailable === false) {
            //     $(this).css({ background: '#F5B041' });
            // }

            var spot2 = newSpotsArray[1];
            var spot3 = newSpotsArray[2];
            var spot4 = newSpotsArray[3];
            var spot5 = newSpotsArray[4];
            var spot6 = newSpotsArray[5];
            var spot7 = newSpotsArray[6];
            var spot8 = newSpotsArray[7];

            var $spot1 = $('#parking_spot_1');
            var $spot2 = $('#parking_spot_2');
            var $spot3 = $('#parking_spot_3');
            var $spot4 = $('#parking_spot_4');
            var $spot5 = $('#parking_spot_5');
            var $spot6 = $('#parking_spot_6');
            var $spot7 = $('#parking_spot_7');
            var $spot8 = $('#parking_spot_8');

            $spot1.on('click', function() {
                console.log('spot1 was clicked');
                var spotModel = new SpotModel(spot1);

                console.log(thisSpotId, thisSpotAvailable);

                if(!thisSpotAvailable) {
                    spotModel.save({
                        available: true
                    });
                    $(this).css({ background: '#D5D8DC' });
                    console.log('Spot 1 taken');
                }
                else {
                    spotModel.save({
                        available: false
                    });
                    $(this).css({ background: '#F5B041' });
                    console.log('spot 1 is now yellow!');
                }
             });

            $spot2.on('click', function() {
                console.log('spot2 was clicked');
                var spotModel = new SpotModel(spot2);

                var thisSpotId = spot2.id;
                var thisSpotAvailable = spot2.available;

                console.log(thisSpotId, thisSpotAvailable);

                if(!thisSpotAvailable) {
                    spotModel.save({
                        available: true
                    });
                    $(this).css({ background: '#D5D8DC' });
                    console.log('Spot 2 taken');
                }
                else {
                    spotModel.save({
                        available: false
                    });
                    $(this).css({ background: '#F5B041' });
                    console.log('spot 2 is now yellow!');
                }
            });

            $spot3.on('click', function() {
                console.log('spot3 was clicked');
                var spotModel = new SpotModel(spot3);

                var thisSpotId = spot3.id;
                var thisSpotAvailable = spot3.available;

                console.log(thisSpotId, thisSpotAvailable);

                if(!thisSpotAvailable) {
                    spotModel.save({
                        available: true
                    });
                    $(this).css({ background: '#D5D8DC' });
                    console.log('Spot 3 taken');
                }
                else {
                    spotModel.save({
                        available: false
                    });
                    $(this).css({ background: '#F5B041' });
                    console.log('spot 3 is now yellow!');
                }
            });

            $spot4.on('click', function() {
                console.log('spot4 was clicked');
                var spotModel = new SpotModel(spot4);

                var thisSpotId = spot4.id;
                var thisSpotAvailable = spot4.available;

                console.log(thisSpotId, thisSpotAvailable);

                if(!thisSpotAvailable) {
                    spotModel.save({
                        available: true
                    });
                    $(this).css({ background: '#D5D8DC' });
                    console.log('Spot 4 taken');
                }
                else {
                    spotModel.save({
                        available: false
                    });
                    $(this).css({ background: '#F5B041' });
                    console.log('spot 4 is now yellow!');
                }
            });

            $spot5.on('click', function() {
                console.log('spot5 was clicked');
                var spotModel = new SpotModel(spot5);

                var thisSpotId = spot5.id;
                var thisSpotAvailable = spot5.available;

                console.log(thisSpotId, thisSpotAvailable);

                if(!thisSpotAvailable) {
                    spotModel.save({
                        available: true
                    });
                    $(this).css({ background: '#D5D8DC' });
                    console.log('Spot 5 taken');
                }
                else {
                    spotModel.save({
                        available: false
                    });
                    $(this).css({ background: '#F5B041' });
                    console.log('spot 5 is now yellow!');
                }
            });

            $spot6.on('click', function() {
                console.log('spot6 was clicked');
                var spotModel = new SpotModel(spot6);

                var thisSpotId = spot6.id;
                var thisSpotAvailable = spot6.available;

                console.log(thisSpotId, thisSpotAvailable);

                if(!thisSpotAvailable) {
                    spotModel.save({
                        available: true
                    });
                    $(this).css({ background: '#D5D8DC' });
                    console.log('Spot 6 taken');
                }
                else {
                    spotModel.save({
                        available: false
                    });
                    $(this).css({ background: '#F5B041' });
                    console.log('spot 6 is now yellow!');
                }
            });

            $spot7.on('click', function() {
                console.log('spot7 was clicked');
                var spotModel = new SpotModel(spot7);

                var thisSpotId = spot7.id;
                var thisSpotAvailable = spot7.available;

                console.log(thisSpotId, thisSpotAvailable);

                if(!thisSpotAvailable) {
                    spotModel.save({
                        available: true
                    });
                    $(this).css({ background: '#D5D8DC' });
                    console.log('Spot 7 taken');
                }
                else {
                    spotModel.save({
                        available: false
                    });
                    $(this).css({ background: '#F5B041' });
                    console.log('spot 7 is now yellow!');
                }
            });

            $spot8.on('click', function() {
                console.log('spot8 was clicked');
                var spotModel = new SpotModel(spot8);

                var thisSpotId = spot8.id;
                var thisSpotAvailable = spot8.available;

                console.log(thisSpotId, thisSpotAvailable);

                if(!thisSpotAvailable) {
                    spotModel.save({
                        available: true
                    });
                    $(this).css({ background: '#D5D8DC' });
                    console.log('Spot 8 taken');
                }
                if(thisSpotAvailable) {
                    spotModel.save({
                        available: false
                    });
                    $(this).css({ background: '#F5B041' });
                    console.log('spot 8 is now yellow!');
                }
            });

        });

        // create an array of objects with parking spot information
        var newSpotsArray = newRestaurantModel.get('spots');
        // console.log(newSpotsArray[0].available.toJSON());


        // for(var i = 0; i < newSpotsArray.lenth; i++) {

        //     }
        // }

    });
});
