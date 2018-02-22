(function(){
'use strict';
angular.module("counterApp",[])
.controller("counterController",counterController);

counterController.$inject = ['$scope'];
function counterController($scope){
  $scope.onceCounter = 0;
  $scope.counter = 0;
  $scope.noOfWatchers = function  (){
    console.log("no of watchers",$scope.$$watchersCount);
    };
  $scope.countOnce = function(){
    $scope.onceCounter = 1
  };
  $scope.inCounter = function(){
    $scope.counter++;
  }
  $scope.$watch('onceCounter',function(newValue,oldValue){
    console.log("oldValue",oldValue);
    console.log("newValue",newValue);
  });
  $scope.$watch('counter',function(newValue,oldValue){
    console.log("Counter oldValue",oldValue);
    console.log("Counter newValue",newValue);
  });

  }
})();
