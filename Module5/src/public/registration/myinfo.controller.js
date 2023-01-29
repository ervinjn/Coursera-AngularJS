(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['UserService'];
function MyInfoController(UserService) {
  var ctrl = this;
  
  ctrl.registered = UserService.registered
  ctrl.userdata = {};

  if(ctrl.registered) { 
    ctrl.userdata = UserService.retrieve() 
    ctrl.imagepath = 'images/menu/' + ctrl.userdata.short_name + '.jpg'
  }



}


})();
