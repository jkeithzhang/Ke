angular.module('Studynote-Directive')
    .directive('myCustomer', function() {
	    	return {
	    		restrict: 'E',
	    		scope: {
	    			info: '='
	    		},
	    		templateUrl:'/partials/create'
	    	};
	})