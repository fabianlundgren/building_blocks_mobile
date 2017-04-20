angular.module('building-blocks', ['ionic', 'building-blocks.controllers', 'building-blocks.services', 'ngResource'])
    .constant('API_URL', 'https://building-blockz.herokuapp.com/api/v1')

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {


  $stateProvider

    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/home/home.html',
        controller: 'HomeController'
      }
    }
  })

  .state('tab.facilities', {
    url: '/facilities',
    views: {
      'tab-facilities': {
        templateUrl: 'templates/facilities/facilities.html',
        controller: 'FacilityController'
      }
    }
  });

  $urlRouterProvider.otherwise('/tab/home');

});
