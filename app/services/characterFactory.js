


App.factory('CharacterFactory', ['$http', '$q', 'md5', function ($http, $q, md5) {
  var factory = {};
  var apiUrl = 'https://gateway.marvel.com:443/v1/public/';
  var apiKey = '5a237863b3cc2061003cbbc4fe20dc06';
  var apiPrivateKey = 'fbf255068eccea6d0ef951b9f25626b57ab2fe72';


  factory.getCharacters = function (offset = 1, limit = 10) {
    var def = $q.defer();    

    const currentTime = new Date().toISOString();
    const hash = md5.createHash(currentTime + apiPrivateKey + apiKey);
    const url = `${apiUrl}characters?limit=${limit}&offset=${offset}&hash=${hash}&apikey=${apiKey}&ts=${currentTime}`;

    $http.get(url).success(function (response) {
      if (response.data.results.length > 0) {
        def.resolve({
          characters: response.data.results
        });
      } else {
        def.reject({
          message: 'Unable to find that character'
        });
      }
    }).error(function () {
      def.reject({
        message: 'API error'
      });
    });

    return def.promise;
  }



  factory.getCharacter = function (characterId = 0) {
    var def = $q.defer();    

    const currentTime = new Date().toISOString();
    const hash = md5.createHash(currentTime + apiPrivateKey + apiKey);
    const url = `${apiUrl}characters/${characterId}?hash=${hash}&apikey=${apiKey}&ts=${currentTime}`;

    $http.get(url).success(function (response) {
      if (response.data.results.length > 0) {
        def.resolve({
          characters: response.data.results
        });
      } else {
        def.reject({
          message: 'Unable to find that character'
        });
      }
    }).error(function () {
      def.reject({
        message: 'API error'
      });
    });

    return def.promise;
  }



  return factory;


}]);