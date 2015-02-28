(function(){
	'use strict';

	var app = angular.module('fiftyTwoApp', ['helpers']);

	app.controller('ProjectController', ['$http', function (http) {
		var projectCtrl = this;
		projectCtrl.projects = [];
		projectCtrl.active;
		projectCtrl.expanded = false;

	    http.get('./data/projects.json').success(function(data){
	        projectCtrl.projects = data;
	        for (var i = 0; i<projectCtrl.projects.length; i++){
	    		projectCtrl.projects[i].show = false;
	    	}
	    });

	    projectCtrl.setActive = function(index){
	    	projectCtrl.active = projectCtrl.projects.length - index - 1;
	    	projectCtrl.expanded = true;
	    };

	    projectCtrl.isActive = function(index){
	    	return (projectCtrl.active === index);
	    }

	    projectCtrl.close = function(){
	    	projectCtrl.active = null;
	    	projectCtrl.expanded = false;
	    }

	    projectCtrl.showNext = function(){
	    	projectCtrl.active = projectCtrl.nextProject();
	    }
	    projectCtrl.showPrev = function(){
	    	projectCtrl.active = projectCtrl.prevProject();	
	    }

	    projectCtrl.nextProject = function(){
	    	var num = projectCtrl.active;
	    	num--;
	    	if (num < 0) num = projectCtrl.projects.length-1;
	    	return num;
	    }

	    projectCtrl.prevProject = function(){
	 	   	var num = projectCtrl.active;
	    	num++;
	    	if (num >= projectCtrl.projects.length) num = 0;
	    	return num;
	    }
	}]);
})();