'use strict';

/**
* @ngdoc function
* @name mergePostmanCollectionApp.controller:MergeCtrl
* @description
* # MergeCtrl
* Controller of the mergePostmanCollectionApp
*/
angular.module('mergePostmanCollectionApp')
.controller('MergeCtrl', ['$scope', '$mdDialog', '$mdToast', '$state', 'CollectionModel',
function ($scope, $mdDialog, $mdToast, $state, CollectionModel) {

    $scope.findCollections = function() {
        CollectionModel.query(function(collections) {
            $scope.collections = collections;
        });
    };

    $scope.generateCollection = function() {
        CollectionModel.save($scope.collections, $scope.successfulyGeneratedCollection, $scope.errorToGenerateCollection);
    };

    $scope.successfulyGeneratedCollection = function() {
        $mdToast.show(
            $mdToast.simple()
            .textContent('New collection successfuly generated!')
            .position('bottom right')
        );
        $scope.findCollections();
    };

    $scope.errorToGenerateCollection = function() {
        $mdToast.show(
            $mdToast.simple()
            .textContent('Error to generate collection!')
            .position('bottom right')
        );
        $scope.findCollections();
    };

    $scope.cancel = function() {
        $mdDialog
        .show($mdDialog.confirm({
            title: 'Confirm',
            textContent: 'All changes will be lost. Are you sure?',
            ok: 'Yes',
            cancel: 'No'
        }))
        .then(function() {
            $scope.findCollections();
        });
    };

    $scope.findCollections();
}]);
