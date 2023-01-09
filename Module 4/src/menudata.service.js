(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$q','$http']
function MenuDataService($q,$http) {
  var service = this;


    service.getAllCategories = function () {
        var response = $http({
            method: "GET",
     //     url: "data/menu.json"
            url: "https://coursera-jhu-default-rtdb.firebaseio.com/categories.json"  
            })
            return response;
    }


service.getItemsforCategory = function (categoryShortName) {
    var categories = [];    /* initialize array to be passed back to caller   */
        var response = $http({
            method: "GET",
     //     url: "data/menu.json"
            url: "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/%7BcategoryShortName%7D.json"  
            })
        return(response)
    }

	}
})();
