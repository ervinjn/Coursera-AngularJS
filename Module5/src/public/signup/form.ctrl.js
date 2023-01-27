(function () {
"use strict";

angular.module('public')
.controller('FormController', FormController);

FormController.$inject = ['UserService'];
function FormController(UserService) {
  var ctrl = this;
  ctrl.user = {
    firstname : "",
    lastname : "",
    email: "",
    phone: "",
    favdish: ""
  };
  console.log('initial user data: '+ ctrl.user)

  // ctrl.stored = false
 //  function ctrl.store(data) { 
  //  ctrl.stored = UserService.store(data) 
 //   return ctrl.stored
  // }



}


})();


