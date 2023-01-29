(function () {
"use strict";

angular.module('public')
.controller('FormController', FormController);

FormController.$inject = ['UserService','MenuService'];
function FormController(UserService,MenuService) {
  var ctrl = this;
  ctrl.user = {
    firstname : "",
    lastname : "",
    email: "",
    phone: "",
    favdishcode: "",
    favdishinfo: ""
  };

  ctrl.invalidcode = false

  // Build an array of valid favdish codes
  ctrl.codes = [];
  ctrl.categories = MenuService.getCategories();
  for(let i=0; ctrl.categories.length; i++) {
    ctrl.codes.push(ctrl.categories[i].short_name)
  }

 ctrl.stored = false
  ctrl.store = function(data) { 

    // first task, before storage, is to check whether they have entered a valid favdish code
    if (ctrl.codes.indexOf(ctrl.user.favdishcode) == -1){
        ctrl.invalidcode = true
    }
    else {
      ctrl.stored = UserService.store(data) 
      return ctrl.stored}
   }



}


})();


