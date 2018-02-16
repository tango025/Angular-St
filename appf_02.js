(function(){
'use strict';

angular.module("nameCalculator",[])
.controller("nameCalculatorController",function($scope){
$scope.name = "";
$scope.totalValue = 0;
$scope.displayNameValue = function(){
  var nameValue = calcStringValue($scope.name);
  $scope.totalValue = nameValue ;
};
function calcStringValue(string){
  var tempValue = 0;
  for(var i = 0; i < string.length; i++){
    tempValue += string.charCodeAt(i);
  }
  return tempValue;
};
});
})();
