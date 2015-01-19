'use strict';

/* Controllers */

var fiftyTwoApp = angular.module('fiftyTwoApp', []);

fiftyTwoApp.controller('FiftyTwoCtrl', function($scope) {
  $scope.projects = [
    {'name': 'Weathery',
     'url': 'http://jeffersonlam.github.io/weathery/',
     'date': 'January 11th, 2015',
     'git': 'https://github.com/jeffersonlam/weathery',
     'img': 'img/weathery.jpg',
     'blurb': 'View the weather in gifs. This project was my exercise in raw Javascript for doing API requests in AJAX.'
    }, 
    {'name': 'Fifty Two',
     'url': 'http://jeffersonlam.github.io/fifty-two/',
     'date': 'January 19th, 2015',
     'git': 'https://github.com/jeffersonlam/fifty-two',
     'img': 'img/52.jpg',
     'blurb': 'A web page built in Angular to house my 52 week code project. The fact that you\'re looking at this means I was successful in building my first Angular app! One of my goals is to get comfortable with the MEAN stack (MongoDB, Express, Angular, Node), so learning Angular is my first step towards that goal.',
    }
  ];
});
