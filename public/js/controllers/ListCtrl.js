angular.module('ListCtrl', []).controller('ListController', function($scope) {

  $scope.path = 'list';

  $scope.list = [
      { id: 1, question: 1, answer: 'Foo', category: 'blah' },
      { id: 2, question: 3, answer: 'Foo', category: 'blah' },
      { id: 3, question: 4, answer: 'Foo', category: 'blah' },
  ];


});
