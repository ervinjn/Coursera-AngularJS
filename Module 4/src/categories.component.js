(function () {
'use strict';


// Component to show all available menu categories to the user

angular.module('MenuApp')
.component('categoryList', {
  templateUrl: 'src/templates/categorylist.component.template.html',
  bindings: {
    items: '<'
  }
});

})();
