(function(){
  'use strict'
  angular.module("LunchCheck",[])
  .controller("LunchCheckController",LunchCheckController);
function LunchCheckController($scope){
  $scope.items = "";
  $scope.message = "";
  $scope.checkfood = function(){
    mainLogic(count());
  }
  function count(){
    var comma = ',';
    var arr = $scope.items.split(comma);
    if(arr[0] == ""){return(0);}
    else {return(arr.length);}
  }
  function mainLogic(num){
    if(num == 0){$scope.message = "Please enter data first";}
    else if(num <= 3){$scope.message = "Enjoy!";}
    else{$scope.message = "Too much!";}
  }
}
})();
