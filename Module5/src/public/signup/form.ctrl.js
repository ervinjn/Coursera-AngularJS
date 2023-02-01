(function () {
"use strict";

angular.module('public')
.controller('FormController', FormController);

FormController.$inject = ['UserService','allItems'];
function FormController(UserService,allItems) {
  var ctrl = this;
  ctrl.user = {
    firstname : "",
    lastname : "",
    email: "",
    phone: "",
    favdishcode: ""
  };

  

// Build an array of valid favdish codes
 ctrl.menuitems = allItems
 console.log(ctrl.menuitems)
 ctrl.codes = UserService.codes(ctrl.menuitems);   // controller passes the menu data to UserService so that is can build an array of item codes 
                                                  //to check against the user's provided item code
 console.log(ctrl.codes)

ctrl.invalidcode = false
ctrl.stored = false
ctrl.store = function() { 

    // first task, before storage, is to check whether they have entered a valid favdish code
    if (ctrl.codes.indexOf(ctrl.user.favdishcode) == -1){ ctrl.invalidcode = true }
    else { ctrl.stored = UserService.store(ctrl.user) }
      
   }

  }
 
})();


