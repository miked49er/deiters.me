var deitersCtrls = angular.module('deitersCtrls', []);

deitersCtrls.controller('mainCtrl', [
  '$scope',
  function($scope) {
    $scope.projects = [
      {
        title:"Gwinnett Grizzly Maps",
        image: "images/projects/ggm.png",
        alt:"Gwinnett Grizzly Maps Interface",
        link:"https://ggcmaps.github.io"
      },
      {
        title:"Blackwing Sy_ths",
        image:"images/projects/syths.jpg",
        alt:"The Blackwing Application",
        link:"https://www.syths.io"
      }
    ];
  }
]);
