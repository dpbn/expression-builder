/* Editor for a single expression
	Needs to have a list of signals and entities if you'd like to be able to choose values
	If readonly is set to true, it should (theoretically) just display the expression string.
		(It did at one point, but I've done a lot of work on it since that was implemented, so no guarentees)
*/
angular.module('os.directives.expressions', ['xeditable']).directive('expression', function(Expressions){
	return {
		templateUrl: 'templates/directives/expression.tpl.html',
		scope:{
			expression: '=expr',
			readonly: '=readonly',
			isRoot: '=root',
			signals: '=signals',
			entities: '=entities'
		},
		link: function(scope, element, attrs){
			scope.ops = Expressions.getOperators();
			scope.isCompound = Expressions.isCompoundExpression(scope.expression);
			var test = scope.signals;
		}
	}
});

/*
	This directive just acts as container for sub expressions.
	If you try to recursively nest directives without something like this, you'll just crash the shit
	out of your browser.
*/
angular.module('os.directives.expressions').directive('econtainer', function($compile, Expressions){
	return {
		template: "<div class='pull-left expression-element'></div>",
		scope: {
			expression: '=expr',
			readonly: '=readonly',
			signals: '=signals',
			entities: '=entities'
		},
		link: function(scope, element, attrs){
			if (undefined !== scope.expression) {
				scope.isCompound = Expressions.isCompoundExpression(scope.expression);
				scope.leftParen = scope.isCompound ? "(" : "";
				scope.rightParen = scope.isCompound ? ")" : "";

				var test = scope.signals;
				
            	element.append("<div class='pull-left' expression expr='expression' signals='signals' entities='entities' readonly='readonly' root='false'>");
            	$compile(element.contents())(scope);
          	}
		}
	}
});

/*
	This directive is responsible for the display and edit of operands
*/
angular.module('os.directives.expressions').directive('operand', function($document, $filter, Signals, Entities){
	return {
		templateUrl: 'templates/directives/operand.tpl.html',
		scope:{
			ngModel: "=ngModel",
			signals: "=signals",
			entities: "=entities",
			value: "=value"
		},
		link: function(scope, element, attrs){
			scope.listType = 'main';
			scope.showList = false;
			scope.selectedSignal = {};
			scope.selectedEntity = {};
			scope.proposedValue = "";

			scope.test = function(){
				var test = "foo";
			}

			scope.setSignalField = function(field){
				scope.value = { key: scope.selectedSignal.prefix + "." + field.key, label: scope.selectedSignal.name + " - " + field.label };
				scope.showList = false;
			}

			scope.setEntityField = function(field){
				scope.value = { key: scope.selectedEntity.key + "." + field, label: scope.selectedEntity.label + " - " + $filter('camel2Label')(field) };
				scope.showList = false;
			}

			scope.confirmProposedValue = function(){
				scope.value = scope.proposedValue;
				scope.showList = false;
			}

			scope.cancelProposedValue = function(){
				scope.proposedValue = "";
			}
		}
	}
})

/*
	This directive is responsible for the display and edit of rules as they relate to expressions
	(Given a rule, it will take care of modifying the rule's conditions and expression template)
*/
angular.module('os.directives.expressions').directive('expressionBuilder', function(Expressions){
	return {
		templateUrl: 'templates/directives/expressionBuilder.tpl.html',
		scope: {
			rule: '=rule',
			signals: '=signals',
			entities: '=entities',
		},
		link: function(scope, element, attrs){
			// let's assume right now that signals and entities must be supplied
			scope.model = {
				expressions: [],
				selectedExpressions: [],
				expressionString: ""
			};

			// returns the list of fields available for a given model type with a given id 
			scope.getFieldsForSignal = function(withId){
				var signal = _.findWhere(scope.model.signals, {id: withId});
				if(undefined != signal){
					return signal.fields;
				}
				return [];
			};

			scope.getFieldsForEntity = function(withName){
				if(undefined == _.find(scope.model.entities.modelTypes, function(mt){ return mt == withName; })){
					throw "could not find a model with the name: " + withName;
				}
				return scope.model.entities.modelInfo[withName].fields;
			};

			scope.startSimple = function(){
				scope.model.expressions.push(Expressions.getEmptySimpleExpression());
			};

			scope.addCondition = function(){
				scope.model.expressions.push(Expressions.getEmptySimpleExpression());
			};

			scope.toggleSelection = function(expression){
				if(_.find(scope.model.selectedExpressions, function(ex1){ return expression == ex1 })){
					scope.model.selectedExpressions.splice(expression, 1);
				}else{
					scope.model.selectedExpressions.push(expression);
				}
			};

			scope.combineSelectedExpressions = function(operator){
				var ex = { type: "expression", value: { operands: [], operator: operator} };
				_.each(scope.model.selectedExpressions, function(e){
					var i = _.indexOf(scope.model.expressions, e);
					scope.model.expressions.splice(i, 1);
					ex.value.operands.push(e);
				});
				scope.model.expressions.splice(0, 0, ex);
				scope.model.selectedExpressions = [];

				scope.model.expressionString = Expressions.buildExpressionJS(scope.model.expressions[0]);
			};
		}
	}
})

