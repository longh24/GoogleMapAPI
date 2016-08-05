var app = angular.module('mapApp', ["ngRoute","firebase"]); 

app.config(function($routeProvider) {
	$routeProvider.when('/', {
		controller: 'mainCtrl',
		templateUrl: 'templates/home.html'
	})                                 
});

app.controller('mainCtrl', function($scope, $http, $routeParams, $firebaseObject, $firebaseAuth) {

});