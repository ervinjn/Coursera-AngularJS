(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
   return $http.get(ApiPath + 'data/categories.json').then(function (response) {
     return response.data;
    });

  
  };


  service.getMenuItems = function (category) {
    return $http.get(ApiPath + 'data/' + category + '.json').then(function (response) {
      return response.data;
   });


  

  };

}



})();
