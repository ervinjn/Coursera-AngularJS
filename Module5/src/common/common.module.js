(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://github.com/ervinjn/Coursera-AngularJS/tree/main/Module5/')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
