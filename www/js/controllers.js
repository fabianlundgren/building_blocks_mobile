angular.module('building-blocks.controllers', [])

.controller('HomeController', function($scope, News) {
   $scope.news = News.query();
})

.controller('FacilityController', function($scope, Facility) {
   $scope.facilities = Facility.query();
});
