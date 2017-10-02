angular.module('building-blocks', ['ionic', 'building-blocks.controllers', 'building-blocks.services', 'ngResource', 'ng-token-auth', 'ionic-datepicker', 'chart.js'])
    // .constant('API_URL', 'http://localhost:3000/api/v1')
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

.config(function (ionicDatePickerProvider) {
    var datePickerObj = {
      inputDate: new Date(),
      titleLabel: 'Välj ett datum',
      setLabel: 'Boka',
      todayLabel: 'Dagens datum',
      closeLabel: 'Stäng',
      mondayFirst: false,
      weeksList: ["S", "M", "T", "O", "T", "F", "L"],
      monthsList: ["Jan", "Feb", "Mars", "April", "Maj", "Juni", "Juli", "Aug", "Sept", "Okt", "Nov", "Dec"],
      templateType: 'popup',
      from: new Date(2012, 8, 1),
      to: new Date(2019, 8, 1),
      showTodayButton: false,
      dateFormat: 'dd MMMM yyyy',
      closeOnSelect: false,
      disableWeekdays: []
    };
    ionicDatePickerProvider.configDatePicker(datePickerObj);
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

      .state('el', {
        url: '/el',
        templateUrl: 'templates/el/el.html',
        controller: 'ElController',
      })

      .state('home', {
        url: '/home',
            templateUrl: 'templates/home/home.html',
            controller: 'HomeController'
      })

      .state('doc', {
        url: '/doc',
        templateUrl: 'templates/doc/doc.html',
        controller: 'DocController'
      })

      .state('book', {
        url: '/book/{booking:json}',
        templateUrl: 'templates/book/book.html',
        controller: 'BookController',
        params: {booking: null}
      })


      .state('help_request', {
        url: '/help_request',
            templateUrl: 'templates/help_request/help_request.html',
            controller: 'HelpRequestController'
      })

      .state('facilities', {
        url: '/facilities',
            templateUrl: 'templates/facilities/facilities.html',
            controller: 'FacilityController',
      })


      .state('news', {
        url: '/news',
        templateUrl: 'templates/news/news.html',
        controller: 'NewsController',
      })

      .state('contact', {
        url: '/contact',
            templateUrl: 'templates/contact/contact.html',
            controller: 'HomeController'
      });

    $urlRouterProvider.otherwise('/');

  });
