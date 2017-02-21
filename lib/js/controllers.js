var deitersCtrls = angular.module('deitersCtrls', []);

var getSections = function () {
  var photo = angular.element(document.getElementById('photographer'))[0];
  var about = angular.element(document.getElementById("about"))[0];
  var dev = angular.element(document.getElementById("developer"))[0];

  return [photo, about, dev];
};

var removeClasses = function(elements) {
  var classes = ['photographer', 'about', 'developer', 'cover--photographer', 'cover--about',
  'cover--developer', 'about-top', 'about-bottom', 'p-hover-about', 'd-hover-about', 'active--photographer', 'active--about', 'active--developer'];

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    for (var j = 0; j < classes.length; j++) {
      element.classList.remove(classes[j]);
    }
  }
};

var openLanding = function() {
  var sections = getSections();
  removeClasses(sections);
  sections[0].classList.add('cover--photographer');
  sections[1].classList.add('cover--about');
  sections[2].classList.add('cover--developer');
};

var openPhotography = function() {
  var sections = getSections();
  removeClasses(sections);
  sections[0].classList.add('active--photographer');
  sections[1].classList.add('about', 'about-bottom');
  sections[2].classList.add('developer');
};

var openAbout = function() {
  var sections = getSections();
  removeClasses(sections);
  sections[0].classList.add('photographer');
  sections[1].classList.add('active--about');
  sections[2].classList.add('developer');
};

var openDeveloper = function() {
  var sections = getSections();
  removeClasses(sections);
  sections[0].classList.add('photographer');
  sections[1].classList.add('about', 'about-top');
  sections[2].classList.add('active--developer');
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

    $scope.photoHoverIn = function() {
      var about = angular.element(document.getElementById('about'))[0];

      if (about.classList.contains('about-top')) {
        about.classList.toggle('p-hover-about', true);
      }
    };

    $scope.photoHoverOut = function() {
      var about = angular.element(document.getElementById('about'))[0];

      if (about.classList.contains('about-top')) {
        about.classList.toggle('p-hover-about', false);
      }
    };

    $scope.devHoverIn = function() {
      var about = angular.element(document.getElementById('about'))[0];

      if (about.classList.contains('about-bottom')) {
        about.classList.toggle('d-hover-about', true);
      }
    };

    $scope.devHoverOut = function() {
      var about = angular.element(document.getElementById('about'))[0];

      if (about.classList.contains('about-bottom')) {
        about.classList.toggle('d-hover-about', false);
      }
    };
  }
]);
