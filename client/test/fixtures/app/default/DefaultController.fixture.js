describe('Default Controller', function(){

	var $scope,
		controller;
	
	beforeEach(function(){
		module('angular-app');
	});

	beforeEach(inject(function($rootScope, $controller){
		$scope = $rootScope.$new();
		controller = $controller('DefaultController', {
			$scope: $scope
		});
	}));

	it('should take scope as a dependency', function(){

	});
})