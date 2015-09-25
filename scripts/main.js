'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
var SpotModel = require('./models/SpotModel.js');
var RestaurantModel = require('./models/RestaurantModel.js');
var UserModel = require('./models/UserModel.js');

console.log('Models loaded');

// var SpotCollection = require('./collections/SpotCollection.js');
// var RestaurantCollection = require('./collections/RestaurantCollection.js');
// var UserCollection = require('./collections/UserCollection.js');


$(document).ready(function() {

    console.log('document is ready');
    var $login = $('#login');
    var $restaurants = $('#restaurants');
    var $parkingSpots = $('#parking_spots');

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

});
