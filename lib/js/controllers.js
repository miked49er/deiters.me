var deitersCtrls = angular.module('deitersCtrls', []);

var getSections = function () {
  var photo = angular.element(document.getElementById('photographer'))[0];
  var about = angular.element(document.getElementById("about"))[0];
  var dev = angular.element(document.getElementById("developer"))[0];
  var contact = angular.element(document.getElementById('contact'))[0];

  return [photo, about, dev, contact];
};

var removeClasses = function(elements) {
  var classes = ['photographer', 'about', 'developer', 'cover--photographer', 'cover--about', 'cover--developer', 'about-photo', 'about-dev', 'p-hover-about', 'd-hover-about', 'active--photographer', 'active--about', 'active--developer', 'contact-photo', 'contact-about', 'hide', 'active'];

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
  sections[3].classList.add('hide');
};

var openPhotography = function() {
  var sections = getSections();
  removeClasses(sections);
  sections[0].classList.add('active--photographer');
  sections[1].classList.add('about', 'about-dev');
  sections[2].classList.add('developer');
  sections[3].classList.add('active', 'contact-photo');
};

var openAbout = function() {
  var sections = getSections();
  removeClasses(sections);
  sections[0].classList.add('photographer');
  sections[1].classList.add('active--about');
  sections[2].classList.add('developer');
  sections[3].classList.add('active', 'contact-about');
};

var openDeveloper = function() {
  var sections = getSections();
  removeClasses(sections);
  sections[0].classList.add('photographer');
  sections[1].classList.add('about', 'about-photo');
  sections[2].classList.add('active--developer');
  sections[3].classList.add('active');
};

deitersCtrls.controller('mainCtrl', [
  '$scope',
  '$window',
  function($scope, $window) {

    $scope.launchPhoto = function() {
      history.pushState(null, null, 'photographer');
    };

    $scope.launchAbout = function() {
      history.pushState(null, null, 'about');
    };

    $scope.launchDev = function() {
      history.pushState(null, null, 'developer');
    };

    $scope.photoHoverIn = function() {
      var about = angular.element(document.getElementById('about'))[0];

      if (about.classList.contains('about-photo')) {
        about.classList.toggle('p-hover-about', true);
      }
    };

    $scope.photoHoverOut = function() {
      var about = angular.element(document.getElementById('about'))[0];

      if (about.classList.contains('about-photo')) {
        about.classList.toggle('p-hover-about', false);
      }
    };

    $scope.devHoverIn = function() {
      var about = angular.element(document.getElementById('about'))[0];

      if (about.classList.contains('about-dev')) {
        about.classList.toggle('d-hover-about', true);
      }
    };

    $scope.devHoverOut = function() {
      var about = angular.element(document.getElementById('about'))[0];

      if (about.classList.contains('about-dev')) {
        about.classList.toggle('d-hover-about', false);
      }
    };

    $scope.contactOpen = function() {
      var contact = angular.element(document.getElementById('contact'))[0];

      contact.classList.toggle('contact-active', true);
    };

    $scope.contactClose = function($event, element) {
      var target = angular.element(document.getElementById(element))[0];
      // Checks if the $event.target is a descendant of the element
      if (!isDescendant(target, $event.target) && target.classList.contains('contact-active')) {
        target.classList.toggle('contact-active');
      }
    };

    // Checks the parent of child until it either finds parent otherwise returns false
    function isDescendant(parent, child) {
      var node = child.parentNode;
      while (node !== null) {
        if (node === parent) {
          return true;
        }
        node = node.parentNode;
      }
      return false;
    }
  }
]);

deitersCtrls.controller('bakuroart', [
  '$scope',
  'bakuro',
  function($scope, bakuro) {
    $scope.bakuro = bakuro;
  }
]);

deitersCtrls.controller('projectCtrl', [
  '$scope',
  'projects',
  function($scope, projects) {
    $scope.projects = projects.projects;

    function hidePrompt(e) {
      var prompt = document.getElementById('prompt');
      var distanceY = window.pageYOffset;

      if (e.deltaY > 0 || distanceY > 0) {
        prompt.classList.add('prompt-hide');
      }
      else if (e.deltaY < 0 || distanceY < 0) {
        prompt.classList.remove('prompt-hide');
      }
    }

    $scope.moreInfo = function(id) {
      var project = document.getElementById(id);
      project.classList.add('expand');
    };

    $scope.close = function(id) {
      var project = document.getElementById(id);
      project.classList.remove('expand');
    };

    // window.onmousewheel = document.onmousewheel = hidePrompt;
    // window.onwheel = hidePrompt;
    // window.ontouchmove = hidePrompt;
    // document.onkeydown = hidePrompt;
  }
]);
