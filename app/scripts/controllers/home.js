'use strict';

/**
 * @ngdoc function
 * @name mergePostmanCollectionApp.controller:MainCtrl
 * @description
 * # HomeCtrl
 * Controller of the mergePostmanCollectionApp
 */
angular.module('mergePostmanCollectionApp')
  .controller('HomeCtrl', ['$scope', function ($scope) {
    $scope.welcomeMsg = "Welcome to your new app to merge Postman Collections";
  }]);
