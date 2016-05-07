angular.module('MyApp', ['ngMaterial'])

/*Color Themes*/
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('cyan')
    .accentPalette('grey');
})

.controller('AppCtrl', function ($scope, $timeout, $mdSidenav, $mdUtil, $log, $mdDialog, $mdMedia) {

    $scope.status = '  ';
    $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');

    $scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');

    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    function buildToggler(navID) {
      var debounceFn =  $mdUtil.debounce(function(){
            $mdSidenav(navID)
              .toggle()
              .then(function () {
                $log.debug("toggle " + navID + " is done");
              });
          },300);

      return debounceFn;
    }

//Defining DialogController    
    function DialogController($scope, $mdDialog) {
      $scope.hide = function() {
        $mdDialog.hide();
      };
      $scope.cancel = function() {
        $mdDialog.cancel();
      };
      $scope.answer = function(answer) {
        $mdDialog.hide(answer);
      };
    }

// DIALOGS
    $scope.showLearnMore = function(ev) {
      var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
      $mdDialog.show({
        controller: DialogController,
        templateUrl: 'dialog-learnmore.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: useFullScreen
      });

      $scope.$watch(function() {
        return $mdMedia('xs') || $mdMedia('sm');
      }, function(wantsFullScreen) {
        $scope.customFullscreen = (wantsFullScreen === true);
      });
    };

    $scope.showSeeIt = function(ev) {
      var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
      $mdDialog.show({
        controller: DialogController,
        templateUrl: 'dialog-pack2.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: useFullScreen
      });

      $scope.$watch(function() {
        return $mdMedia('xs') || $mdMedia('sm');
      }, function(wantsFullScreen) {
        $scope.customFullscreen = (wantsFullScreen === true);
      });
    };
    

    $scope.showPack1 = function(ev) {
      var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
      $mdDialog.show({
        controller: DialogController,
        templateUrl: 'dialog-pack1.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: useFullScreen
      });

      $scope.$watch(function() {
        return $mdMedia('xs') || $mdMedia('sm');
      }, function(wantsFullScreen) {
        $scope.customFullscreen = (wantsFullScreen === true);
      });
    };

    $scope.showPack2 = function(ev) {
      var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
      $mdDialog.show({
        controller: DialogController,
        templateUrl: 'dialog-pack2.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: useFullScreen
      });

      $scope.$watch(function() {
        return $mdMedia('xs') || $mdMedia('sm');
      }, function(wantsFullScreen) {
        $scope.customFullscreen = (wantsFullScreen === true);
      });
    };
    
    $scope.showPack3 = function(ev) {
      var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
      $mdDialog.show({
        controller: DialogController,
        templateUrl: 'dialog-pack2.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: useFullScreen
      });

      $scope.$watch(function() {
        return $mdMedia('xs') || $mdMedia('sm');
      }, function(wantsFullScreen) {
        $scope.customFullscreen = (wantsFullScreen === true);
      });
    };

// UPCOMING EVENTS LIST
    $scope.events = [{
      what: '10x Moonshot Sprint',
      where: 'Capital One - Washington D.C.',
      when: 'Saturday, April 2nd, 2016',
      notes: "Challenges: Climate Change",
      linktext: "Click for Details",
      linkaddress: "http://events.teamexponent.com"
    }];

// ORGANIZER
    var imageOrganizer = 'images/katy4.jpg';
    $scope.organizer = [{
      face : imageOrganizer,
      who: "Katy Kasmai, MS, MBA",
      title: "Founder",
      details: "Katy is passionate about 10x thinking, moonshots, sustainability and the pursuit of change and innovation. She develops and executes strategies to solve complex problems using technology, with a focus on achieving product excellence. Katy is a senior level Engineering PM at Google, Inc., Founder of @TeamExponent and advocate for Exponential Education (10xEducation.org).",
      googleaddress: "http://www.google.com/+katykasmai",
      twitteraddress: "http://www.twitter.com/katykasmai",
      instaaddress: "http://www.instagram.com/katykasmai",
      linkedinaddress: "http://www.linkedin.com/in/katykasmai"
    }];

// SPONSORS
    var imageSponsor1 = 'images/grand-central-tech-logo.png';
    var imageSponsor2 = 'images/GD_article.gif';
    var imageSponsor3 = 'images/NYCEDC_RGB_name.jpg';

    $scope.sponsors = [{
      sponsor1 : imageSponsor1,
      sponsor1name: "Grand Central Tech",
      sponsor2 : imageSponsor2,
      sponsor2name: "Google",
      sponsor3 : imageSponsor3,
      sponsor3name: "NYCEDC",
    }];

})

.controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
  $scope.close = function () {
    $mdSidenav('left').close()
      .then(function () {
        $log.debug("close LEFT is done");
      });
  };
})

.controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log) {
  $scope.close = function () {
    $mdSidenav('right').close()
      .then(function () {
        $log.debug("close RIGHT is done");
      });
  };
});

