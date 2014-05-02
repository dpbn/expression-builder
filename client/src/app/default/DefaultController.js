app.controller('DefaultController', ['$scope', '$q', 'Signals', 'Rules', 'Executions', 'Entities', 'Expressions',
function($scope, $q, Signals, Rules, Executions, Entities, Expressions){
	$scope.model = {
		signals: [],
		entities: [],
		rules: [],
		executions: []
	};
	
	$scope.init = function(){

		var signals = Signals.get();
		var executions = Executions.get();
		var rules = Rules.get();
		var entities = Entities.get();

		$q.all([
			signals.then(function(response){
				$scope.model.signals = response.values;
			}),
			executions.then(function(response){
				$scope.model.executions = response.values;
			}),
			rules.then(function(response){
				$scope.model.rules = response.values;
			}),
			entities.then(function(response){
				var models = [];
				_.each(response.modelInfo, function(model){
					models.push({label: model.label, key: model.value, fields: undefined != model.fields ? model.fields.split(',') : []});
				});
				$scope.model.entities = models;
			})
		]).then(function(){
			// Blargity blarg - do something here if need be.
		});
	}();
}]);