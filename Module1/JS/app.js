(function () {

'use strict';


angular.module('LunchCheck', [])

.controller("LunchCheckController", function ($scope) {

	$scope.items = "";
	$scope.message = "";
	$scope.messagecolor = "black"
	$scope.buttoncolor = "black"
	$scope.displaymessage = function() {
			var stringarray = $scope.items.split(',')
	/*		stringarray = clean(stringarray) */
			var mc = messageColorGenerator(itemcounter(stringarray))
			$scope.messagecolor = mc[0]
			$scope.buttoncolor = mc[1]
			$scope.message = mc[2]
		};

});

		/* function to remove empty strings from the lunch items list (couldn't get this to work) */
	/*	function clean (stringarray) {
			if (stringarray[0] == "" && stringarray.length==1) { return(stringarray)}   /* the case where items array is empty   
			var newstringarray = stringarray
			for(let i=0; i < stringarray.length; i++) {
				console.log(stringarray[i])
				if(stringarray[i] == " ") { newstringarray = stringarray.splice(i,1)}
			}
			return(newstringarray)
			}
		};  */


		function itemcounter (stringarray) {
			if (stringarray[0] ==  "" && stringarray.length==1) { var count = 0}
			else {var count = stringarray.length}
			return(count)
	}; 

		function messageColorGenerator(count) {
			var mc = ["black", "black", "no message"]; 
			if(count == 0) {
				mc[0] = "red"
				mc[1] = "red"
				mc[2] = "No lunch?! Outrageous! Just you go back and enter some items."
				return(mc)
			}  else if(count <= 3) {
				mc[0] = "green"
				mc[1] = "green"
				mc[2] = "You're having three or fewer items. Enjoy, responsible eater!"
				return(mc);
			} else {
				mc[0] = "green"
				mc[1] = "green"
				mc[2] = "Whoa there!  Are those empty calories? You might consider sharing (hint, hint). "
				return(mc);
			}
		}

		


})();