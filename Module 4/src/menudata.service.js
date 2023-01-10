(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$q','$http']
function MenuDataService($q,$http) {
  var service = this;


    service.getAllCategories = function () {
	    console.log("getAllCategories function called")
        var response = $http({
            method: "GET",
     //	    url: "data/categories.json"
            url: "https://coursera-jhu-default-rtdb.firebaseio.com/categories.json"  
            })
            return response;
    }


service.getItemsforCategory = function (categoryShortName) {
        var response = $http({
            method: "GET",
     	//   url: string.concat("data/",categoryShortName,".json")
      	     url: "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/%7BcategoryShortName%7D.json"  
            })
        return(response)
    }

	}
})();
