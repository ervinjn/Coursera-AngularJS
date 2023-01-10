(function () {
'use strict';

angular.module('data')
.controller('ItemsListController', ItemsListController);


ItemsListController.$inject = ['listdata'];
function ItemsListController(data) {
  var itemsctrl = this;
  itemsctrl.data = data;
}

})();
