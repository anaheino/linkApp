'use strict';
var linkApp = angular.module('linkApp', ['ui.router']);

linkApp.config(function($stateProvider, $urlProvider) {
 $urlRouterProvider.otherwise('/home');

	$stateProvider

	.state('home' {
           url: '/home',
	   templateUrl: 'partial-home.html'
	})

	.state('about', {
	});

});
linkApp.controller('linkController', linkController);

function linkController($scope, $log) {

	$scope.getResult = getResult;

	function getResult() {
	    console.log('test');
	}
}
