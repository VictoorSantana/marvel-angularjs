App.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/characters',
      {
        controller: 'CharacterController',
        templateUrl: 'app/templates/character.html'
      }
    ).when('/character/:characterId',
      {
        controller: 'ShowCharacterController',
        templateUrl: 'app/templates/show-character.html'
      }
    )
    .otherwise({ redirectTo: '/characters' });

    // $locationProvider.html5Mode(true)
});