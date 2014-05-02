angular.module("os.expressions", []).provider('Expressions', function(){
	var operators = [
		{ value: ">", label: "is greater than" },
		{ value: "<", label: "is less than" },
		{ value: "==", label: "is equal to" },
		{ value: "!=", label: "is not equal to" },
		{ value: "startsWith", label: "starts with" },
		{ value: "&&", label: "and"},
		{ value: "||", label: "or" },
		{ value: "_.contains", label: "contains"},
		{ value: "!_.contains", label: "does not contain"}
	];

	return {
		$get: function(){
			return {
				// Returns the operator label for the given operator key
				getOperatorLabel: function(operatorKey){
					var op = _.findWhere(operators, { value: operatorKey });
					if(undefined == op){
						throw "Could not find operator " + operatorKey;
					}

					return op.label;
				},

				// Returns true if the given expression is a compound
				// expression, false otherwise.  A compound expression
				// is just an expression where the operands are expressions
				isCompoundExpression: function(expression){
					var test = _.filter(expression.operands, function(o){
						return o.type=="expression" && (o.value.operator.value != "&&" && o.value.operator.value != "||");
					});
					return undefined != expression.operator && (expression.operator.value == "&&" || expression.operator.value == "||") &&
						undefined != test && test.length > 1;
				},

				// Returns a string that represents the given expression
				buildExpressionString: function(expression, exprstr){
					if(undefined == expression || undefined == expression.type || expression.type == 'empty'){
						return "undefined";
					}

					if(expression.type == "value"){
						return " " + expression.value + " ";
					}

					var str = "";
					for(var i=0; i<expression.value.operands.length; i++){
						var operand = expression.value.operands[i];
						var paren = this.isCompoundExpression(operand.value)

						str += " " + (paren ? "(" : "") + this.buildExpressionString(operand, str) + " " +
							(i<expression.value.operands.length -1 ? this.getOperatorLabel(expression.value.operator.value) : "") + (paren ? ")" : "");
					}

					return str;
				},

				// Returns a javascript string representing the given expression
				buildExpressionJS: function(expression, exprstr){
					if(undefined == expression || undefined == expression.type || expression.type == 'empty'){
						return "undefined";
					}

					if(expression.type == "value"){
						return " this." + expression.value + " ";
					}

					var str = "";
					for(var i=0; i<expression.value.operands.length; i++){
						var operand = expression.value.operands[i];
						var paren = this.isCompoundExpression(operand.value)

						str += " " + (paren ? "(" : "") + this.buildExpressionJS(operand, str) + " " + (paren ? ")" : "");
						if(i<expression.value.operands.length -1){
							str += " " + expression.value.operator.value;
						}

						var test = str;
					}

					return str;
				},

				// Returns an empty complex expression
				getEmptyComplexExpression: function(){
					return {
						type: 'expression',
						value: {
							operands: [
								{
									type: 'empty',
									value: {}
								},
								{
									type: 'empty',
									value: {}
								}
							],
							operator: {label: 'and', value: '&&'}
						}
					}
				},

				// Returns an empty simple expression (condition)
				getEmptySimpleExpression: function(){
					return {
						type: 'expression',
						value: {
							operands: [
								{
									type: 'value',
									value: 'v1'
								},
								{
									type: 'value',
									value: 'v2'
								}
							],
							operator: {label: 'is equal to', value: '=='}
						}
					}
				},

				// Returns a list of operators
				getOperators: function(){
					return operators;
				},

				// Given a rule, returns an expression object
				buildExpression: function(rule){

				},

				// Given an expression, returns a rule (template and conditions)
				buildRule: function(expression){

				},

				parseCondition: function(condition){
					
				},

				buildCondition: function(expression){
					
				}
			}
		}
	}
});
	