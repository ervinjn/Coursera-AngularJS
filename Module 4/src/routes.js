(function () {
'use strict';


// Here we configure three states


angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

// State configuration for the Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.template.html'
  })


// State configuration for the Categories List
  .state('CategoryList', {
    url: '/Category-List',
    templateUrl: 'src/templates/categorylist.template.html',
    controller: 'CategoriesListController as CLctrl',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories()
      }]
    }
  })

  // State configuration for the detailed items list
 // State configuration for the Categories List
  .state('Items', {
    url: '/Category-List/{shortName}',
    templateUrl: 'src/templates/itemslist.template.html',
    controller: 'ItemsListController as itemsctrl',
    resolve: {
      data: ['$stateParams','MenuDataService', function ($stateParams, MenuDataService) {
        return MenuDataService.getItemsforCategory($stateParams.shortName).then( function (response) {
            return response.data })    }]
      }
  })

}  // ends the route configuration functon (see line 12)



})();