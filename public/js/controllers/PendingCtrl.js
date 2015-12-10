angular.module('PendingCtrl', []).controller('PendingController', function($scope) {

  $scope.path = 'pending';

  $scope.list = [
      { id: 1, question: 1, answer: 'Foo', category: 'blah' },
      { id: 2, question: 3, answer: 'Foo', category: 'blah' },
      { id: 3, question: 4, answer: 'Foo', category: 'blah' },
  ];


});
