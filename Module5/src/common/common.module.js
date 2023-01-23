(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://github.com/ervinjn/Coursera-AngularJS/tree/main/')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
