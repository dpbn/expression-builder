
var app = angular.module('angular-app', ['ngRoute', 'ngResource', 'ui.bootstrap', 'xeditable', 'os']);

app.config(['$routeProvider','$httpProvider',
  function ($routeProvider, $httpProvider) {
  	$httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

	$routeProvider.
	    when('/', {
	        templateUrl: 'templates/default/default.tpl.html',
	        controller: 'DefaultController'
	    }).otherwise({
	        redirectTo: '/'
	    });
  	}
]);

app.run(function(editableOptions){
	editableOptions.theme = 'bs3';
	editableOptions.buttons = 'no';
})