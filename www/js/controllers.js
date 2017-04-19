angular.module('building-blocks.controllers', [])

.controller('HomeController', function($scope, News) {
   $scope.news = news.query();
});
