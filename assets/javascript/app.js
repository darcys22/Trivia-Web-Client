angular.module('MainCtrl', []).controller('MainController', function($scope) {

  $scope.itemArray = [
      {id: 1, name: 'Geography'},
      {id: 2, name: 'Entertainment'},
      {id: 3, name: 'History'},
      {id: 4, name: 'Arts & Literature'},
      {id: 5, name: 'Science & Nature'},
      {id: 6, name: 'Sports & Leisure'},
  ];

  $scope.selectedItem = $scope.itemArray[0];
  
  $scope.submit = function() {




  };

});

angular.module('PendingCtrl', []).controller('PendingController', function($scope) {

  $scope.path = 'pending';

  $scope.list = [
      { id: 1, question: 1, answer: 'Foo', category: 'blah' },
      { id: 2, question: 3, answer: 'Foo', category: 'blah' },
      { id: 3, question: 4, answer: 'Foo', category: 'blah' },
  ];


});

angular.module('ListCtrl', []).controller('ListController', function($scope) {

  $scope.path = 'list';

  $scope.list = [
      { id: 1, question: 1, answer: 'Foo', category: 'blah' },
      { id: 2, question: 3, answer: 'Foo', category: 'blah' },
      { id: 3, question: 4, answer: 'Foo', category: 'blah' },
  ];


});

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

angular.module('myApp', ['ngRoute', 'appRoutes', 'ui.bootstrap', 'MainCtrl', 'PendingCtrl', 'ListCtrl', 'ui.select', 'ngSanitize']);