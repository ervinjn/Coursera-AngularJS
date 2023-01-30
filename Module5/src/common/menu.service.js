(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
 //  return $http.get(ApiPath + 'data/categories.json').then(function (response) {
 //    return response.data;
 //   });
//    https://coursera-jhu-default-rtdb.firebaseio.com/categories.json
    return $http.get('data/categories.json').then(function (response) {
     return response.data;
    });

  
  };


  service.getMenuItems = function (category) {
  //  return $http.get(ApiPath + '/menu_items/' + category + '.json').then(function (response) {
   //   return response.data;
  // });

     return $http.get('data/' + category + '.json').then(function (response) {
      return response.data;
   });
};


service.getAllMenuItems = function() {
    return $http.get('data/menu.json').then( function(response) { return response.data}); 
};


}


}



})();
