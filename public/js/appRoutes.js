angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		// List Pending
		.when('/pending', {
			templateUrl: 'views/list.html',
			controller: 'PendingController'
		})

		// List 
		.when('/list', {
			templateUrl: 'views/list.html',
			controller: 'ListController'
		})

	$locationProvider.html5Mode(true);

}]);
