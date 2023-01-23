(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
  //  return $http.get(ApiPath + '/categories.json').then(function (response) {
   //   return response.data;
  //  });

    return $http.get('Module5/data/categories.json').then( function(response){
      return response.data;
    })
  };


  service.getMenuItems = function (category) {
//    return $http.get(ApiPath + '/menu_items/' + category + '.json').then(function (response) {
 //     return response.data;
 //   });


    return $http.get('Module5/data/' + category + '.json').then(function (response) {
      return response.data;

    })

  };

}



})();
