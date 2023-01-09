(function () {
'use strict';


// Component to show all the menu items for a particular category

angular.module('MenuApp')
.component('itemList', {
  templateUrl: 'src/templates/itemslist.component.template.html',
  bindings: {
    items: '<'
  }
});

})();