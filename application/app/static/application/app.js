var router = angular.module('router', ['ui.router']);

router.config(function($stateProvider, $urlRouterProvider) {
//$urlRouterProvider.otherwise('/index.html');

	$stateProvider

	.state('index', {
            url: 'index.html',
	    templateUrl: '/testTemplate.tpl.html'
	})

	.state('about', {
	
	});


});
