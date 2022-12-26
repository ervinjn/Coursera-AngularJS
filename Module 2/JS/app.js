(function () {
'use strict';

angular.module('ShoppingListCheckoff', [])
.controller('BuyController',BuyController)
.controller('BoughtController',BoughtController)
.service('ListService', ListService);

BuyController.$inject = ['ListService'];
function BuyController(ListService) {
	var buyctrl = this;
	buyctrl.buylist = [ 
		{name: "carton of milk", 	quantity: 1 },
		{name: "loaf of bread", 	quantity: 1 },
		{name: "tomatoes", 			quantity: 3 },
		{name: "avocado", 			quantity: 2 },
		{name: "onion(s)", 			quantity: 1 },
		{name: "bulb of garlic", 	quantity: 1 },
		{name: "head of lettuce", 	quantity: 1 },
		{name: "sweet potatoes", 	quantity: 2 },
		{name: "curry powder", 		quantity: 1 },
		{name: "bag of bay leaves", quantity: 1 },
		{name: "bags of lentils", 	quantity: 2 }
		];
	/* buyctrl.empty = function(){
		return(ListService.empty(buyctrl.buylist)) } */
	
	
	buyctrl.move = function (index) {
		ListService.move(buyctrl.buylist,index);
		/* buyctrl.buylist = ListService.move(buyctrl.buylist,index); */
	}
};


BoughtController.$inject = ['ListService']
function BoughtController(ListService) {
	var boughtctrl = this;
	boughtctrl.boughtlist = ListService.boughtlist
	/* boughtctrl.empty = function(){
		return(ListService.empty(boughtctrl.boughtlist)) } */

};



 function ListService() {	/*  Function for our Checkoff Service (which we will inject into both controllers)  */
  	var service = this;
 	service.boughtlist = []
 	/* service.empty = [false,true] */


  	service.move = function (list,index) {
  		service.boughtlist.push(list[index])
  		list.splice(index,1);
  		/* return(list) */
  	}


  /*	service.empty = function(list) {
  		return(list.length == 0)
	}; */

	};  /* end of checkserve function */


})();