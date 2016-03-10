'use strict';

/**
 * @ngdoc service
 * @name testApp.testFactory
 * @description
 * # testFactory
 * Factory in the testApp.
 */
angular.module('testApp')
  .factory('testFactory', function () {
    // Service logic
    // ...

    var items = ["Home", "One", "Two", "Three", "Four", "Five", "Six"];

    // Public API here
    return {
      getMenu: function () {
        return items;
      }
    };
  });
