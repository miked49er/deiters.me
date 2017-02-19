var app = angular.module('deiters', [
  'ui.router',
  'deitersCtrls'
]);

app.config([
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider) {

    $stateProvider
      .state('/', {
        url: '/',
        controller: 'mainCtrl',
      })
      .state('photographer', {
        url: '/photographer',
        views: {
          'photographer': {
            templateUrl: '/templates/photographer.html'
          }
        }
      })
      .state('about', {
        url: '/about',
        views: {
          'about': {
            templateUrl: '/templates/about.html'
          }
        }
      })
      .state('developer', {
        url: '/developer',
        views: {
          'developer': {
            templateUrl: '/templates/developer.html'
          }
        }
      });

      $locationProvider.html5Mode(true);
      $urlRouterProvider.otherwise('/');
  }
]);
