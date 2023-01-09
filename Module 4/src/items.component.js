(function () {
'use strict';


// Component to show all the menu items for a particular category

angular.module('MenuApp')
.component('categoryList', {
  templateUrl: 'src/templates/categorylist.component.template.html',
  bindings: {
    array: '<'
  }
});

})();