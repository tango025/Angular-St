(function(){
'use strict';

angular.module("myFirstApp",[])

.controller("myFirstController",function($scope){
  $scope.name = "Gaurav";
  $scope.greeing = function hello(){
    return "Hello Everyone";
  }
})
})();
