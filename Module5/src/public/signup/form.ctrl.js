(function () {
"use strict";

angular.module('public')
.controller('FormController', FormController);

FormController.$inject = ['$scope','$http','UserService','MenuService'];
function FormController($scope,$http,UserService,MenuService) {
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
 
  console.log(ctrl)

  $http.get('data/menu.json').then( function(response) { 
        console.log(response.data)
        ctrl.items = response.data;
        });


console.log(ctrl)

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


