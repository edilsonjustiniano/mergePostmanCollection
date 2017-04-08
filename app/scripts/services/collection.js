'use strict';

/**
* @ngdoc service
* @name mergePostmanCollectionApp.Creditcard
* @description
* # Creditcard
* Factory in the mergePostmanCollectionApp.
*/
angular.module('mergePostmanCollectionApp')
.factory('CollectionModel', ['$resource', function ($resource) {

    return $resource('/collections', null);
}]);
