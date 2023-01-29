(function () {
"use strict";

angular.module('public')
.service('UserService', UserService);


//    MenuService.$inject = ['$http', 'ApiPath']; 

UserService.$inject = ['MenuService'];
function UserService(MenuService) {
  var service = this;


  service.data = {};
  service.registered = false

  service.store = function (userdata) { 
    //  This method accepts the data that the user has entered from the controller, and stores 
    //  that information to be retrieved later with retrieve method. However, it also needs
    // to retrieve some data about the favorite menu item and make it available to the user.

    // We need to extract the category code from the item code
    var code = userdata.favdishcode
    var codearray = userdata.favdishcode.toCharArray()
    var i = 0
    while( !(codearray[i].isDigit) ) {  i = i+1 }
    var category = codearray.slice(0,i-1)


    var categorydata = MenuService.getMenuItems(category)

    i = 0
    while(!(categorydata[i].menu_items.short_name == code)){ i = i+1 }
    userdata.favdishinfo = categorydata[i]

    service.data = userdata
    service.registered = true
    return service.registered
  };
  // The store method expects an object containing user data.  
  // It simply stores that data in a variable that is availabe throughout the service.
  // It also returns a true value, indicating that the data has been stored.


  service.retrieve = function() { return service.data }
  // The retrieve returns the stored data object to the caller. 

}


})();