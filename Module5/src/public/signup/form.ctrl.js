(function () {
"use strict";

angular.module('public')
.controller('FormController', FormController);

FormController.$inject = ['$http','UserService','MenuService'];
function FormController($http,UserService,MenuService) {
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
  ctrl.items = $http.get('data/menu.json').then( function(response) { 
        return response.data;
        });
  
  console.log(ctrl.items.$$state)
  console.log(Object.keys(ctrl.items.$$state)

  //for(let prop in itemData) {
   //   for(let i=0; i < prop.menu_items.length; i++) { codes.push(prop.menu_items[i].short_name) } }
  //  console.log(ctrl.codes)


ctrl.stored = false
  ctrl.store = function() { 

    // first task, before storage, is to check whether they have entered a valid favdish code
    if (ctrl.codes.indexOf(ctrl.user.favdishcode) == -1){
        ctrl.invalidcode = true
    }
    else {
      ctrl.stored = UserService.store(ctrl.user) }
      
   }

  }
 
})();


