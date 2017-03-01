var deitersFactories = angular.module('deitersFactories', []);

deitersFactories.factory('bakuro', [
  '$http',
  function($http) {
    var o = {
      bakuro: []
    };
    o.get = function() {
      return $http.get('/bakuro').then(function(res) {
        return res.data;
      });
    };
    return o;
  }
]);

deitersFactories.factory('projects', [
  '$http',
  function($http) {
    var o = {
      projects: []
    };
    o.get = function() {
      return $http.get('/projects').then(function(res) {
        return res.data;
      });
    };
    return o;
  }
]);
