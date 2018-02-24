(function(){
  'use strict';
  angular.module("controllerAsApp",[])
  .controller("parentController1",parentController1)
  .controller("childController1",childController1)
  .controller("parentController2",parentController2)
  .controller("childController2",childController2);

  parentController1.$inject = ['$scope'];
  function parentController1($scope){
      $scope.parentValue = 1;
      $scope.pc = this;
      $scope.pc.parentValue = 1;
  };

  childController1.$inject = ['$scope'];
  function childController1($scope){
    // console.log("$scope.parentValue = ",$scope.parentValue);
    // console.log("child __SCOPE :",$scope);
    // $scope.parentValue = 5;
    // console.log("changed $scope.parentValue = ",$scope.parentValue);
    // console.log("child __SCOPE :",$scope);
    // console.log("$scope.pc.parentValue : ",$scope.pc.parentValue);
    // $scope.pc.parentValue = 5;
    // console.log("$scope.pc.parentValue : ",$scope.pc.parentValue);
    // console.log("child __SCOPE :",$scope);
    //

  }
  function parentController2(){
    var parent = this;
    parent.value = 2;
  }
  childController2.$inject = ['$scope'];
  function childController2($scope){
    var child = this;
    child.value = 5;
    console.log("childController2 $scope : ",$scope);
  }
})();
