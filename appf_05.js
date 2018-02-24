(function(){
  'use strict';

  var shopList1 = [
    "Milk","cornFlakes","Egg","Eggos","Banana","Peanut butter"
  ];
  var shopList2 = [
    {
      item :"milk",
      qty : "2"
    },
    {
      item : "cornFlakes",
      qty : "3"
    },
    {
      item : "egg",
      qty : "6"
    },
    {
      item : "eggos",
      qty : "1"
    },
    {
      item : "Banana",
      qty : "5"
    },
    {
      item : "Peanut butter",
      qty : "1"
    }
  ];
  angular.module("shoppingList",[])
  .controller("shoppingListController",shoppingListController);

  shoppingListController.$inject = ['$scope'];

  function shoppingListController($scope){
    $scope.shopList1 = shopList1;
    $scope.shopList2 = shopList2;
    $scope.addToList = function(){
      var newItem = {
        item :$scope.itemName,
        qty : $scope.itemqty
      };
      $scope.shopList2.push(newItem);
    };
  }



})();
