(function(){
	'use strict';

	var app = angular.module('helpers', []);

	app.filter('reverse', function() {
	  return function(items) {
	  	if (!items || !items.length) return;
	    return items.slice().reverse();
	  };
	});
})();