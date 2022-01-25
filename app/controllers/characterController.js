App.controller('CharacterController', [
  '$scope',
  'CharacterFactory',
  function ($scope, CharacterFactory, $window) {

    $scope.charactersList = [];
    $scope.limit = 9;
    $scope.offset = 0;
    $scope.page = 0;

    $scope.load = function () {
      CharacterFactory
        .getCharacters($scope.offset, $scope.limit)
        .then(result => $scope.charactersList = result?.characters);
    }


    $scope.changePage = function (newPage = 0) {
      $scope.page = newPage;
      $scope.offset = $scope.limit * newPage;
      $scope.load();
    }



    $scope.load();
  }
]);