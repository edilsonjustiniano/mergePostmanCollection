'use strict';

angular.module('mergePostmanCollectionApp.directives')
.directive('menuBar', [ function() {
    return {
        restrict: 'E',
        templateUrl : 'views/directives/menuBar.html',
        controller: ['$scope', function ($scope) {
            $scope.menuBar = {
                appTitle: 'Merge Collection App',
                buttons: [
                    {
                        state: 'home',
                        icon: 'home',
                        text: 'Home'
                    },
                    {
                        state: 'merge',
                        icon: 'swap',
                        text: 'Merge Collection'
                    },
                    {
                        state: 'about',
                        icon: 'thumb_up',
                        text: 'About'
                    }
                ]
            };
        }]
    };
}]);
