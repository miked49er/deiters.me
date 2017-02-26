var deitersDirec = angular.module('deitersDirec', []);

deitersDirec.directive(
  "scrollEv",
  function () {
    return {
      restrict: 'A',
      link: function(scope,elem,attrs) {
        elem.on('scroll', function(e) {
          var x = e.hasOwnProperty('offsetX') ? e.offsetX : e.layerX;
          var y = e.hasOwnProperty('offsetY') ? e.offsetY : e.layerY;
          console.log(x + ':' + y);
        });
      }
    };
});

deitersDirec.directive(
  "myScroll",
  function ($window, $document) {
    return {
      restrict: 'A',
      link: function(scope,elem,attrs) {
        elem.on('scroll', function(e) {
          // console.log(elem);
          // $document[0].body.animate({scrollTop: elem.offset().top}, 'slow');
          $window.scrollTo(0, 1000);
          console.log($window.pageYOffset);
        });
      }
    };
});
