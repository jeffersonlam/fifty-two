(function(){
	'use strict';

	var app = angular.module('fiftyTwoApp', ['ngAnimate']);

	app.controller('ProjectController', ['$http', function (http) {
		this.projects = [];
		this.active;
		this.expanded = false;
		var projectCtrl = this;

	    http.get('./data/projects.json').success(function(data){
	        projectCtrl.projects = data;
	        for (var i = 0; i<projectCtrl.projects.length; i++){
	    		projectCtrl.projects[i].show = false;
	    	}
	    });

	    this.setActive = function(index){
	    	this.active = this.projects.length - index - 1;
	    	this.expanded = true;
	    };

	    this.isActive = function(index){
	    	return (this.active === index);
	    }

	    this.close = function(){
	    	this.active = null;
	    	this.expanded = false;
	    }

	    this.showNext = function(){
	    	this.active = this.nextProject();
	    }
	    this.showPrev = function(){
	    	this.active = this.prevProject();	
	    }

	    this.nextProject = function(){
	    	var num = this.active;
	    	num--;
	    	if (num < 0) num = this.projects.length-1;
	    	return num;
	    }

	    this.prevProject = function(){
	 	   	var num = this.active;
	    	num++;
	    	if (num >= this.projects.length) num = 0;
	    	return num;
	    }
	}]);
	
	app.filter('reverse', function() {
	  return function(items) {
	  	if (!items || !items.length) return;
	    return items.slice().reverse();
	  };
	});
})();