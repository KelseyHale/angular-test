'use strict';

/**
 * @ngdoc overview
 * @name testApp
 * @description
 * # testApp
 *
 * Main module of the application.
 */
angular
  .module('testApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/One', {
        templateUrl: 'views/One.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/Two', {
        templateUrl: 'views/Two.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/Three', {
        templateUrl: 'views/Three.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/Four', {
        templateUrl: 'views/Four.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/Five', {
        templateUrl: 'views/Five.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/Six', {
        templateUrl: 'views/Six.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/Home', {
        templateUrl: 'views/Home.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
