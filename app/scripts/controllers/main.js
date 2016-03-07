'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('MainCtrl', function ($scope) {
    $scope.items = [
      'Home',
      'One',
      'Two',
      'Three',
      'Four',
      'Five',
      'Six'    ];
  });
