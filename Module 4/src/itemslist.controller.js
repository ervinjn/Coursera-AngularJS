(function () {
'use strict';

angular.module('data')
.controller('ItemsListController', ItemsListController);


CategoriesListController.$inject = ['items'];
function CategoriesListController(items) {
  var CLctrl = this;
  CLctrl.items = items.data;


}