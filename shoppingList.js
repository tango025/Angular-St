(function(){
  'use strict';
  angular.module("shopApp",[])
  .controller("shopListController",shopListController)
  .controller("showListController",showListController)
  .service("shopListService",shopListService);
  shopListController.$inject = ['shopListService'];
  function shopListController(shopListService){
    var list = this;
    list.itemName ="";
    list.itemQty ="";

    list.addToList = function(){
      shopListService.addItem(list.itemName,list.itemQty);
    };
  }
  showListController.$inject = ['shopListService'];
  function showListController(shopListService){
    var show = this;
    show.items = shopListService.getItems();
    show.removeItems = function(index){
      shopListService.removeItems(index);
    }
  }

  function shopListService(){
    var service = this;
    var items = [];

    service.addItem = function(itemName,qty){
      var item = {
        name : itemName,
        qty : qty
      };
      items.push(item);
    };
    service.getItems = function(){
      return items;
    };
    service.removeItems = function(index){
      items.splice(index,1);
    }
  }
})()
