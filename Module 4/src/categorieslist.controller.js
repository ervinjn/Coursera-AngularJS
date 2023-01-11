(function () {
'use strict';

angular.module('data')
.controller('CategoriesListController', CategoriesListController);


CategoriesListController.$inject = ['items'];
function CategoriesListController(items) {
  var CLctrl = this;
  console.log(items.data)
  CLctrl.items = items.data
  }
  
})();
