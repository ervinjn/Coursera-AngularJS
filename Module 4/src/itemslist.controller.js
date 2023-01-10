(function () {
'use strict';

angular.module('data')
.controller('ItemsListController', ItemsListController);


ItemsListController.$inject = ['data'];
function ItemsListController(data) {
  var itemsctrl = this;
  itemsctrl.data = data;
}

})();
