(function () {
"use strict";

angular.module('public')
.service('UserService', UserService);




UserService.$inject = ['MenuService'];
function UserService(MenuService) {
  var service = this;


  service.userdata = {};
  service.registered = false


  service.codes = function(menu) {
    service.menudata = menu
    service.codearray = [];
    var categories = Object.keys(menu)
    categories.forEach((category) => {
      var items = menu[category].menu_items
      for(let j=0;j< items.length;j++ ) { codearray.push(items[j].short_name)} })
    return service.codearray
      }


  service.store = function (userdata) { 
    //  This method accepts the data that the user has entered from the controller, and stores 
    //  that information to be retrieved later with retrieve method. However, it also needs
    // to retrieve some data about the favorite menu item and make it available to the user.

    var favdishcode = userdata.favdishcode
    var favdisharray = userdata.favdishcode.toCharArray()    // favdishcode converted to a character array
    var i = 0
    while( !(codearray[i].isDigit) ) {  i = i+1 }
    var favcategory = favdisharray.slice(0,i-1)               // extracting the letter portion of the code and storing it in a variable


    var item_array = service.menudata[favcategory].menu_items      // array of menu items for the favorite cartegory
    i = 0
    while(!(item_array[i].short_name == favdishcode)){ i = i+1 }
    userdata.favdishinfo = item_array[i]

    service.userdata = userdata
    service.registered = true
    return service.registered
  };
  // The store method expects an object containing user data.  
  // It simply stores that data in a variable that is availabe throughout the service.
  // It also returns a true value, indicating that the data has been stored.


  service.retrieve = function() { return service.userdata }
  // The retrieve returns the stored data object to the caller. 

}


})();