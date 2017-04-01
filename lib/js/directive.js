var deitersDirec = angular.module('deitersDirec', []);

deitersDirec.directive(
  'slickSlider',
  function ($timeout, $document) {
    return {
      restrict: 'A',
      scope: {'data': '='},
      link: function(scope, element, attrs) {
        $timeout(function() {
          $(element).slick(scope.$eval(attrs.slickSlider));
        });
      }
    };
  }
);
