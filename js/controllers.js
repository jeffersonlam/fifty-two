'use strict';

/* Controllers */

var fiftyTwoApp = angular.module('fiftyTwoApp', []);

fiftyTwoApp.controller('FiftyTwoCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('./posts/posts.json').success(function(data){
        $scope.projects = data;
    })
}]);