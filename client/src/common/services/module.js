angular.module('os.services', [
	'os.signals', 
	'os.rules', 
	'os.executions', 
	'os.entities', 
	'os.utils', 
	'os.expressions'
]);

angular.module('os', ['os.services', 'os.directives', 'os.filters']);