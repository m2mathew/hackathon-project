'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('backbone/node_modules/underscore');

var RestaurantView = require('./views/RestaurantView.js');

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
            'restaurant/:type/:id': 'restaurantDetails'
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
        restaurantDetails: function(type, id) {
            console.log('details', id);
        }
    });

    var r = new Router();
    Backbone.history.start();

    var restaurants = new RestaurantCollection();
    var users = new UserCollection();
    var spots = new SpotCollection();
    // var rest1 = new RestaurantView();


    // $('header').show();
    // $('nav').show();
    // $('section').hide();
    // $restaurants.show();

    // get the name of restaurant from each collection to put in the HTML element
    restaurants.fetch();
    spots.fetch();
    restaurants.on('add', function(newRestaurantModel) {
        // console.log(newRestaurantModel.attributes.restaurant_img);

        var restView = new RestaurantView({ model: newRestaurantModel, collection: spots });
        $restaurants.append(restView.$el);


        var newDetailName = restaurantDetailsTemplate(newRestaurantModel.toJSON());
        var $newDetailName = $(newDetailName);

        // when the restaurant name is clicked, show/hide these pages
        restView.$el.on('click', function() {
            $restaurants.hide();
            $parkingSpots.show();
            $parkingSpots.html('');

            $parkingSpots.append($newDetailName[0]);

            var spot1 = newSpotsArray[0];

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
                spotModel.save({
                    available: false
                });
                $(this).toggleClass('taken');
             });

            $spot2.on('click', function() {
                console.log('spot2 was clicked');
            });

            $spot3.on('click', function() {
                console.log('spot3 was clicked');
            });

            $spot4.on('click', function() {
                console.log('spot4 was clicked');
            });

            $spot5.on('click', function() {
                console.log('spot5 was clicked');
            });

            $spot6.on('click', function() {
                console.log('spot6 was clicked');
            });

            $spot7.on('click', function() {
                console.log('spot7 was clicked');
            });

            $spot8.on('click', function() {
                console.log('spot8 was clicked');
            });

        });

        // create an array of objects with parking spot information
        var newSpotsArray = newRestaurantModel.get('spots');
        console.log(newSpotsArray);


        // var spot2 = newSpotsArray[1].id;
        // var spot3 = newSpotsArray[2].id;
        // var spot4 = newSpotsArray[3].id;
        // var spot5 = newSpotsArray[4].id;
        // var spot6 = newSpotsArray[5].id;
        // var spot7 = newSpotsArray[6].id;
        // var spot8 = newSpotsArray[7].id;

        /* target the restaurant id
         *      -> newSpotsArray[i].restaurant_id
         *
         * target the specific id for the spot
         *      -> newSpotsArray[i].id
         *
         * target the available boolean value of the spot
         *      -> newSpotsArray[i].available
         */

        // console.log($('this'));


        // if(newRestaurantModel.attributes.name === 'Hopdoddy' && newSpotsArray[0].id === 2) {
        //     $.ajax({
        //         type: 'PUT',
        //         url: 'http://find-a-spot.herokuapp.com/spots/1',
        //         data: {available: false},
        //         success: function(response) {
        //             console.log(response);
        //         },
        //         error: function(response) {
        //              console.log(response);
        //         }
        //     });
        // };

        // if(newRestaurantModel.attributes.name === 'Hopdoddy') {
        //     for(var i = 0; i < newSpotsArray.length; i++) {

        //         // newSpotsArray[i].available = '';
        //         // console.log(newSpotsArray[i].available);



        //         // if(newSpotsArray[i].available === true){
        //         //     // console.log( 'YEAH!!!!');
        //         // }
        //     }
        // }
    });
});
