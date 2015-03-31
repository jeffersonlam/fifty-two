(function(){
	'use strict';

	var app = angular.module('fiftyTwoApp', ['ngAnimate']);

	app.controller('ProjectController', ['$http', function (http) {
		this.projects = [];
		this.active = null;
		var projectCtrl = this;

	    http.get('./data/projects.json').success(function(data){
	        projectCtrl.projects = data;
	        for (var i = 0; i < data.length; i++){
	        	if (i == data.length-1){
	        		data[i].next = data[0];
	        	} else {
	        		data[i].next = data[i+1];
	        	}
	        	if (i == 0){
	        		data[i].prev = data[data.length-1];
	        	} else {
	        		data[i].prev = data[i-1];
	        	}
	        }
	    });

	    this.setActive = function(index){
	    	this.active = this.projects[this.projects.length - index - 1];
	    };

	    this.isActive = function(index){
	    	return (this.active === index);
	    }

	    this.close = function(){
	    	this.active = null;
	    }

	    this.showNext = function(){
	    	this.active = this.active.next;
	    }
	    this.showPrev = function(){
	    	this.active = this.active.prev;
	    }
	}]);
	
	app.filter('reverse', function() {
	  return function(items) {
	  	if (!items || !items.length) return;
	    return items.slice().reverse();
	  };
	});

	app.directive('backImg', function(){
	    return function(scope, element, attrs){
	        attrs.$observe('backImg', function(value) {
	            element.css({
	                'background-image': 'url(' + value +')'
	            });
	        });
	    };
	});
})();