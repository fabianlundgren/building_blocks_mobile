angular.module('building-blocks.controllers', [])

  .controller('HomeController', function($scope, News) {

    $scope.news = News.query();
  })

  .controller('FacilityController', function($scope, Facility) {
    $scope.facilities = Facility.query();
  })

  .controller('HelpRequestController', function($scope, $location, HelpRequest) {
    $scope.error = null;
    $scope.help_request = {};


    $scope.createHelpRequest = function() {
      HelpRequest.save($scope.help_request, function(response) {
        $scope.error = null;
        $scope.message = response.message;
      }, function(error) {
        $scope.error = error.data.message;
      });
    }
  })

  .controller('UserController', function($scope, $auth, $state, AuthService) {
    $scope.registrationData = {};
    $scope.loginData = {};
    $scope.register = true;
    $scope.handleRegBtnClick = function() {
      AuthService.save($scope.registrationData, function(resp) {
          $state.go('tab.home');
        },
        function(error) {
          $scope.errors = error.data.errors.full_messages || error.data.errors;
        })
    }

    $scope.handleLgnBtnClick = function() {
      //debugger;
      $auth.submitLogin($scope.loginData)
        .then(function(resp) {
          // handle success response
          $state.go('tab.home');
        })
        .catch(function(error) {
          // handle error response
          $scope.errors = error.data;
        });
    }

    $scope.toggleToLgnBtnClick = function() {
      if ($scope.register === true) {
        $scope.register = false;
      } else {
        $scope.register = true;
      }

    }

    $scope.handleSignOutBtnClick = function() {
      $auth.signOut()
        .then(function(resp) {
          $state.go('user');
        })
        .catch(function(resp) {
          $scope.errors = error.data;
        });
    };
  });
