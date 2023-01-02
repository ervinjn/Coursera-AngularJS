(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController',NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItemsDirective',foundItemsDirective);


/*  our Controller   */
NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
	var ndctrl = this;
	ndctrl.searchTerm = ""
	ndctrl.foundItems = ""
	ndctrl.emptysearch = false
	ndctrl.searched = false
	ndctrl.removedsomething = false
	ndctrl.getmatchingitems = function (searchTerm) {
		if(searchTerm==0) {  
										ndctrl.emptysearch = true
										ndctrl.removedsomething = false
										 }
		else { 	ndctrl.emptysearch = false
						ndctrl.removedsomething = false
						ndctrl.searched = true
						ndctrl.foundItems = MenuSearchService.getMatchedMenuItems(searchTerm)}

		}
	

	ndctrl.removeItem = function(index) {
		console.log('made it here')
		ndctrl.removedsomething = true
		ndctrl.searched = false
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
		url: "data/menu.json"
  	//	url: "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json"  
  		}).then( function(response) {
  			for(let prop in response.data) {
  				var MenuItemArray = response.data[prop].menu_items
					for(let i = 0;i < MenuItemArray.length; i++) {
  					if(MenuItemArray[i].name.toLowerCase().indexOf(searchTerm) != -1) {
  						Menu.push(MenuItemArray[i])
  					}
  				}
  			}
  			});
  			return(Menu)
	 };

	 service.remove =function(array,index) {
	 	var array = array
	 	array.splice(index,1)
	 	return(array);
	 }
	};  /* end of service function */


/* our directive   */

function foundItemsDirective() {					/* scope of directive is scope of containing controller   */
	var ddo = {
//		templateUrl: 'foundItems.html',
		scope: {
				items: '<',
				onRemove: '&'
		}
	}

	return ddo;

}



})();
