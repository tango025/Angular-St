(function(){
  'use strict'
angular.module("DIC",[])
.controller("DIController",DIController);
DIController.$inject = ['$scope','$filter']
function DIController($scope, $filter){
  $scope.name = "GAURAV";
  $scope.upper = function(){
    var upCase = $filter('lowercase');
    $scope.name = upCase($scope.name);
  };
}
})();
