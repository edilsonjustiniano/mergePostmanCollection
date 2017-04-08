'use strict';

angular.module('mergePostmanCollectionApp')
.config(['$stateProvider', '$urlRouterProvider', '$qProvider',
function($stateProvider, $urlRouterProvider, $qProvider) {

    $qProvider.errorOnUnhandledRejections(false);
    $urlRouterProvider.otherwise('/home');

    $stateProvider
    .state('home', {
        url: '/home',
        views: {
            'main@': {
                templateUrl:'views/home.html',
                controller: 'HomeCtrl'
            }
        }
    })
    .state('merge', {
        url: '/merge',
        views: {
            'main@': {
                templateUrl:'views/merge/form.html',
                controller: 'MergeCtrl'
            }
        }
    })
    .state('about', {
        url: '/about',
        views: {
            'main@': {
                templateUrl:'views/about.html',
                controller: 'AboutCtrl'
            }
        }
    });

}]);
