angular.module('os.filters',[])
.filter("camel2Label", function($filter) {
    return function(input) {
        if (!input) {return input}
        input = input.replace(/([a-z])([A-Z])/g,"$1 $2");
        return $filter("labelize")(input);
    }
})
.filter('labelize', function() {
    return function(input) {
        if (!input) {return input}
        if (input.length < 2) {
            input = input.toUpperCase()
        } else {
            input = input.replace(/[_]/g," ");
            input = input.replace(/\b([a-z])/g, function(e) {return e.toUpperCase()});
            input = input.replace(/^id|id$/i,"ID");
            input = input.replace(/^ids|ids$/i,"IDs");
            input = input.replace(/^tv|tv$/i,"TV");
        }
        return input;
    }
})