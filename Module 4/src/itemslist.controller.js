(function () {
'use strict';

angular.module('data')
.controller('ItemsListController', ItemsListController);


ItemsListController.$inject = ['listdata'];
function ItemsListController(listdata) {
  var itemsctrl = this;
  itemsctrl.data = listdata;
}

})();
