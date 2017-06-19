var app = angular.module('deiters', [
  'ui.router',
  'deitersFactories',
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
            controller: 'bakuroart',
            templateUrl: '/templates/photographer.html'
          }
        },
        resolve: {
          photo: function () {
            openPhotography();
          },
          bakuro: ['bakuro',
          function(bakuro) {
            return bakuro.get();
          }]
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
            controller: 'projectCtrl',
            templateUrl: '/templates/developer.html'
          },
          // 'prompt': {
          //   controller: 'mainCtrl',
          //   templateUrl: '/templates/prompt-dev.html'
          // }
        },
        resolve: {
          dev: function () {
            openDeveloper();
          },
          projects: ['projects',
          function(projects) {
            return projects.get();
          }]
        }
      });

      $locationProvider.html5Mode(true);
      $urlRouterProvider.otherwise('/');
  }
]);
