angular.module('MainCtrl', []).controller('MainController', function($scope, $rootScope) {
  var list = $firebaseArray($rootScope.scrollRef);

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
    list.add({question: $scope.question, answer: $scope.answer, category: $scope.selectedItem});
    list.save()

  };

});
