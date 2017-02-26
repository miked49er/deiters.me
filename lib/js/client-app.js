var app = angular.module('deiters', [
  'ui.router',
  'deitersDirec',
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
        resolve: {
          home: function () {
            openLanding();
          }
        }
      })
      .state('photographer', {
        url: '/photographer',
        views: {
          'photographer': {
            templateUrl: '/templates/photographer.html'
          }
        },
        resolve: {
          photo: function () {
            openPhotography();
          }
        }
      })
      .state('about', {
        url: '/about',
        views: {
          'about': {
            templateUrl: '/templates/about.html'
          }
        },
        resolve: {
          about: function () {
            openAbout();
          }
        }
      })
      .state('developer', {
        url: '/developer',
        views: {
          'developer': {
            templateUrl: '/templates/developer.html'
          },
          'prompt': {
            templateUrl: '/templates/prompt-dev.html'
          }
        },
        resolve: {
          dev: function () {
            openDeveloper();
          }
        }
      });

      $locationProvider.html5Mode(true);
      $urlRouterProvider.otherwise('/');
  }
]);
