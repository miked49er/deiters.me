var deitersCtrls = angular.module('deitersCtrls', []);

var classes = ['photographer', 'about', 'developer', 'nav', 'navtab', 'nav-top', 'nav-bottom', 'about-top', 'about-bottom', 'photographer-hover', 'about-hover', 'developer-hover', 'photographer-active', 'about-active', 'developer-active'];

var removeClasses = function(elements) {

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    for (var j = 0; j < classes.length; j++) {
      element.classList.remove(classes[j]);
    }
  }
};

var openLanding = function() {
  var pNav = angular.element(document.getElementById('photographer'))[0];
  var aNav = angular.element(document.getElementById("about"))[0];
  var dNav = angular.element(document.getElementById("developer"))[0];

  removeClasses([pNav, aNav, dNav]);
  pNav.classList.add('photographer', 'nav');

  aNav.classList.add('about', 'nav');

  dNav.classList.add('developer', 'nav');
};

var openPhotography = function() {
  var pNav = angular.element(document.getElementById('photographer'))[0];
  var aNav = angular.element(document.getElementById("about"))[0];
  var dNav = angular.element(document.getElementById("developer"))[0];

  removeClasses([pNav, aNav, dNav]);
  pNav.classList.add("photographer-active");

  aNav.classList.add('navtab', 'about-bottom');

  dNav.classList.add('navtab', 'nav-bottom');
};

var openAbout = function() {
  var pNav = angular.element(document.getElementById('photographer'))[0];
  var aNav = angular.element(document.getElementById("about"))[0];
  var dNav = angular.element(document.getElementById("developer"))[0];

  removeClasses([pNav, aNav, dNav]);
  pNav.classList.add('navtab', 'nav-top');

  aNav.classList.add('about-active');

  dNav.classList.add('navtab', 'nav-bottom');
};

var openDeveloper = function() {
  var pNav = angular.element(document.getElementById('photographer'))[0];
  var aNav = angular.element(document.getElementById("about"))[0];
  var dNav = angular.element(document.getElementById("developer"))[0];

  removeClasses([pNav, aNav, dNav]);
  pNav.classList.add("navtab", "nav-top");

  aNav.classList.add('navtab', 'about-top');

  dNav.classList.add('developer-active');
};

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
