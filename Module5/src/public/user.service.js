(function () {
"use strict";

angular.module('public')
.service('UserService', UserService);


//    MenuService.$inject = ['$http', 'ApiPath']; 

function UserService() {
  var service = this;

  var service.data = {};

  service.store = function (userdata) { 
    service.data = userdata
    return(true)
  };
  // The store method expects an object containing user data.  
  // It simply stores that data in a variable that is availabe throughout the service.
  // It also returns a true value, indicating that the data has been stored.


  service.retrieve = function() { return data }
  // The retrieve returns to stored data object to the caller. 

}


})();