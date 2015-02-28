(function(){
	'use strict';

	var app = angular.module('fiftyTwoApp', ['helpers']);

	app.controller('ProjectController', ['$http', function (http) {
		var projectCtrl = this;
		projectCtrl.projects = [];
		projectCtrl.expand = false;

	    http.get('./data/projects.json').success(function(data){
	        projectCtrl.projects = data;
	        for (var i = 0; i<projectCtrl.projects.length; i++){
	    		projectCtrl.projects[i].show = false;
	    	}
	    });

	    projectCtrl.setActive = function(thisProject){
	    	for (var i = 0; i<projectCtrl.projects.length; i++){
	    		if (thisProject == projectCtrl.projects[i]) thisProject.show = true;
    			else projectCtrl.projects[i].show = false;
	    	}
	    	projectCtrl.expand = true;
	    };

	    projectCtrl.isActive = function(thisProject){
	    	for (var i = 0; i<projectCtrl.projects.length; i++){
	    		if (thisProject == projectCtrl.projects[i]) return projectCtrl.projects[i].show;
	    	} 	
	    }

	    projectCtrl.minimize = function(thisProject){
	    	thisProject.show = false;
	    	projectCtrl.expand = false;
	    }
	}]);
})();