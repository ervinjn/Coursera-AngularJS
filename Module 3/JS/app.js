(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController',NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems',foundItems);


/*  our Controller   */
NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
	var ndctrl = this;
	ndctrl.searchTerm = ""
	ndctrl.foundItems = ""

	ndctrl.getmatchingitems = function (searchTerm) {
		ndctrl.foundItems = MenuSearchService.getMatchedMenuItems(searchTerm)
	}

	ndctrl.removeItem = function(index) {
		 ndctrl.foundItems = MenuSearchService.remove(ndctrl.foundItems,index);
	}

};



/*  Our Service   */
MenuSearchService.$inject = ['$q','$http'];
function MenuSearchService($q,$http) {
  var service = this;

  service.getMatchedMenuItems = function(searchTerm) {
  	var Menu = [];    /* initialize array to be passed back to caller   */
  	var response = $http({
  		method: "GET",
  		url: "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json"   /*  parmameter values automatically url-encoded    */
  		}).then( function(response) {
  			for(item in response) {
					for(let j = 0;j < item.menu_items.length; j++) {
  					if(item.menu_items[j].name.toLowerCase().indexOf(searchTerm) != -1) {
  					Menu.push(menu_items[j])
  					}
  				}


  			}

  			return(Menu)
  		});
	 };

	 service.remove =function(array,index) {
	 	var array = array
	 	array.splice(index,1)
	 	return(array);
	 }
	};  /* end of service function */


/* our directive   */

function foundItems() {					/* scope of directive is scope of containing controller   */
	var ddo = {
		templateUrl: 'foundItems.html',
		scope: {
				items: '<',
				remove: '&'
		}
	}

	return ddo;

}



})();