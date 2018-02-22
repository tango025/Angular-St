(function(){
  'use strict'
angular.module("DIC",[])
.controller("DIController",DIController)
.filter("congo",congoFilter)
.filter("truth",truthFilter);
DIController.$inject = ['$scope','$filter','congoFilter'];
function DIController($scope, $filter,congoFilter){//here congo coes from congo in l-6 nt from congoFilter
  $scope.name = "GAURAV";
  $scope.upper = function(){
    var upCase = $filter('lowercase');
    $scope.name = upCase($scope.name);

  };
  $scope.msg = function(){
    var msg = "Gaurav likes to play drums";
    return msg;
  }
  $scope.congomsg = function(){
    var msg = "Gaurav likes to play drums";
    msg = congoFilter(msg);
    return msg;
  }
}
function congoFilter(){
  return function(input){
      input = input ||"";
      input = input.replace("drums","congo");
      return input;

  }
}
function truthFilter(){
  return function(input,target,replace){
    input = input ||"";
    input = input.replace(target,replace);
    return input;
  }
}
})();
