angular.module('building-blocks', ['ionic', 'building-blocks.controllers', 'building-blocks.services', 'ngResource', 'ng-token-auth'])
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

  .config(function($authProvider, API_URL) {
    $authProvider.configure({
      apiUrl: API_URL
    });
  })

  .config(function ($httpProvider) {
    $httpProvider.defaults.headers.common.Accept = 'application/json';
  })

  .config(function($ionicConfigProvider) {
    $ionicConfigProvider.tabs.position('bottom');
  })

  .config(function($stateProvider, $urlRouterProvider) {


    $stateProvider

      .state('user', {
        url: '/',
        templateUrl: 'templates/user/user.html',
        controller: 'UserController'
      })

      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html',
        resolve: {
          auth: function($auth) {
            return $auth.validateUser();
          }
        }
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

      .state('tab.help_request', {
        url: '/help_request',
        views: {
          'tab-help_request': {
            templateUrl: 'templates/help_request/help_request.html',
            controller: 'HelpRequestController'
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
      })

      .state('tab.contact', {
        url: '/contact',
        views: {
          'tab-contact': {
            templateUrl: 'templates/contact/contact.html',
            controller: 'HomeController'
          }
        }
      });

    $urlRouterProvider.otherwise('/tab/home');

  });
