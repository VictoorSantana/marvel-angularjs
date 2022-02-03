App.controller('CharacterController', [
  '$scope',
  'CharacterFactory',
  function ($scope, CharacterFactory, $window) {

    $scope.loading = false;
    $scope.charactersList = [];
    $scope.limit = 9;
    $scope.offset = 0;
    $scope.page = 0;
    $scope.search = '';

    $scope.load = function (startsWith = '') {
      $scope.loading = true;
      CharacterFactory
        .getCharacters($scope.offset, $scope.limit, startsWith)
        .then(result => {
          $scope.charactersList = result?.characters;
          $scope.loading = false;
        })
        .catch(ex =>  {
          $scope.charactersList = [];
          $scope.loading = false;
        })
    }

    $scope.changePage = function (newPage = 0) {
      $scope.page = newPage;
      $scope.offset = $scope.limit * newPage;
      $scope.load();
    }

    $scope.changeSearch = function () {
      $scope.offset = 0;
      $scope.load($scope.search);
    }
    
    $scope.load();
  }
]);