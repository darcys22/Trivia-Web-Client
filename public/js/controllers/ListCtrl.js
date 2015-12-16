angular.module('ListCtrl', []).controller('ListController', ['$rootScope', '$scope', '$firebaseArray', function($rootScope, $scope, $firebaseArray) {

  $scope.path = 'list';

  $scope.list = $firebaseArray($rootScope.scrollRef);

  $scope.list.scroll = $rootScope.scrollRef.scroll


}]);
