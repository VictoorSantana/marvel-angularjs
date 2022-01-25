App.controller('ShowCharacterController', [
  '$scope',
  'CharacterFactory',
  '$routeParams',
  function ($scope, CharacterFactory, $routeParams) {

    $scope.character = {};

    $scope.load = function () {

      const { characterId } = $routeParams;

      CharacterFactory
        .getCharacter(characterId)
        .then(result => $scope.character = result?.characters[0]);
    }



    $scope.load();
  }
]);