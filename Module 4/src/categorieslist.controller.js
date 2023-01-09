(function () {
'use strict';

angular.module('data')
.controller('CategoriesListController', CategoriesListController);


CategoriesListController.$inject = ['items'];
function CategoriesListController(items) {
  var CLctrl = this;
  CLctrl.items = items.data;


}




// CategoriesListController.$inject = ['MenuDataService', 'items'];
// function CategoriesListController(MenuDataService, items) {
//   var array = this;
//   CLctrl.catarray = array;

//   CLctrl.getcategories = function () {
//     var list = MenuDataService.getAllCategories()
//     return list
//   }

//   CLctrl.getdetails = function (categoryShortName) {
//     var list = MenuDataService.getItemsforCategory(categoryShortName)
//     return list
//   }

  
})();